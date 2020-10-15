import { ValidatorModule } from './modules/validators/validator.module';
import { ValidationConfig } from './configs/validation';
import { ResponseTransformInterceptor } from './interceptors/response.transform.interceptor';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { useContainer } from 'class-validator';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalInterceptors(new ResponseTransformInterceptor());

  app.useGlobalPipes(new ValidationPipe(ValidationConfig));

  useContainer(app.select(ValidatorModule), { fallbackOnErrors: true });

  const options = new DocumentBuilder()
    .setTitle('Japanese study.')
    .setDescription(
      'Application makes learning Japanese easier and more effective.',
    )
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document);

  const port = process.env.HTTP_PORT || 3000;
  await app.listen(port);
}
bootstrap();
