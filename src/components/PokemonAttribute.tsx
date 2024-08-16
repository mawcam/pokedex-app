import { Typography } from '@mui/material';

type Props = {
  label: string;
  value: string;
};

const PokemonAttribute = ({ label, value }: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <Typography variant="subtitle1" color="white">
        {label}
      </Typography>
      <Typography variant="h6" color="#212121">
        {value}
      </Typography>
    </div>
  );
};

export default PokemonAttribute;
