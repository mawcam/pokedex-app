import { useCallback, useEffect, useState } from 'react';

import { RECORD_LIMIT } from '../constants';
import { getPokemon, getPokemonList } from '../lib/api';
import { PaginatedResultWithImage } from '../types';

export default function usePaginatedPokemon(
  limit: string = RECORD_LIMIT.toString(),
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
      performFetch(
        async (limit: string, offset: string) => {
          const response = await getPokemonList(limit, offset);
          if (data?.next) {
            // We don't care about the response here, we just want to prefetch the data
            // also I don't use await here because we don't need to wait for the response
            // it will be cached once it's done
            getPokemonList(limit, `${Number(offset) + Number(limit)}`);
          }
          return response;
        },
        limit,
        offset
      );
    },
    [performFetch, data?.next]
  );

  useEffect(() => {
    findPokemon();
  }, [findPokemon]);

  return { data, error, isLoading, findPokemon, nextPage };
}
