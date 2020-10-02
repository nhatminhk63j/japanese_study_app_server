import { ValidationConfig } from './configs/validation';
import { ResponseTransformInterceptor } from './interceptors/response.transform.interceptor';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalInterceptors(new ResponseTransformInterceptor());

  app.useGlobalPipes(new ValidationPipe(ValidationConfig));

  const port = process.env.HTTP_PORT || 3000;
  await app.listen(port);
}
bootstrap();
