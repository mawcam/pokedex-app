import { create } from 'zustand';

import { POKEDEX_KEY } from '../../constants';
import { NamedResultWithImage } from '../../types';

interface PokedexState {
  list: Array<NamedResultWithImage>;
  addPokemon: (pokemon: NamedResultWithImage) => void;
  removePokemon: (id: string) => void;
}

export const usePokedexStore = create<PokedexState>()((set) => {
  const value = localStorage.getItem(POKEDEX_KEY);
  const list = value ? JSON.parse(value) : [];

  return {
    list,
    addPokemon: (pokemon) =>
      set((state) => {
        if (state.list.some((p) => p.id === pokemon.id)) {
          return state;
        }
        return { list: [...state.list, pokemon] };
      }),
    removePokemon: (id) =>
      set((state) => ({ list: state.list.filter((p) => p.id !== id) })),
  };
});
