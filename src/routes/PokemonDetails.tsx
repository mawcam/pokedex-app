import {
  Box,
  Container,
  ImageList,
  ImageListItem,
  Typography,
} from '@mui/material';
import { useParams } from 'react-router-dom';

import PokemonAttributes from '../components/PokemonAttributes';
import PokemonStats from '../components/PokemonStats';
import PokemonTypeRow from '../components/PokemonTypeRow';
import usePokemonDetails from '../hooks/usePokemonDetails';
import ErrorPage from './ErrorPage';

const PokemonDetails = () => {
  const { pokemonId } = useParams();
  const { data, error, isLoading } = usePokemonDetails(pokemonId!);

  if (!pokemonId || error) {
    return <ErrorPage />;
  }

  return (
    <Container className="h-dvh">
      {isLoading && <p>Loading...</p>}
      {!isLoading && data && (
        <>
          <Typography variant="h2" className="mb-5 text-center capitalize">
            {data.name}
          </Typography>
          <div className="flex flex-col gap-4 pt-5 md:flex-row">
            <Box className="md:w-1/2 max-h-[calc(100dvh-92px)] overflow-y-scroll">
              <ImageList variant="masonry" cols={3} gap={8}>
                {data.images.map((item) => (
                  <ImageListItem key={item}>
                    <img
                      srcSet={`${item}?w=248&fit=crop&auto=format&dpr=2 2x`}
                      src={`${item}?w=248&fit=crop&auto=format`}
                      alt={data.name}
                      loading="lazy"
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </Box>
            <div className="md:w-1/2 flex flex-col gap-10 justify-center">
              <PokemonAttributes height={data.height} weight={data.weight} />
              <PokemonStats stats={data.stats} />
              <PokemonTypeRow types={data.types} />
            </div>
          </div>
        </>
      )}
    </Container>
  );
};

export default PokemonDetails;
