import { NextFunction, Request, Response } from 'express';
import LoginService from '../services/LoginService';
import { AuthRequest } from '../middlewares/authLoginRoleMiddleware';

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

  static loginRole(request: AuthRequest, response: Response, next: NextFunction) {
    const { user } = request;
    try {
      if (user) {
        response.status(200).json({ role: user.role });
      }
    } catch (error) {
      next(error);
    }
  }
}

export default LoginController;
