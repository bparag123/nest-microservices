import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  app.listen(4000, () => {
    console.log('Service1 is available on port 4000');
  });
}
bootstrap();
