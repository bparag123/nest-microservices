import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap(): Promise<void> {
  /**Here this module will behave as a microservice and will be connected to given url
    with the RMQ transport
  */
  /**
   * Controllers of this module will be listning for the events which is fired over
   * the transport channel*/
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://guest:guest@localhost:5672'],
        queue: 'test_queue',
        queueOptions: {
          durable: false,
        },
      },
    },
  );
  app.listen().then(() => {
    console.log('Service1 is running as a microservice');
  });
}
bootstrap();
