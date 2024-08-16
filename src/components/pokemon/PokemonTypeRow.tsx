import { Typography } from '@mui/material';

import { PokemonType } from '../../types';

type Props = {
  types: Array<PokemonType>;
};

const PokemonTypeRow = ({ types }: Props) => {
  return (
    <div className="flex flex-col gap-5">
      <Typography variant="h5">Type</Typography>
      <div className="flex gap-4">
        {types.map((type) => (
          <img
            key={type.id}
            src={type.image}
            alt={type.name}
            title={type.name}
            className="h-5"
          />
        ))}
      </div>
    </div>
  );
};

export default PokemonTypeRow;
