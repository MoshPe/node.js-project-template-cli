import { registerAs } from '@nestjs/config';
import * as fs from 'fs';
import * as path from 'path';
import validate from './validate.config';
import StringsService from '../utils/strings.service';

export default registerAs(StringsService.SERVICE_NAME_CONFIG, () => {
  const SERVICE_NAMESchemaFile = fs.readFileSync(
    path.resolve(StringsService.SERVICE_NAME_SCHEMA_PATH),
  );
  const SERVICE_NAMESchema = JSON.parse(SERVICE_NAMESchemaFile.toString());

  const configBuff = fs.readFileSync(
    path.resolve(StringsService.SERVICE_CONFIG_PATH),
  );

  const configObject: object = JSON.parse(configBuff.toString());

  return validate(configObject, SERVICE_NAMESchema);
});
