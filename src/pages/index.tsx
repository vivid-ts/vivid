/* eslint-disable react-refresh/only-export-components */
import { Button } from '@mantine/core';
import type { Meta } from '@/router';
import { Link } from '@/router/utils';

export default function Index() {
  return (
    <section>
      <h1 className="text-5xl text-red-500 dark:text-red-400">Hello world</h1>
      <Link to="/test">
        <Button color="accent">To go test</Button>
      </Link>

      <Button>Dummy</Button>
    </section>
  );
}

export const handle: Meta = {
  title: 'Home',
};
