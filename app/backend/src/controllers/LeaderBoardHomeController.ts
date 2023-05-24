import { NextFunction, Request, Response } from 'express';
import LeaderboardHomeService from '../services/LeaderBoardHomeService';

class LeaderBoardHomeController {
  static async getLeaderBoard(_req: Request, response: Response, next:NextFunction): Promise<void> {
    try {
      const result = await LeaderboardHomeService.getLeaderBoard();
      response.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
}

export default LeaderBoardHomeController;
