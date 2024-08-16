import { Grid, Skeleton } from '@mui/material';

import { RECORD_LIMIT } from '../../constants';

type Props = {
  boxes?: number;
};

const GridSkeleton = ({ boxes = RECORD_LIMIT }: Props) => {
  return (
    <>
      {new Array(boxes).fill(null).map((_, index) => (
        <Grid key={index} item xs={12} md={6} lg={3}>
          <Skeleton variant="rounded" height={96} />
        </Grid>
      ))}
    </>
  );
};

export default GridSkeleton;
