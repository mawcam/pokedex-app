import { Typography } from '@mui/material';
import { useRouteError } from 'react-router-dom';

type Error = {
  statusText?: string;
  message: string;
};

const ErrorPage = () => {
  const error = useRouteError() as Error;
  console.error(error);

  return (
    <div className="h-dvh flex flex-col justify-center items-center">
      <Typography variant="h1">Oops!</Typography>
      <Typography variant="body1">
        Sorry, an unexpected error has occurred.
      </Typography>
      <Typography variant="body2">
        <i>{error.statusText || error.message}</i>
      </Typography>
    </div>
  );
};

export default ErrorPage;
