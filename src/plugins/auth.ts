import { Rules, ability } from './casl';

export type User = {
  id: string;
  name: string;
  abilities: Rules;
};

// Will run every initial load
// Return null if not authenticated
// Return user if authenticated
// Throw error if something went wrong
// Also, update ability here after fetching user
export const resolve = async () => {
  // return null;

  const user: User = {
    id: '1',
    name: 'John Doe',
    abilities: [
      { action: 'read', subject: 'other' },
      { action: 'read', subject: 'test' },
    ],
  };

  ability.update(user.abilities);

  return user;
};
