import { Grid, Typography } from '@mui/material';

import PokemonItemList from '../components/PokemonItemList';
import Wrapper from '../components/Wrapper';
import usePokedex from '../hooks/usePokedex';

const PokedexPage = () => {
  const { list } = usePokedex();

  return (
    <Wrapper>
      <Typography
        className="text-center bg-gradient-to-r from-[#ff0000] via-[#cc0000] to-[#b3a125] text-transparent bg-clip-text"
        variant="h3"
      >
        My Pokedex
      </Typography>
      <Grid container spacing={2}>
        <PokemonItemList items={list} variant="pokedex" />
      </Grid>
    </Wrapper>
  );
};

export default PokedexPage;
