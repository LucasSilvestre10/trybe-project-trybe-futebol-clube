import { NextFunction, Request, RequestHandler, Response } from 'express';
import { IUserWithoutPassword } from '../utils/types';
import Auth from '../utils/Auth';

export interface AuthRequest extends Request {
  user?: IUserWithoutPassword
}

const authLoginRoleMiddleware:
RequestHandler = (request:AuthRequest, response:Response, next:NextFunction) => {
  try {
    const { authorization } = request.headers;
    if (!authorization) return response.status(401).json({ message: 'Token not found' });
    const resultToken = Auth.checkToken(authorization) as IUserWithoutPassword;
    const { id, username, role, email } = resultToken;
    if (resultToken) {
      request.user = {
        id: Number(id),
        username,
        role,
        email,
      };
    }
    next();
  } catch (error) {
    return response.status(401).json({ message: 'Token must be a valid token' });
  }
};

export default authLoginRoleMiddleware;
