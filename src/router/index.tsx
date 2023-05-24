/* eslint-disable @typescript-eslint/indent */

// https://github.com/oedotme/generouted/blob/main/packages/generouted/src/react-router-lazy.tsx

import { Fragment } from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import type {
  ActionFunction,
  RouteObject,
  LoaderFunction,
} from 'react-router-dom';
import {
  generatePreservedRoutes,
  generateRegularRoutes,
} from '@generouted/react-router/core';
import type { Actions, Subjects } from '@/plugins/casl';
import type { Layouts } from '@/layouts';
import { Path } from './utils';

export type Meta = {
  title?: string;
  description?: string;

  layout?: Layouts;
  authedOnly?: boolean;
  acl?:
    | {
        action?: Actions;
        subject?: Subjects;
      }
    | false;
};
export type NavigationEntry = {
  name: string;
  children?: NavigationEntry[];
  path?: Path;
  acl?: Meta['acl'];
  icon?: JSX.Element;
  heading?: string;
};

type Element = () => JSX.Element;
export type HandleFunctionResolver = () => Meta;

export type Module = {
  default: Element;
  Loader: LoaderFunction;
  Action: ActionFunction;
  Catch: Element;
  Handle: HandleFunctionResolver;
};

const PRESERVED = import.meta.glob<Module>('/src/pages/(_app|404).{jsx,tsx}', {
  eager: true,
});
const ROUTES = import.meta.glob<Module>([
  '/src/pages/**/[\\w[-]*.{jsx,tsx}',
  '!**/(_app|404).*',
]);

const preservedRoutes = generatePreservedRoutes<Element>(PRESERVED);

// eslint-disable-next-line prettier/prettier
const regularRoutes = generateRegularRoutes<
  RouteObject,
  () => Promise<Partial<Module>>
>(ROUTES, (module, key) => {
  const index =
    /index\.(jsx|tsx)$/.test(key) && !key.includes('pages/index')
      ? { index: true }
      : {};

  return {
    ...index,
    lazy: async () => {
      const resolvedModule = await module();

      return {
        Component: resolvedModule.default,
        ErrorBoundary: resolvedModule.Catch,
        loader: resolvedModule.Loader,
        action: resolvedModule.Action,
        handle: resolvedModule.Handle?.(),
      };
    },
  };
});

// eslint-disable-next-line no-underscore-dangle
const App = preservedRoutes?._app || Outlet;
const NotFound = preservedRoutes?.['404'] || Fragment;

export const routes = [
  {
    element: <App />,
    children: [
      ...regularRoutes,
      {
        path: '*',
        element: <NotFound />,
        handle: {
          title: 'Not found',
          layout: 'blank',
          authedOnly: false,
          acl: false,
        } satisfies Meta,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);

export const Routes = () => <RouterProvider router={router} />;
