import { Grid, Skeleton } from '@mui/material';

type Props = {
  boxes?: number;
};

const GridSkeleton = ({ boxes = 24 }: Props) => {
  return (
    <>
      {new Array(boxes).fill(null).map((_, index) => (
        <Grid key={index} item xs={12} md={4} lg={3}>
          <Skeleton variant="rounded" height={96} />
        </Grid>
      ))}
    </>
  );
};

export default GridSkeleton;
