import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { urlencoded, json, Response, Request, Express } from 'express';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(json({ limit: '2mb' }));
  app.use(urlencoded({ extended: true, limit: '2mb' }));

  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix('api');

  if (process.env.NODE_ENV === 'production') {
    // if any file or route is handled by another resource of express
    // express will return the index.html from the client
    // and now React will try to handle the request
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const path = require('path');
    const server: Express = app.getHttpServer();

    server.get('*', (req: Request, res: Response) => {
      res.sendFile(
        path.resolve(__dirname, '..', 'client', 'build', 'index.html'),
      );
    });
  }

  console.log('LISTENING:', process.env.PORT);

  await app.listen(process.env.PORT || 3001);
}

bootstrap();
