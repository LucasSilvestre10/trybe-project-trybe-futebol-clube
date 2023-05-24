import { Router } from 'express';
import MatchController from '../controllers/MatchController';

const matchesRouter = Router();

matchesRouter.get('/matches', (request, response) =>
  MatchController.getAll(request, response));

export default matchesRouter;
