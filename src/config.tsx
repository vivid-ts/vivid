import { House, Tree, User } from '@phosphor-icons/react';
import { NavigationEntry } from './router';

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
    heading: 'Others',

    name: 'About',
    icon: <Tree weight="fill" size={24} />,

    children: [
      {
        name: 'Test',
        path: '/test',
        icon: <User weight="fill" size={24} />,
        acl: {
          action: 'read',
          subject: 'test',
        },
      },
    ],
  },
];
