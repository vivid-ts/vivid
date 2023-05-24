import { Button } from '@mantine/core';
import { MantineReactTable } from 'mantine-react-table';
import { Link } from '@/router/utils';
import type { HandleFunctionResolver } from '@/router';
import { useUser } from '@/hooks/useUser';

export default function Index() {
  const user = useUser((s) => s.data);

  return (
    <section>
      <h1 className="text-5xl mb-3">Hello world</h1>

      <section className="mb-3">
        <Link to="/test" className="mr-3">
          <Button color="accent">To go test</Button>
        </Link>

        <Button color="primary">Dummy</Button>
      </section>

      <MantineReactTable
        data={[user!]}
        columns={[
          {
            accessorKey: 'id',
            header: '#',
          },
          {
            accessorKey: 'name',
            header: 'Name',
          },
          {
            accessorKey: 'role',
            header: 'Role',
          },
        ]}
      />
    </section>
  );
}

export const Handle: HandleFunctionResolver = () => ({
  title: 'Home',
  acl: false,
});
