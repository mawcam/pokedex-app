import { ACTION_TYPE } from './constants';

type NamedResult = {
  name: string;
  url: string;
};

export type NamedResultWithImage = NamedResult & {
  image: string;
  id: string;
};

export type PaginatedResult = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<NamedResult>;
};

export type PaginatedResultWithImage = Omit<PaginatedResult, 'results'> & {
  results: Array<NamedResultWithImage>;
};

export type PokemonResponseType = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};

export type PokemonResponseStat = {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
};

export type PokemonSprite = Record<
  string,
  Record<string, { name_icon: string | null }>
>;

export type PokemonType = {
  id: string;
  name: string;
  image: string;
};

export type PokemonStat = {
  name: string;
  baseStat: number;
};

export type Pokemon = {
  id: string;
  height: number;
  weight: number;
  name: string;
  types: Array<PokemonType>;
  stats: Array<PokemonStat>;
  images: Array<string>;
};

type ActionKeys = keyof typeof ACTION_TYPE;

export type PokemonActionType = (typeof ACTION_TYPE)[ActionKeys];
