import { API_BASE_URL } from './constants';
import { PaginatedResult, PaginatedResultWithImage } from './types';

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
        url: data.species.url,
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
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
    };
  });

  return {
    ...data,
    results,
  };
};
