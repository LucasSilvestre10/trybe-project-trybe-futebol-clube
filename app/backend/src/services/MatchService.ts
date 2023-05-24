import { IMatchWithTeamName } from '../database/types';
import MatchModel from '../database/models/MatchModel';

import Team from '../database/models/TeamsModel';

class MatchService {
  static async getAll(): Promise<IMatchWithTeamName[]> {
    const result = MatchModel.findAll({
      include: [
        {
          model: Team,
          as: 'homeTeam',
          attributes: { exclude: ['id'] },
        },
        { model: Team,
          as: 'awayTeam',
          attributes: { exclude: ['id'] },
        },
      ],
    });
    return result;
  }
}

export default MatchService;
