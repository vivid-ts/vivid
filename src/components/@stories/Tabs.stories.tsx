import { Tabs } from '@mantine/core';
import type { Meta, StoryObj } from '@storybook/react';
import { ChatCircle, Gear, ImageSquare } from '@phosphor-icons/react';

const meta: Meta = {
  title: 'Components/Tabs',
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const Default: StoryObj = {
  render: () => (
    <Tabs defaultValue="gallery">
      <Tabs.List>
        <Tabs.Tab value="gallery" icon={<ImageSquare weight="fill" />}>
          Gallery
        </Tabs.Tab>
        <Tabs.Tab value="messages" icon={<ChatCircle weight="fill" />}>
          Messages
        </Tabs.Tab>
        <Tabs.Tab value="settings" icon={<Gear weight="fill" />}>
          Settings
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="gallery" pt="xs">
        Gallery tab content
      </Tabs.Panel>

      <Tabs.Panel value="messages" pt="xs">
        Messages tab content
      </Tabs.Panel>

      <Tabs.Panel value="settings" pt="xs">
        Settings tab content
      </Tabs.Panel>
    </Tabs>
  ),
};
