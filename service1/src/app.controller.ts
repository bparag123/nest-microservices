import { Controller, Get } from '@nestjs/common';
import { Ctx, EventPattern, Payload, RmqContext } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @EventPattern('test')
  @Get()
  getHello(@Payload() data: number[], @Ctx() context: RmqContext): string {
    console.log(data);
    return this.appService.getHello();
  }
}
