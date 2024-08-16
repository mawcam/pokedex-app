import { API_BASE_URL } from './constants';
import {
  PaginatedResult,
  PaginatedResultWithImage,
  Pokemon,
  PokemonResponseStat,
  PokemonResponseType,
  PokemonSprite,
  PokemonStat,
  PokemonType,
} from './types';

export const getPokemon = async (name: string) => {
  const response = await fetch(`${API_BASE_URL}/v2/pokemon/${name}`);
  const data = await response.json();
  return {
    count: 1,
    next: null,
    previous: null,
    results: [
      {
        name: data.name,
        url: `/pokemon/${data.id}`,
        image: data.sprites.front_default,
      },
    ],
  } as PaginatedResultWithImage;
};

export const getPokemonList = async (
  limit: string = '24',
  offset: string = '0'
): Promise<PaginatedResultWithImage> => {
  const params = new URLSearchParams({ limit, offset }).toString();
  const response = await fetch(`${API_BASE_URL}/v2/pokemon?${params}`);
  const data: PaginatedResult = await response.json();

  const results = data.results.map((pokemon) => {
    const url = new URL(pokemon.url);
    const id = url.pathname.split('/').filter(Boolean).pop();
    return {
      ...pokemon,
      url: `/pokemon/${id}`,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
    };
  });

  return {
    ...data,
    results,
  };
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
  const response = await fetch(`${API_BASE_URL}/v2/pokemon/${id}`);
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

  return {
    id: data.id,
    name: data.name,
    height: data.height,
    weight: data.weight,
    stats,
    types,
    images,
  };
};
