//interfaces

export interface IEpisode {
  id: string;
  url: string;
  name: string;
  season: number;
  number: number;
  airdate: string;
  airtime: string;
  airstamp: string;
  runtime: number;
  image: {
    medium: string;
    original: string;
  };
  summary: string;
}
export interface IState {
  episodes: Array<any>;
  favorites: Array<any>;
}
export interface IAction {
  type: string;
  payload: any;
}
