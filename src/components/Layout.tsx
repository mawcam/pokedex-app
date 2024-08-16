import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material';
import Menu from '@mui/material/Menu';
import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import Logo from './Logo';

const pages = [
  { title: 'Home', url: '/' },
  { title: 'My Pokedex', url: '/pokedex' },
];

const Layout = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <div>
      <AppBar position="static" color="error">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Logo variant="responsive" />

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                className="[&_.active]:text-red-500"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page.title}
                    component={NavLink}
                    to={page.url}
                    onClick={handleCloseNavMenu}
                  >
                    <Typography textAlign="center">{page.title}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Logo variant="main" />
            <Box
              className="[&>.active]:text-red-300"
              sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}
            >
              {pages.map((page) => (
                <Button
                  component={NavLink}
                  to={page.url}
                  key={page.title}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page.title}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
    </div>
  );
};

export default Layout;
