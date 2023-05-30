import { Button, Card, Text } from '@mantine/core';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Components/Card',
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const Default: StoryObj = {
  render: () => (
    <Card>
      <Text size="lg" className="font-semibold">
        Hello World!
      </Text>

      <Text size="sm" className="mb-4">
        This is very cool example (I think...)
      </Text>

      <Button>Thing</Button>
    </Card>
  ),
};
