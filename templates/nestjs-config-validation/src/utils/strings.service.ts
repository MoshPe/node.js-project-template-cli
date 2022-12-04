import { Injectable } from '@nestjs/common';

@Injectable()
export default class StringsService {
  static readonly SERVICE_CONFIG_PATH = './src/config/service.config.json';
  static readonly SERVICE_NAME_SCHEMA_PATH =
    './src/models/SERVICE_NAME.config.model.json';
  static readonly SERVICE_NAME_CONFIG = 'SERVICE_NAMEConfig';
}
