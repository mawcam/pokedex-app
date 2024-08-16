import { Container, ContainerProps } from '@mui/material';
import { PropsWithChildren } from 'react';

const Wrapper = ({ children }: PropsWithChildren<ContainerProps>) => {
  return <Container className="mt-5">{children}</Container>;
};

export default Wrapper;
