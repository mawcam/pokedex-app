import { Box, ImageList, ImageListItem } from '@mui/material';

type Props = {
  name: string;
  images: Array<string>;
};

const PokemonImageList = ({ images, name }: Props) => {
  return (
    <Box className="md:w-1/2 max-h-[calc(100dvh-92px)] overflow-y-scroll">
      <ImageList variant="masonry" cols={3} gap={8}>
        {images.map((image) => (
          <ImageListItem key={image}>
            <img srcSet={image} src={image} alt={name} loading="lazy" />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export default PokemonImageList;
