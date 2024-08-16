import { Container, ContainerProps } from '@mui/material';
import { PropsWithChildren } from 'react';

const Wrapper = ({ children }: PropsWithChildren<ContainerProps>) => {
  return <Container className="pt-5">{children}</Container>;
};

export default Wrapper;
