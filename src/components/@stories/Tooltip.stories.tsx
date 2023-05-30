import { Button, Tooltip } from '@mantine/core';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Components/Tooltip',
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const Default: StoryObj<typeof Tooltip> = {
  render: (args) => (
    <Tooltip {...args}>
      <Button>Hey there</Button>
    </Tooltip>
  ),
  args: {
    position: 'bottom',
    withArrow: true,
    label: 'This is tooltip',
  },
  argTypes: {
    label: {
      type: 'string',
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
    withArrow: {
      type: 'boolean',
    },
    arrowSize: {
      type: 'number',
    },
    offset: {
      type: 'number',
    },
  },
};
