import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import { Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

type Props = {
  variant: 'main' | 'responsive';
};

const Logo = ({ variant }: Props) => {
  const isMainVariant = variant === 'main';
  const display = {
    xs: isMainVariant ? 'flex' : 'none',
    md: isMainVariant ? 'none' : 'flex',
  };

  return (
    <>
      <CatchingPokemonIcon
        sx={{
          display,
          mr: 1,
        }}
      />
      <Typography
        variant={isMainVariant ? 'h5' : 'h6'}
        noWrap
        component={NavLink}
        to="/"
        sx={{
          mr: 2,
          display,
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'inherit',
          textDecoration: 'none',
          ...(isMainVariant ? { flexGrow: 1 } : {}),
        }}
      >
        Pokedex App
      </Typography>
    </>
  );
};

export default Logo;
