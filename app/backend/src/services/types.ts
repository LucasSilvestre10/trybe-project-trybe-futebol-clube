export interface Login {
  email: string;
  password: string;
}

export interface ITeamLeaderboard {
  name:string;
  totalPoints:number;
  totalGames:number;
  totalVictories: number;
  totalDraws: number;
  totalLosses: number;
  goalsFavor: number;
  goalsOwn:number;
  goalsBalance:number;
  efficiency:number;
}
