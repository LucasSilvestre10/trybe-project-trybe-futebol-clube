import { Router } from 'express';
import authLoginRoleMiddleware from '../middlewares/authLoginRoleMiddleware';
import MatchController from '../controllers/MatchController';

const router = Router();

router.get('/matches', (request, response) => MatchController.getAll(request, response));

router.patch(
  '/matches/:id',
  authLoginRoleMiddleware,
  (request, response, next) => MatchController.uptade(request, response, next),
);

router.patch(
  '/matches/:id/finish',
  authLoginRoleMiddleware,
  (request, response, next) => MatchController.updateInProgres(request, response, next),
);

router.post(
  '/matches',
  authLoginRoleMiddleware,
  (request, response, next) => MatchController.create(request, response, next),
);

export default router;
