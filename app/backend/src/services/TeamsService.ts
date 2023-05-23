import Team from '../database/models/TeamsModel';

export default class TeamService {
  static async getAll(): Promise<Team[]> {
    const result = await Team.findAll();

    return result;
  }

  static async getById(id:number): Promise<Team> {
    const result = await Team.findOne({
      where: { id },
    });

    if (!result) {
      throw new Error('Team Not Found');
    }

    return result;
  }
}
