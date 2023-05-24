import { NextFunction, Request, Response } from 'express';
import LoginService from '../services/LoginService';

class LoginController {
  static async login(request: Request, response: Response, next: NextFunction) {
    try {
      const { email, password } = request.body;

      const result = await LoginService.login(email, password);

      return response.status(200).json({ token: result });
    } catch (error) {
      next(error);
    }
  }
}

export default LoginController;
