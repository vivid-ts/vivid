import type { Meta, StoryObj } from '@storybook/react';
import { ThemeSwitch } from '.';

const meta: Meta = {
  title: 'Components/ThemeSwitch',
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const Default: StoryObj = {
  render: (args) => <ThemeSwitch {...args} />,
  args: {
    iconSize: 20,
    size: 'lg',
  },
  argTypes: {
    iconSize: {
      control: {
        type: 'number',
      },
    },
    size: {
      control: {
        type: 'select',
      },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
  },
};
