import type { User } from '@auth';
import type MockAdapter from 'axios-mock-adapter';

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

export default (mock: MockAdapter) => {
  mock.onGet('/user').reply(200, data);
  mock.onGet('/user/1').reply(200, data[0]);
  mock.onGet('/user/2').reply(200, data[1]);
  mock.onGet('/user/3').reply(200, data[2]);

  mock.onGet('/me').reply(200, data[0]);

  mock.onPost('/login').reply(200, data[0]);
};
