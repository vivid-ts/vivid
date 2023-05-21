import { useMatches } from 'react-router-dom';
import type { Params } from 'react-router-dom';
import type { Meta } from '@/router';

export type Page = {
  id: string;
  pathname: string;
  params: Params<string>;
  data: unknown;
  handle?: Meta;
};

export const useCurrentPage = () => {
  const matches = useMatches();
  const page = matches[matches.length - 1];

  return page as Page;
};
