import { Chip, Typography } from '@mui/material';

import { Pokemon } from '../types';
import PokemonAttributes from './PokemonAttributes';
import PokemonImageList from './PokemonImageList';
import PokemonStats from './PokemonStats';
import PokemonTypeRow from './PokemonTypeRow';

type Props = {
  isCaught: boolean;
  pokemon: Pokemon;
};

const PokemonSpecs = ({ pokemon, isCaught }: Props) => {
  return (
    <>
      <Typography variant="h2" className="mb-5 text-center capitalize">
        {pokemon.name}
      </Typography>
      <div className="relative flex flex-col gap-4 pt-5 md:flex-row">
        {isCaught && (
          <Chip
            className="absolute top-0 right-0"
            label="Is Already on Pokedex"
            color="success"
            size="small"
          />
        )}
        <PokemonImageList images={pokemon.images} name={pokemon.name} />
        <div className="md:w-1/2 flex flex-col gap-10 justify-center">
          <PokemonAttributes height={pokemon.height} weight={pokemon.weight} />
          <PokemonStats stats={pokemon.stats} />
          <PokemonTypeRow types={pokemon.types} />
        </div>
      </div>
    </>
  );
};

export default PokemonSpecs;
