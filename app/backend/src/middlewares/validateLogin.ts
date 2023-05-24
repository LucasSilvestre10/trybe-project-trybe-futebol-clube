import { RequestHandler } from 'express';

const validateLogin: RequestHandler = (request, response, next) => {
  const { email, password } = request.body;

  if (!email || !password) {
    return response.status(400).json(
      { message: 'All fields must be filled' },
    );
  }

  next();
};

export default validateLogin;
