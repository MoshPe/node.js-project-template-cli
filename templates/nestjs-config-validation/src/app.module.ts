import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { AppModule } from './controller/app.module';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { UtilsService } from './utils/utils.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: path.resolve('./documentation'),
      serveRoot: '/docs/v1/SERVICE_NAME',
    }),
    ConfigModule.forRoot({
      ignoreEnvFile: true,
      isGlobal: true,
      ignoreEnvVars: true,
      load: [configuration],
      validationOptions: {
        abortEarly: true,
      },
    }),
    AppModule,
    RouterModule.register([
      {
        path: 'api',
        module: AppModule,
      },
    ]),
  ],
  providers: [UtilsService],
})
export class ServiceModule {}
