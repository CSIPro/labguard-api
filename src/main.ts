import * as dotenv from 'dotenv';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

dotenv.config({
  path: process.env.NODE_ENV === 'production' ? '.env' : '.env.development',
});

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilitar CORS con configuración específica
  app.enableCors({
    origin: ['http://localhost:5173', 'https://labguard.unison.mx'], // Permitir solo tu frontend local
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Authorization',
    credentials: true,
  });

  app.setGlobalPrefix('api/v1');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
