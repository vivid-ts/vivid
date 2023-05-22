import { House, SmileyXEyes, Tree, User } from '@phosphor-icons/react';
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
        name: 'Login',
        path: '/login',
        icon: <User weight="fill" size={24} />,
        acl: {
          action: 'read',
          subject: 'test',
        },
      },

      {
        heading: 'Thing',

        name: 'Thing 1',
        children: [
          {
            name: 'Stuff',
            path: '/',
            icon: <SmileyXEyes weight="fill" size={24} />,
          },
        ],
      },
    ],
  },
];
