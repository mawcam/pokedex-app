import { useEffect } from 'react';

import { POKEDEX_KEY } from '../constants';
import { usePokedexStore } from '../lib/stores/pokedex';

export default function usePokedex() {
  const { list, addPokemon, removePokemon } = usePokedexStore();

  useEffect(() => {
    localStorage.setItem(POKEDEX_KEY, JSON.stringify(list));
  }, [list]);

  const isCaught = (id: string) => list.some((p) => `${p.id}` === id);

  return { list, addPokemon, removePokemon, isCaught };
}
