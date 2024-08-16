import { Grid, TextField } from '@mui/material';

import PokemonItemList from '../components/pokemon/PokemonItemList';
import Error from '../components/ui/Error';
import GridSkeleton from '../components/ui/GridSkeleton';
import NotFound from '../components/ui/NotFound';
import Wrapper from '../components/ui/Wrapper';
import { useDebounce } from '../hooks/useDebounce';
import usePokemon from '../hooks/usePaginatedPokemon';

const ListingPage = () => {
  const debounce = useDebounce();

  const { data, error, isLoading, findPokemon, nextPage } = usePokemon();

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

    return (
      <PokemonItemList
        items={data?.results || []}
        next={data?.next}
        previous={data?.previous}
        nextPage={nextPage}
      />
    );
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
      <Grid className="relative" container spacing={2}>
        {renderContent()}
      </Grid>
    </Wrapper>
  );
};

export default ListingPage;
