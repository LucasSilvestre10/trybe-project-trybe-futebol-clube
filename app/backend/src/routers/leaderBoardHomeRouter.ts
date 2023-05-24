import { Router } from 'express';
import LeaderboardHomeController from '../controllers/LeaderBoardHomeController';

const router = Router();

router.get('/leaderboard/home', (req, res, next) =>
  LeaderboardHomeController.getLeaderBoard(req, res, next));

export default router;
