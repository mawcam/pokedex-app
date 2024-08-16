import { Typography } from '@mui/material';

import { PokemonStat as PokemonStatType } from '../types';
import PokemonStat from './PokemonStat';

type Props = {
  stats: Array<PokemonStatType>;
};

const PokemonStats = ({ stats }: Props) => {
  return (
    <div className="p-4 flex flex-col gap-5 bg-gradient-to-r from-[#A1C4FD] to-[#C2E9FB] rounded-lg">
      <Typography className="text-center" variant="h4" color="#516395">
        Stats
      </Typography>
      <div className="grid grid-cols-3 lg:grid-cols-6">
        {stats.map((stat) => (
          <PokemonStat key={stat.name} {...stat} />
        ))}
      </div>
    </div>
  );
};

export default PokemonStats;
