import { Loader } from '@mantine/core';
import { brand } from '@/config';

export const SplashScreen = () => {
  return (
    <main className="flex flex-col w-screen h-screen justify-center items-center">
      <img src={brand.logo} width={96} className="mb-16" />

      <Loader color="accent" />
    </main>
  );
};
