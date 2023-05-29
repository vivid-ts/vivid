/* eslint-disable import/no-extraneous-dependencies */
import { setupWorker } from 'msw';
import type { GraphQLHandler, RestHandler } from 'msw';

type Module = {
  default: (RestHandler | GraphQLHandler)[];
};

const modules = import.meta.glob<Module>(
  '/src/@mock/handlers/*.{js,ts,jsx,tsx}',
  {
    eager: true,
  },
);

const handlers = Object.values(modules).reduce(
  (prev, curr) => [...prev, ...curr.default],
  [] as Module['default'],
);

export const worker = setupWorker(...handlers);
