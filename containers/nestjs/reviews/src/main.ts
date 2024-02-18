import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS using the cors() middleware
  app.enableCors({
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  app.use(express.json({ limit: '10000mb' }));

  // Handle preflight requests
  app.use((req, res, next) => {
    if (req.method === 'OPTIONS') {
      res.status(200).send();
    } else {
      next();
    }
  });

  await app.listen(8000);
}

bootstrap();
