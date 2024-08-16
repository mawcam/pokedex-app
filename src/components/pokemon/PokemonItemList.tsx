import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';

import { ACTION_TYPE } from '../../constants';
import usePokedex from '../../hooks/usePokedex';
import { NamedResultWithImage } from '../../types';
import PokemonItem from './PokemonItem';

type Variant = 'listing' | 'pokedex';

type Props = {
  variant?: Variant;
  items: Array<NamedResultWithImage>;
};

const PokemonItemList = ({ items, variant = 'listing' }: Props) => {
  const { addPokemon, removePokemon, isCaught } = usePokedex();

  const isListing = variant === 'listing';
  const breakpoints = {
    xs: isListing ? 12 : 12,
    md: isListing ? 6 : 6,
    lg: isListing ? 3 : 6,
  };

  return items.map((pokemon) => {
    const handleAction = (e: React.SyntheticEvent<HTMLButtonElement>) => {
      e.preventDefault();

      const { action } = e.currentTarget.dataset;

      if (action === ACTION_TYPE.catch) {
        return addPokemon(pokemon);
      }

      removePokemon(pokemon.id);
    };

    return (
      <Grid
        key={pokemon.id}
        {...breakpoints}
        to={pokemon.url}
        item
        component={Link}
      >
        <PokemonItem
          name={pokemon.name}
          image={pokemon.image}
          handleClickAction={handleAction}
          isCaught={isCaught(pokemon.id)}
          currentAction={isListing ? ACTION_TYPE.catch : ACTION_TYPE.release}
        />
      </Grid>
    );
  });
};

export default PokemonItemList;
