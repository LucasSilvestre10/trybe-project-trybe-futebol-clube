import { Request, Response, Router } from 'express';
import authLoginRoleMiddleware from '../middlewares/authLoginRoleMiddleware';
import validateLogin from '../middlewares/validateLogin';
import LoginController from '../controllers/LoginController';

const router = Router();
router.post('/login', validateLogin, (request: Request, response: Response, next): void => {
  LoginController.login(request, response, next);
});

router.get('/login/role', authLoginRoleMiddleware, (req, res, next) =>
  LoginController.loginRole(req, res, next));

export default router;
