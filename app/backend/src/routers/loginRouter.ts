import { Request, Response, Router } from 'express';
import validateLogin from '../middlewares/validateLogin';
import LoginController from '../controllers/LoginController';

const router = Router();
router.post('/login', validateLogin, (request: Request, response: Response, next): void => {
  LoginController.login(request, response, next);
});

export default router;
