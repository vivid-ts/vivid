import { Link } from 'react-router-dom';
import { UnstyledButton } from '@mantine/core';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
import type { Path } from '@/router/utils';

export interface NavbarLinkProps {
  path: Path;
  name: string;
  icon?: JSX.Element;
  active?: boolean;
}

export const NavbarLink = ({
  path,
  name,
  icon,
  active = false,
}: NavbarLinkProps) => {
  return (
    <Link to={path} className="block mb-2">
      <UnstyledButton
        className={twMerge(
          clsx(
            'block p-4 text-accent-900 dark:text-base-50 w-full rounded-lg transition-colors duration-200',
            active &&
              'bg-accent-200 text-base-200 dark:text-zinc-200 dark:bg-base-500',
            !active && 'hover:bg-accent-100 dark:hover:bg-base-600',
          ),
        )}
      >
        <section className="flex gap-4 items-center">
          {icon}

          <h2 className={clsx(active && 'font-semibold')}>{name}</h2>
        </section>
      </UnstyledButton>
    </Link>
  );
};
