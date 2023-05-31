import { Breadcrumbs } from '@mantine/core';
import { House } from '@phosphor-icons/react';
import { Link, useMatches } from 'react-router-dom';

export const Breadcrumb = () => {
  const matching = useMatches();

  return (
    <Breadcrumbs>
      {matching.map((route) => {
        const Inner = () => {
          if (route.id === '0') {
            return (
              <section className="bg-base-500 p-2 rounded-full">
                <House weight="fill" size={20} />
              </section>
            );
          }

          return <p className="capitalize">{route.id}</p>;
        };

        return (
          <Link key={route.pathname} to={route.pathname}>
            <Inner />
          </Link>
        );
      })}
    </Breadcrumbs>
  );
};
