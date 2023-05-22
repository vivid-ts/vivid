import type { Meta, StoryObj } from '@storybook/react';
import { StaticRouter } from 'react-router-dom/server';
import { Navbar } from '.';
import { navigation } from '@/config';

const meta: Meta<typeof Navbar> = {
  title: 'Components/Navbar',
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
  render: (args) => (
    <StaticRouter location={args.currentPath}>
      <Navbar
        {...args}
        data={navigation}
        disableACL
        className="w-72 min-h-[30rem]"
      />
    </StaticRouter>
  ),
  args: {
    currentPath: '/',
    indentGroup: true,
  },
  argTypes: {
    indentGroup: {
      type: 'boolean',
    },
  },
};
