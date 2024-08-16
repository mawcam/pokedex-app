import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import WavingHandIcon from '@mui/icons-material/WavingHand';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from '@mui/material';

import { ACTION_TYPE } from '../../constants';
import { PokemonActionType } from '../../types';

type Props = {
  name: string;
  image: string;
  isCaught: boolean;
  currentAction: PokemonActionType;
  handleClickAction: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const IMAGE_SIZE = 96;

const PokemonItem = ({
  name,
  image,
  isCaught,
  currentAction,
  handleClickAction,
}: Props) => {
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
          <Typography
            className="capitalize"
            gutterBottom
            variant="h5"
            component="div"
          >
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="flex justify-end">
        {currentAction === ACTION_TYPE.catch && (
          <IconButton
            aria-label="catch pokemon"
            color="error"
            title={`Catch ${name}!`}
            onClick={handleClickAction}
            disabled={isCaught}
            data-action={ACTION_TYPE.catch}
          >
            <CatchingPokemonIcon />
          </IconButton>
        )}
        {currentAction === ACTION_TYPE.release && (
          <IconButton
            aria-label="Release pokemon"
            color="error"
            title={`Let ${name} be free!`}
            onClick={handleClickAction}
            data-action={ACTION_TYPE.release}
          >
            <WavingHandIcon />
          </IconButton>
        )}
      </CardActions>
    </Card>
  );
};

export default PokemonItem;
