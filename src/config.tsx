import { House, User } from '@phosphor-icons/react';
import type { API, Brand, Navigation } from './types/config';

export const brand: Brand = {
  name: 'Vivid',
  logo: '/vivid.svg',
};

export const navigation: Navigation = [
  {
    name: 'Home',
    path: '/',
    icon: <House weight="fill" size={24} />,
    acl: {
      action: 'read',
      subject: 'other',
    },
  },
  {
    heading: 'Data',

    name: 'Users',
    path: '/data/user',
    icon: <User weight="fill" size={24} />,
    acl: false,
  },
];

export const api: API = {
  enableMocking: true,
  axios: {
    baseURL: '/api',
  },
};
