import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@mantine/core';
import { BlankLayout } from '.';

const meta: Meta = {
  title: 'Layouts/Blank',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

export const Default: StoryObj = {
  render: () => (
    <BlankLayout className="p-8">
      <h1 className="text-5xl font-medium text-zinc-700 dark:text-base-100 mb-4">
        Blank Layout
      </h1>
      <Button>Pretty cool</Button>
    </BlankLayout>
  ),
};
