import { Request, Response } from 'express';
import MatchService from '../services/MatchService';

class MatchController {
  static async getAll(_req:Request, res:Response): Promise<void> {
    const matches = await MatchService.getAll();

    res.status(200).json(matches);
  }
}

export default MatchController;
