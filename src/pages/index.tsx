import { Card } from '@mantine/core';
import type { HandleFunctionResolver } from '@/router';

export default function Index() {
  return (
    <Card>
      <h1 className="text-3xl font-semibold mb-2 dark:text-zinc-200">
        Hey there!
      </h1>
      <p className="text-base-300 dark:text-base-50">
        Welcome to <b>Vivid</b>! This is a starter template made using{' '}
        <b>Vite + React + TS.</b>
      </p>
    </Card>
  );
}

export const Handle: HandleFunctionResolver = () => ({
  title: 'Home',
  acl: false,
});
