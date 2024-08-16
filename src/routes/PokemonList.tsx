import { Grid, TextField } from '@mui/material';

import Error from '../components/Error';
import GridSkeleton from '../components/GridSkeleton';
import NotFound from '../components/NotFound';
import PokemonItem from '../components/PokemonItem';
import Wrapper from '../components/Wrapper';
import { useDebounce } from '../hooks/useDebounce';
import usePokemon from '../hooks/usePokemon';

const PokemonList = () => {
  const debounce = useDebounce();
  const { data, error, isLoading, findPokemon } = usePokemon();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    debounce(() => findPokemon(value));
  };

  const renderContent = () => {
    if (isLoading) {
      return <GridSkeleton />;
    }

    if (!isLoading && Boolean(error)) {
      return <Error />;
    }

    if (!isLoading && data?.results.length === 0) {
      return <NotFound />;
    }

    return data?.results.map((pokemon) => (
      <Grid key={pokemon.name} item xs={12} md={4} lg={3}>
        <PokemonItem name={pokemon.name} image={pokemon.image} />
      </Grid>
    ));
  };

  return (
    <Wrapper>
      <section className="my-5">
        <TextField
          className="w-full"
          label="Search"
          variant="outlined"
          placeholder="Type any pokemon name..."
          onChange={handleChange}
        />
      </section>
      <Grid container spacing={2}>
        {renderContent()}
      </Grid>
    </Wrapper>
  );
};

export default PokemonList;
