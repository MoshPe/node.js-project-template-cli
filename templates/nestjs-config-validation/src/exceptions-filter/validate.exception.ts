import { HttpException, HttpStatus } from '@nestjs/common';

export class ValidateException extends HttpException {
  errors: string[] | any;
  constructor(errors?: string[] | any) {
    super('Validation Failed', HttpStatus.EXPECTATION_FAILED);
    this.errors = errors;
  }
}
