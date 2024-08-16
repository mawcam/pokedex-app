import { Typography } from '@mui/material';

import PokemonAttribute from './PokemonAttribute';

type Props = {
  height: number;
  weight: number;
};

const PokemonAttributes = ({ height, weight }: Props) => {
  const heightInInches = (height * 10) / 2.54;
  const heightInFeetInches = `${Math.floor(heightInInches / 12)}' ${Math.round(
    heightInInches % 12
  )}"`;
  const weightInPounds = (weight * 0.220462).toFixed(1) + ' lbs';
  return (
    <div className="p-4 flex flex-col gap-5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg">
      <Typography className="text-center" variant="h4" color="white">
        Attributes
      </Typography>
      <div className="grid grid-cols-2">
        <PokemonAttribute label="Height" value={heightInFeetInches} />
        <PokemonAttribute label="Weight" value={weightInPounds} />
      </div>
    </div>
  );
};

export default PokemonAttributes;
