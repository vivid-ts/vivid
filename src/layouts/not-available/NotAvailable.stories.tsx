import type { Meta, StoryObj } from '@storybook/react';
import { StaticRouter } from 'react-router-dom/server';
import { NotAvailable } from '.';

const meta: Meta = {
  title: 'Layouts/Not Available',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

export const Default: StoryObj = {
  render: () => (
    <StaticRouter location="/">
      <main className="w-screen h-screen">
        <NotAvailable />
      </main>
    </StaticRouter>
  ),
};
