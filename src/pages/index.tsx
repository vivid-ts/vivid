/* eslint-disable react-refresh/only-export-components */
import type { Meta } from '@/router';
import { Link } from '@/router/utils';

export default function Index() {
  return (
    <section>
      <h1 className="text-5xl">Hello world</h1>
      <Link to="/test">To go test</Link>
    </section>
  );
}

export const handle: Meta = {
  title: 'Home',
};
