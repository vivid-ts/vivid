import { Pagination } from '@mantine/core';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Components/Pagination',
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const Default: StoryObj<{ total: number }> = {
  render: (args) => <Pagination total={args.total} />,
  args: {
    total: 10,
  },
  argTypes: {
    total: {
      type: 'number',
    },
  },
};
