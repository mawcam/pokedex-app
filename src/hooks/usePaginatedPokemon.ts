import { useCallback, useEffect, useState } from 'react';

import { getPokemon, getPokemonList } from '../api';
import { PaginatedResultWithImage } from '../types';

export default function usePaginatedPokemon(
  limit: string = '16',
  offset: string = '0'
) {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<PaginatedResultWithImage | null>(null);
  const [error, setError] = useState<unknown | undefined>(undefined);

  const performFetch = useCallback(
    async <T extends unknown[]>(
      apiMethod: (...args: T) => Promise<PaginatedResultWithImage>,
      ...args: T
    ): Promise<void> => {
      setIsLoading(true);
      try {
        const response = await apiMethod(...args);
        setData(response);
        setError(null);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  const findPokemon = useCallback(
    async (name?: string) => {
      if (name) {
        return performFetch(getPokemon, name);
      }
      return performFetch(getPokemonList, limit, offset);
    },
    [limit, offset, performFetch]
  );

  const nextPage = useCallback(
    async (limit: string, offset: string) => {
      setIsLoading(true);
      performFetch(getPokemonList, limit, offset);
    },
    [performFetch]
  );

  useEffect(() => {
    findPokemon();
  }, [findPokemon]);

  return { data, error, isLoading, findPokemon, nextPage };
}
