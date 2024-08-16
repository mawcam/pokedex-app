import { useCallback, useEffect, useState } from 'react';

import { getPokemon, getPokemonList } from '../api';
import { PaginatedResultWithImage } from '../types';

export default function usePokemon(limit?: string, offset?: string) {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<PaginatedResultWithImage | null>(null);
  const [error, setError] = useState<unknown | undefined>(undefined);

  const findPokemon = useCallback(
    async (name?: string) => {
      setIsLoading(true);
      try {
        const response = name
          ? await getPokemon(name)
          : await getPokemonList(limit, offset);
        setData(response);
        setError(null);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    },
    [limit, offset]
  );

  useEffect(() => {
    findPokemon();
  }, [findPokemon]);

  return { data, error, isLoading, findPokemon };
}
