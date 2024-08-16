import { Container, Typography } from '@mui/material';

const Error = () => {
  return (
    <Container className="text-center my-10">
      <Typography variant="h2">Oops!</Typography>
      <Typography variant="h5">Something went wrong try again.</Typography>
    </Container>
  );
};

export default Error;
