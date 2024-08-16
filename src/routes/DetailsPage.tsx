import { Container } from '@mui/material';
import { useParams } from 'react-router-dom';

import PokemonSpecs from '../components/pokemon/PokemonSpecs';
import usePokedex from '../hooks/usePokedex';
import usePokemonDetails from '../hooks/usePokemonDetails';
import ErrorPage from './ErrorPage';

const DetailsPage = () => {
  const { pokemonId } = useParams();
  const { data, error, isLoading } = usePokemonDetails(pokemonId!);
  const { isCaught } = usePokedex();

  if (!pokemonId || error) {
    return <ErrorPage />;
  }

  return (
    <Container className="h-dvh">
      {isLoading && <p>Loading...</p>}
      {!isLoading && data && (
        <PokemonSpecs pokemon={data} isCaught={isCaught(data.id)} />
      )}
    </Container>
  );
};

export default DetailsPage;
