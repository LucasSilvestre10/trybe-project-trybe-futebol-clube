import { Request, Response } from 'express';
import TeamsService from '../services/TeamsService';

export default class TeamsController {
  constructor(private teamService: TeamsService) {}

  static async getAll(_request: Request, response: Response):Promise<void> {
    const result = await TeamsService.getAll();
    response.status(200).json(result);
  }

  static async getById(request: Request, response: Response):Promise<void> {
    const { id } = request.params;
    const result = await TeamsService.getById(Number(id));
    if (!result) {
      throw new Error('Team Not Found');
    }
    response.status(200).json(result);
  }
}
