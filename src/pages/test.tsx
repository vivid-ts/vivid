/* eslint-disable react-refresh/only-export-components */
import { Meta } from '@/router';
import { Link } from '@/router/utils';

export default function Test() {
  return (
    <section>
      <h1 className="text-5xl">Test</h1>
      <Link to="/">To back</Link>
    </section>
  );
}

export const handle: Meta = {
  title: 'Test',
  description: 'Test page',
};
