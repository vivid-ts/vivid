import { House, User } from '@phosphor-icons/react';
import type { NavigationEntry } from './router';

export const brand = {
  name: 'Vivid',
  logo: '/vite.svg',
};

export const navigation: NavigationEntry[] = [
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
