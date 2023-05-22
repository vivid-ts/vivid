import type { Meta, StoryObj } from '@storybook/react';
import { SplashScreen } from '.';

const meta: Meta = {
  title: 'Layouts/Splash Screen',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

export const Default: StoryObj = {
  render: () => <SplashScreen />,
};
