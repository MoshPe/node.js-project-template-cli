import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  Logger,
} from '@nestjs/common';
import { ValidateException } from './validate.exception';
import { Request, Response } from 'express';
import { format } from 'date-and-time';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(HttpExceptionFilter.name);
  catch(exception: HttpException | ValidateException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();
    const returnExceptionResponse = {
      statusCode: status,
      error: exception.message,
      timestamp: format(new Date(), 'DD-MM-YYYY hh:mm:ss'),
      path: request.url,
    };
    this.logger.error(returnExceptionResponse);

    response.status(status).json(returnExceptionResponse);
  }
}
