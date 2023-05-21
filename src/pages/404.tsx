import { Button } from '@mantine/core';
import { Link } from '@/router/utils';

// TODO: Add 404 page
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
