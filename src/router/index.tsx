/* eslint-disable @typescript-eslint/indent */
// https://github.com/oedotme/generouted/blob/main/packages/generouted/src/react-router.tsx

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

export type Meta = {
  title?: string;
  description?: string;

  layout?: 'blank';
};

type Element = () => JSX.Element;
type Module = {
  default: Element;
  loader: LoaderFunction;
  action: ActionFunction;
  catch: Element;
  handle: Meta;
};

const PRESERVED = import.meta.glob<Module>('/src/pages/(_app|404).{jsx,tsx}', {
  eager: true,
});
const ROUTES = import.meta.glob<Module>(
  ['/src/pages/**/[\\w[-]*.{jsx,tsx}', '!**/(_app|404).*'],
  // { eager: true },
);

const preservedRoutes = generatePreservedRoutes<Element>(PRESERVED);

// eslint-disable-next-line prettier/prettier
const regularRoutes = generateRegularRoutes<RouteObject,() => Promise<Partial<Module>>>(ROUTES, (module, key) => {
  const index =
    /index\.(jsx|tsx)$/.test(key) && !key.includes('pages/index')
      ? { index: true }
      : {};

  return {
    ...index,
    // Component: module?.default,
    // ErrorBoundary: module?.catch,
    // loader: module?.loader,
    // action: module?.action,
    // handle: module?.handle,
    lazy: async () => {
      return {
        Component: (await module())?.default,
        ErrorBoundary: (await module())?.catch,
        loader: (await module())?.loader,
        action: (await module())?.action,
        handle: (await module())?.handle,
      };
    },
  };
});

// eslint-disable-next-line no-underscore-dangle
const App = preservedRoutes?._app || Outlet;
const NotFound = preservedRoutes?.['404'] || Fragment;

// eslint-disable-next-line react-refresh/only-export-components
export const routes = [
  {
    element: <App />,
    children: [...regularRoutes, { path: '*', element: <NotFound /> }],
  },
];

const router = createBrowserRouter(routes);

export const Routes = () => <RouterProvider router={router} />;
