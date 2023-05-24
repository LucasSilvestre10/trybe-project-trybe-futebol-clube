import { ErrorRequestHandler } from 'express';
import HttpException from '../exceptions/HttpException';

const errorMiddleware: ErrorRequestHandler = (error, _request, response, _next) => {
  const { status, message } = error as HttpException;

  response.status(status || 500).json({ message });
};

export default errorMiddleware;
