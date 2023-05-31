import type { Meta, StoryObj } from '@storybook/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { Breadcrumb } from '.';

const meta: Meta<typeof Breadcrumb> = {
  title: 'Components/Breadcrumb',
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<{ path: string }>;

const router = createMemoryRouter(
  [
    {
      path: '/',
      element: <Breadcrumb />,
      children: [
        {
          id: 'dashboard',
          path: '/dashboard',
          element: <></>,
          children: [
            {
              id: 'user',
              path: 'user',
              element: <></>,
            },
          ],
        },
      ],
    },
  ],
  {
    initialEntries: ['/', '/dashboard/user'],
    initialIndex: 1,
  },
);

export const Default: Story = {
  render: () => <RouterProvider router={router} />,
};
