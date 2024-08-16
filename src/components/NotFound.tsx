import SearchOffIcon from '@mui/icons-material/SearchOff';
import { Container, Typography } from '@mui/material';

const NotFound = () => {
  return (
    <Container className="text-center my-10">
      <SearchOffIcon sx={{ fontSize: 100 }} />
      <Typography variant="h5">Seems we can't find that pokemon</Typography>
    </Container>
  );
};

export default NotFound;
