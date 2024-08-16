import { useEffect, useState } from 'react';

import { getPokemonDetails } from '../lib/api';
import { Pokemon } from '../types';

export default function usePokemonDetails(id: string) {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<Pokemon | null>(null);
  const [error, setError] = useState<unknown | undefined>(undefined);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getPokemonDetails(id);
        setData(response);
        setError(null);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [id]);

  return { data, error, isLoading };
}
