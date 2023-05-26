import { House } from '@phosphor-icons/react';
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
];
