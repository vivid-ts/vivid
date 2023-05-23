import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { type Page, useCurrentPage } from '@/hooks/useCurrentPage';
import { BlankLayout } from './blank';
import { useGlobalState } from '@/hooks/useGlobalState';
import { SplashScreen } from './splash';
import { useUser } from '@/hooks/useUser';
import { ability } from '@/plugins/casl';
import { NotAvailable } from './not-available';
import { Navigate } from '@/router/utils';
import { AdminLayout } from './admin';

// eslint-disable-next-line react-refresh/only-export-components
export const layouts = {
  blank: BlankLayout,
  splash: SplashScreen,
  notAvailable: NotAvailable,
  admin: AdminLayout,
};

export type Layouts = keyof typeof layouts;

const Render = ({ current }: { current: Page }) => {
  // If user is logged in and user is not allowed to access the page, show not available page
  if (
    current.handle?.acl &&
    ability.cannot(
      current.handle.acl.action ?? 'manage',
      current.handle.acl.subject ?? 'all',
    )
  ) {
    return <NotAvailable />;
  }

  return <Outlet />;
};

export const Layout = () => {
  const globalLoading = useGlobalState((state) => state.loading);
  const { data: user, loading: userLoading } = useUser();

  const current = useCurrentPage();
  const layout = current.handle?.layout ?? 'admin';

  useEffect(() => {
    useGlobalState.setState({ currentPage: current });
  }, [current]);

  // If globally loading, show splash screen
  if (globalLoading) return <SplashScreen />;
  // If user is not logged in and page requires auth, redirect to login
  if (!userLoading && !user && (current.handle?.authedOnly ?? true)) {
    return <Navigate to="/login" />;
  }

  const Component = layouts[layout];

  return (
    <Component page={current}>
      <Render current={current} />
    </Component>
  );
};
