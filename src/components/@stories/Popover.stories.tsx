import { Button, Popover, Text } from '@mantine/core';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Components/Popover',
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const Default: StoryObj<typeof Popover> = {
  render: (args) => (
    <Popover {...args}>
      <Popover.Target>
        <Button>Toggle popover</Button>
      </Popover.Target>

      <Popover.Dropdown>
        <Text size="sm">
          This is uncontrolled popover, it is opened when button is clicked
        </Text>
      </Popover.Dropdown>
    </Popover>
  ),
  args: {
    width: 200,
    position: 'bottom',
    withArrow: true,
    shadow: 'md',
  },
  argTypes: {
    width: {
      type: 'number',
    },
    position: {
      control: {
        type: 'select',
      },
      options: [
        'bottom',
        'top',
        'left',
        'right',
        'bottom-start',
        'bottom-end',
        'top-start',
        'top-end',
        'left-start',
        'left-end',
        'right-start',
        'right-end',
      ],
    },
    shadow: {
      control: {
        type: 'select',
      },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    withArrow: {
      type: 'boolean',
    },
    arrowSize: {
      type: 'number',
    },
    offset: {
      type: 'number',
    },
    trapFocus: {
      type: 'boolean',
    },
  },
};
