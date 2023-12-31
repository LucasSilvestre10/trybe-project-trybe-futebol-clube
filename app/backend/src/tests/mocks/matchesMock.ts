import { IMatch, INewMatch } from '../../database/types';




export const matchesMock: IMatch[] = [
  {
    id: 1,
    homeTeamId: 16,
    homeTeamGoals: 1,
    awayTeamId: 8,
    awayTeamGoals: 1,
    inProgress: false
  },
  {
    id: 2,
    homeTeamId: 2,
    homeTeamGoals: 3,
    awayTeamId: 9,
    awayTeamGoals: 1,
    inProgress: false
  },
];

export const matchesMockWhithTeamName = [
  {
    id: 1,
    homeTeamId: 16,
    homeTeamGoals: 1,
    awayTeamId: 8,
    awayTeamGoals: 1,
    inProgress: false,
    homeTeam: {
      teamName: 'São Paulo'
    },
    awayTeam: {
      teamName: 'Grêmio'
    }
  },
  {
    id: 2,
    homeTeamId: 2,
    homeTeamGoals: 3,
    awayTeamId: 9,
    awayTeamGoals: 1,
    inProgress: true,
    homeTeam: {
      teamName: 'São Paulo'
    },
    awayTeam: {
      teamName: 'Internacional'
    }
  },
];

export const mockedTeam1 = {
  id: 16,
  teamName: 'São Paulo'
}

export const mockedTeam2 = {
  id: 2,
  teamName: 'Bahia'
}

export const newMatch: INewMatch = {
    homeTeamId: 16,
    homeTeamGoals: 8,
    awayTeamId: 2,
    awayTeamGoals: 2,
}