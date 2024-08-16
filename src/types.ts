type NamedResult = {
  name: string;
  url: string;
};

export type PaginatedResult = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<NamedResult>;
};

export type PaginatedResultWithImage = Omit<PaginatedResult, 'results'> & {
  results: Array<NamedResult & { image: string }>;
};
