/* eslint-disable react-refresh/only-export-components */
import { Button } from '@mantine/core';
import type { Meta } from '@/router';
import { Link } from '@/router/utils';
import { useUser } from '@/hooks/useUser';

export default function Index() {
  const user = useUser((state) => state.data);

  return (
    <section>
      <h1 className="text-5xl text-red-500 dark:text-red-400 mb-3">
        Hello world
      </h1>
      <Link to="/test" className="mr-3">
        <Button color="accent">To go test</Button>
      </Link>

      <Button>Dummy</Button>

      <p>{JSON.stringify(user)}</p>
    </section>
  );
}

export const handle: Meta = {
  title: 'Home',
};
