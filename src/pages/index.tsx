import { Button } from '@mantine/core';
import { Link } from '@/router/utils';
import type { HandleFunctionResolver } from '@/router';

export default function Index() {
  return (
    <section>
      <h1 className="text-5xl mb-3">Hello world</h1>

      <section className="mb-3">
        <Link to="/test" className="mr-3">
          <Button color="accent">To go test</Button>
        </Link>

        <Button color="primary">Dummy</Button>
      </section>
    </section>
  );
}

export const Handle: HandleFunctionResolver = () => ({
  title: 'Home',
  acl: false,
});
