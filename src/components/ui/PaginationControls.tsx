import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { IconButton } from '@mui/material';

type Props = {
  next: string | null;
  previous: string | null;
  nextPage: (limit: string, offset: string) => Promise<void>;
};

const getPageOptions = (url: string) => {
  const urlObj = new URL(url);
  const params = urlObj.searchParams;
  return {
    limit: params.get('limit')!,
    offset: params.get('offset')!,
  };
};

const PaginationControls = ({ next, previous, nextPage }: Props) => {
  const handleNextPage = () => {
    if (!next) {
      return;
    }

    const { limit, offset } = getPageOptions(next);
    nextPage(limit, offset);
  };

  const handlePreviousPage = () => {
    if (!previous) {
      return;
    }

    const { limit, offset } = getPageOptions(previous);
    nextPage(limit, offset);
  };

  return (
    <div
      className={`w-full flex ${
        !previous ? 'justify-end' : !next ? 'justify-start' : 'justify-between'
      }`}
    >
      {previous && (
        <IconButton
          sx={{
            position: {
              lg: 'absolute',
            },
            left: {
              lg: '-50px',
            },
            top: {
              lg: 'calc(50% - 29.5px)',
            },
          }}
          aria-label="previous page"
          title="Previous Page"
          onClick={handlePreviousPage}
          size="large"
        >
          <ArrowBackIosNewIcon fontSize="large" />
        </IconButton>
      )}
      {next && (
        <IconButton
          sx={{
            position: {
              lg: 'absolute',
            },
            right: {
              lg: '-50px',
            },
            top: {
              lg: 'calc(50% - 29.5px)',
            },
          }}
          aria-label="next page"
          title="Next Page"
          onClick={handleNextPage}
          size="large"
        >
          <ArrowForwardIosIcon fontSize="large" />
        </IconButton>
      )}
    </div>
  );
};

export default PaginationControls;
