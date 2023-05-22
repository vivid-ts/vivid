import { ActionIcon, LoadingOverlay } from '@mantine/core';
import { SignOut } from '@phosphor-icons/react';
import { Navbar } from '@/components/Navbar';
import type { Page } from '@/hooks/useCurrentPage';
import { brand, navigation } from '@/config';
import { ThemeSwitch } from '@/components/ThemeSwitch';
import { useUser } from '@/hooks/useUser';

export const Sidebar = ({ page }: { page: Page }) => {
  const { loading: userLoading, data: user } = useUser();

  return (
    <aside className="w-full max-w-sm border-r dark:border-base-500 bg-white dark:bg-base-700 flex flex-col">
      <header className="flex items-center gap-5 justify-between p-6 border-b dark:border-base-500">
        <section className="flex items-center gap-5">
          <img src={brand.logo} width={48} />
          <h1 className="text-2xl font-semibold dark:text-zinc-200">
            {brand.name}
          </h1>
        </section>

        <ThemeSwitch />
      </header>

      <section className="p-6 flex-grow overflow-y-auto">
        <Navbar data={navigation} currentPath={page.pathname} />
      </section>

      <section className="relative p-6 border-t dark:border-base-500 flex gap-4 items-center">
        <LoadingOverlay
          loaderProps={{ color: 'accent' }}
          overlayOpacity={0.1}
          overlayBlur={8}
          transitionDuration={200}
          visible={userLoading}
        />

        <section className="flex-grow flex gap-4 items-center">
          <img
            src={user?.image}
            alt="Profile"
            className="w-16 rounded-xl drop-shadow-lg"
          />

          <section>
            <h2 className="text-xl font-bold dark:text-zinc-200">
              {user?.name}
            </h2>
            <p>{user?.role}</p>
          </section>
        </section>

        <ActionIcon color="red">
          <SignOut weight="bold" size={20} />
        </ActionIcon>
      </section>
    </aside>
  );
};
