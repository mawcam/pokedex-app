import CircularProgress from '@mui/joy/CircularProgress';
import { Typography } from '@mui/material';

type Props = {
  name: string;
  baseStat: number;
};

const PokemonStat = ({ name, baseStat }: Props) => {
  return (
    <div className="flex flex-col gap-2 items-center">
      <CircularProgress
        sx={{
          '--CircularProgress-progressColor': '#516395',
        }}
        size="lg"
        determinate
        value={baseStat}
        // color="success"
        className="stroke-amber-400"
      >
        <Typography color="#516395">{baseStat}</Typography>
      </CircularProgress>
      <Typography
        className="capitalize text-center"
        variant="body1"
        color="#516395"
      >
        {name.replace('-', ' ')}
      </Typography>
    </div>
  );
};

export default PokemonStat;
