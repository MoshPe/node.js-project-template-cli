import { NestFactory } from '@nestjs/core';
import { ServiceModule } from './app.module';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import { SwaggerModule } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';
import { createDocument } from './swagger/swagger';

async function bootstrap() {
  const app = await NestFactory.create(ServiceModule);
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json({ limit: '10MB' }));
  app.use(cors());

  const port = process.env.PORT || 9000;
  SwaggerModule.setup('api/v1/SERVICE_NAME', app, createDocument(app));
  Logger.log(
    `Swagger is up on port ${port} via path http://localhost:${port}/api/v1/SERVICE_NAME`,
    'NestApplication',
  );

  Logger.log(
    `Documentation is up and running on port ${port} via path http://localhost:${port}/docs/v1/SERVICE_NAME`,
    'NestApplication',
  );

  app.enableShutdownHooks();

  Logger.log(`App is listening in port ${port}`, 'NestApplication');
  await app.listen(port);
}
bootstrap();
