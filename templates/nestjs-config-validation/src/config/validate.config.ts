import Ajv from 'ajv';
import { Logger } from '@nestjs/common';
import addFormats from 'ajv-formats';
import { ValidateException } from '../exceptions-filter/validate.exception';

export default function validate(config: object, configSchema: object): object {
  const logger = new Logger('SERVICE_NAMEConfigValidation');
  const AJV_OPTIONS = {
    allErrors: true,
    logger,
  };
  const ajv = new Ajv(AJV_OPTIONS);
  addFormats(ajv);
  const validator = ajv.compile(configSchema);
  if (!validator(config)) {
    Logger.error(JSON.stringify(validator.errors, null, '  '));
    throw new ValidateException(validator.errors);
  }
  return config;
}
