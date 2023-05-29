/* eslint-disable import/no-extraneous-dependencies */
import type { User } from '@auth';
import { rest } from 'msw';

const data: User[] = [
  {
    id: '1',
    name: 'John Doe',
    role: 'admin',
    image: 'https://i.pravatar.cc/256',
    abilities: [{ action: 'manage', subject: 'all' }],
  },
  {
    id: '2',
    name: 'Jane Doe',
    role: 'admin',
    image: 'https://i.pravatar.cc/256',
    abilities: [
      { action: 'read', subject: 'user' },
      { action: 'create', subject: 'other' },
    ],
  },
  {
    id: '3',
    name: 'Dane Doe',
    role: 'user',
    image: 'https://i.pravatar.cc/256',
    abilities: [],
  },
];

export default [
  rest.get('/api/user', (_, res, ctx) => {
    return res(ctx.json(data));
  }),

  rest.get('/api/me', (_, res, ctx) => {
    return res(ctx.json(data[0]));
  }),

  rest.post('/api/login', (_, res, ctx) => {
    return res(ctx.json(data[0]));
  }),
];
