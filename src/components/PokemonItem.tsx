import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';

type Props = {
  name: string;
  image: string;
};

const IMAGE_SIZE = 96;

const PokemonItem = ({ name, image }: Props) => {
  return (
    <Card>
      <CardActionArea sx={{ display: 'flex', gap: '0.5em' }}>
        <CardMedia
          component="img"
          sx={{ width: IMAGE_SIZE, height: IMAGE_SIZE }}
          image={image}
          alt={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default PokemonItem;
