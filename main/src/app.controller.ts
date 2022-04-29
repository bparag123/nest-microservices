import { Body, Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('CLIENT_SERVICE') private readonly client: ClientProxy,
  ) {}

  @Get()
  getHello(@Body() data): string {
    this.client.emit('test', data);
    return this.appService.getHello();
  }
}
