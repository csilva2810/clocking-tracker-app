import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { urlencoded, json } from 'express';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(json({ limit: '2mb' }));
  app.use(urlencoded({ extended: true, limit: '2mb' }));

  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3001);
}

bootstrap();
