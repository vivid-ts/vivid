import { Button } from '@mantine/core';
import { Link } from '@/router/utils';

export default function NotFound() {
  return (
    <section>
      <h1>404</h1>
      <Link to="/">
        <Button>Go back</Button>
      </Link>
    </section>
  );
}
