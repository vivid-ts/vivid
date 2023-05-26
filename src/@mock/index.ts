/* eslint-disable import/no-extraneous-dependencies */
import type { AxiosInstance } from 'axios';
import MockAdapter from 'axios-mock-adapter';

type Module = {
  default: (adapter: MockAdapter) => void;
};

const modules = import.meta.glob<Module>(
  '/src/@mock/handlers/*.{js,ts,jsx,tsx}',
  {
    eager: true,
  },
);

export const registerMock = (axios: AxiosInstance) => {
  const mock = new MockAdapter(axios, {
    onNoMatch: 'passthrough',
  });

  if (import.meta.env.PROD) {
    // eslint-disable-next-line no-console
    console.warn(
      'Mocks are enabled in production! Will restore original responses.',
    );

    return mock.restore();
  }

  Object.entries(modules).forEach(([key, module]) => {
    if (!module.default || typeof module.default !== 'function')
      // eslint-disable-next-line no-console
      return console.error(`Mock module must have a default function @ ${key}`);

    module.default(mock);
  });
};
