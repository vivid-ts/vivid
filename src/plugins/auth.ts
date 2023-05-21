export type User = {
  id: string;
  name: string;
};

export const resolve = async () => {
  return {
    id: '1',
    name: 'John Doe',
  } as User;
};
