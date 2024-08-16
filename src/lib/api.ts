import { API_BASE_URL } from '../constants';
import {
  PaginatedResult,
  PaginatedResultWithImage,
  Pokemon,
  PokemonResponseStat,
  PokemonResponseType,
  PokemonSprite,
  PokemonStat,
  PokemonType,
} from '../types';
import caching from './caching';

export const getPokemon = async (name: string) => {
  const url = `${API_BASE_URL}/v2/pokemon/${name}`;

  const cachedResponse = caching.get(url) as
    | PaginatedResultWithImage
    | undefined;

  if (cachedResponse) {
    return cachedResponse;
  }

  const response = await fetch(url);
  const data = await response.json();
  const result = {
    count: 1,
    next: null,
    previous: null,
    results: [
      {
        id: `${data.id}`,
        name: data.name,
        url: `/pokemon/${data.id}`,
        image: data.sprites.front_default,
      },
    ],
  } as PaginatedResultWithImage;
  caching.set(url, result);

  return result;
};

export const getPokemonList = async (
  limit: string,
  offset: string
): Promise<PaginatedResultWithImage> => {
  const params = new URLSearchParams({ limit, offset }).toString();
  const url = `${API_BASE_URL}/v2/pokemon?${params}`;

  const cachedResponse = caching.get(url) as
    | PaginatedResultWithImage
    | undefined;

  if (cachedResponse) {
    return cachedResponse;
  }

  const response = await fetch(url);
  const data: PaginatedResult = await response.json();

  const results = data.results.map((pokemon) => {
    const url = new URL(pokemon.url);
    const id = url.pathname.split('/').filter(Boolean).pop();
    return {
      ...pokemon,
      id: `${id!}`,
      url: `/pokemon/${id}`,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
    };
  });

  const result = {
    ...data,
    results,
  };
  caching.set(url, result);

  return result;
};

const getAllSpriteImages = (
  sprites: PokemonSprite | { name_icon: string }
): Array<string> => {
  const values = Object.values(sprites);

  const images = values.reduce((acc, value) => {
    if (!value) {
      return acc;
    }

    if (typeof value === 'string') {
      return [...acc, value];
    }

    return [...acc, ...getAllSpriteImages(value)];
  }, [] as Array<string>);

  return images;
};

const getTypeImage = (sprites: PokemonSprite) => {
  return (
    sprites?.['generation-ix']?.['scarlet-violet']?.name_icon ||
    sprites?.['generation-viii']?.['brilliant-diamond-and-shining-pearl']
      ?.name_icon ||
    sprites?.['generation-viii']?.['sword-shield']?.name_icon ||
    sprites?.['generation-viii']?.['legends-arceus']?.name_icon
  );
};

export const getPokemonDetails = async (id: string): Promise<Pokemon> => {
  const url = `${API_BASE_URL}/v2/pokemon/${id}`;

  const cachedResponse = caching.get(url) as Pokemon | undefined;
  if (cachedResponse) {
    return cachedResponse;
  }

  const response = await fetch(url);
  const data = await response.json();
  const images = getAllSpriteImages(data.sprites);

  const promises = (data.types as Array<PokemonResponseType>).map(
    async (type) => {
      const response = await fetch(type.type.url);
      return response.json();
    }
  );

  const types = (await Promise.all(promises)).map(
    (response) =>
      ({
        id: response.id,
        name: response.name,
        image: getTypeImage(response.sprites),
      } as PokemonType)
  );

  const stats = data.stats.map(
    (stat: PokemonResponseStat) =>
      ({
        name: stat.stat.name,
        baseStat: stat.base_stat,
      } as PokemonStat)
  );

  const result = {
    id: `${data.id}`,
    name: data.name,
    height: data.height,
    weight: data.weight,
    stats,
    types,
    images,
  };
  caching.set(url, result);

  return result;
};
