import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('CLIENT_SERVICE') private readonly client: ClientProxy,
  ) {}

  @Get()
  getHello(): string {
    this.client.emit('test', { msg: 'hello my microservice' });
    return this.appService.getHello();
  }
}
