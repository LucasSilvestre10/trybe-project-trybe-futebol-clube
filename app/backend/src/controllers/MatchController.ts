import { NextFunction, Request, Response } from 'express';
import MatchService from '../services/MatchService';

class MatchController {
  static async getAll(request:Request, response:Response): Promise<void> {
    const { inProgress } = request.query;

    let matches;
    if (inProgress && typeof inProgress === 'string') {
      console.log(inProgress);
      matches = await MatchService.matchesFilteredByInProgress(inProgress);
    } else {
      // Chame a função que busca todas as partidas no banco de dados
      matches = await MatchService.getAll();
    }

    response.status(200).json(matches);
  }

  static async updateInProgres(
    request:Request,
    response:Response,
    next:NextFunction,
  ):Promise<void> {
    const { id } = request.params;
    try {
      const result = await MatchService.updateInProgress(Number(id));
      response.status(200).json({ message: result });
    } catch (error) {
      next(error);
    }
  }

  static async uptade(
    request:Request,
    response:Response,
    next:NextFunction,
  ):Promise<void> {
    const { id } = request.params;
    const { homeTeamGoals, awayTeamGoals } = request.body;

    try {
      const result = await MatchService.update(Number(id), homeTeamGoals, awayTeamGoals);
      response.status(200).json({ updatedId: result });
    } catch (error) {
      next(error);
    }
  }

  static async create(
    request:Request,
    response:Response,
    next:NextFunction,
  ):Promise<void> {
    const newMatch = request.body;
    try {
      const result = await MatchService.create(newMatch);

      response.status(201).json(result);
    } catch (error) {
      next(error);
    }
  }
}

export default MatchController;
