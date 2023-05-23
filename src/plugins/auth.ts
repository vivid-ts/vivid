import { defineResolve, defineSignIn, defineSignOut } from '@/lib/core/auth';
import { Rules, ability } from './casl';

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
  return null;

  // const user: User = {
  //   id: '1',
  //   name: 'John Doe',
  //   role: 'admin',
  //   image: 'https://i.pravatar.cc/300',
  //   abilities: [
  //     { action: 'read', subject: 'other' },
  //     { action: 'read', subject: 'test' },
  //   ],
  // };

  // ability.update(user.abilities);

  // return user;
});

export const signOut = defineSignOut(async () => {
  // Sign out user here
});

export const signIn = defineSignIn<SignInOptions>(async () => {
  // Sign in user here
  return null;
});
