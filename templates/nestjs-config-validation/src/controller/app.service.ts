import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SERVICE_NAMEInterface } from "../config/configuration.interface";
import StringsService from "../utils/strings.service";

@Injectable()
export class AppService {
    config: SERVICE_NAMEInterface;

    constructor(private configService: ConfigService){
        this.config = this.configService.get<SERVICE_NAMEInterface>(StringsService.SERVICE_NAME_CONFIG);
    }
  getHello(): string {
    return 'Hello World!';
  }
}
