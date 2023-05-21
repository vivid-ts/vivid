import { useEffect } from 'react';
import { useCurrentPage } from '@/hooks/useCurrentPage';
import { BlankLayout } from './blank';
import { useGlobalState } from '@/hooks/useGlobalState';
import { SplashScreen } from './splash';
import { useUser } from '@/hooks/useUser';
import { Navigate } from '@/router/utils';
import { ability } from '@/plugins/casl';
import { NotAvailable } from './not-available';

// eslint-disable-next-line react-refresh/only-export-components
export const layouts = {
  blank: BlankLayout,
};

export const Layout = () => {
  const globalLoading = useGlobalState((state) => state.loading);
  const { data: user, loading: userLoading } = useUser();

  const current = useCurrentPage();
  const layout = current.handle?.layout ?? 'blank';

  useEffect(() => {
    useGlobalState.setState({ currentPage: current });
  }, [current]);

  // If globally loading, show splash screen
  if (globalLoading) return <SplashScreen />;
  // If user is not logged in and page requires auth, redirect to login
  if (!userLoading && !user && (current.handle?.authedOnly ?? true)) {
    return <Navigate to="/login" />;
  }
  if (
    current.handle?.acl &&
    ability.cannot(
      current.handle.acl.action ?? 'manage',
      current.handle.acl.subject ?? 'all',
    )
  ) {
    return <NotAvailable />;
  }

  const Component = layouts[layout];

  return <Component />;
};
