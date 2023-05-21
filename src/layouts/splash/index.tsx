import { Loader } from '@mantine/core';

export const SplashScreen = () => {
  return (
    <main className="flex flex-col w-screen h-screen justify-center items-center">
      <img src="/vite.svg" width={96} className="mb-16" />

      <Loader color="accent" />
    </main>
  );
};
