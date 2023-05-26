import { defineResolve, defineSignIn, defineSignOut } from '@/lib/core/auth';
import { Rules, ability } from './casl';
import { axios } from './axios';

export type User = {
  id: string;
  name: string;
  abilities: Rules;
  role: 'admin' | 'user';
  image?: string;
};

export type SignInOptions = {
  name: string;
  password: string;
};

// Will run every initial load
// Return null if not authenticated
// Return user if authenticated
// Throw error if something went wrong
// Also, update ability here after fetching user
export const resolve = defineResolve(async () => {
  // mocked user
  const res = await axios.get<User>('/me');
  const user = res.data;

  ability.update(user.abilities);

  return user;
});

export const signOut = defineSignOut(async (user) => {
  // Do something with user before actually logged out

  // eslint-disable-next-line no-console
  console.log(user);
});

export const signIn = defineSignIn<SignInOptions>(async (data) => {
  // mocked user
  const res = await axios.post<User>('/login', data);
  const user = res.data;

  // Sign in user here
  ability.update(user.abilities);

  return user;
});
