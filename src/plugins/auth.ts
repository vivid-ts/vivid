export type User = {
  id: string;
  name: string;
};

// Will run every initial load
// Return null if not authenticated
// Return user if authenticated
// Throw error if something went wrong
export const resolve = async () => {
  return null;

  // return {
  //   id: '1',
  //   name: 'John Doe',
  // } as User;
};
