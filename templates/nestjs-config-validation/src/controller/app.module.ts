import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UtilsService } from '../utils/utils.service';
import { AppService } from './app.service';


@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    UtilsService,
    AppService
  ],
})
export class AppModule {}
