import { Router } from 'express';
import TeamsController from '../controllers/TeamsController';

const router = Router();

router.get('/teams', (request, response) => TeamsController.getAll(request, response));
router.get('/teams/:id', (request, response) => TeamsController.getById(request, response));

export default router;
