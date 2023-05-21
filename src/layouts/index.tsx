import { useEffect } from 'react';
import { useCurrentPage } from '@/hooks/useCurrentPage';
import { BlankLayout } from './blank';
import { useGlobalState } from '@/hooks/useGlobalState';
import { SplashScreen } from './splash';
import { useUser } from '@/hooks/useUser';
import { Navigate } from '@/router/utils';

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

  if (globalLoading) return <SplashScreen />;
  if (!userLoading && !user && (current.handle?.authedOnly ?? true)) {
    return <Navigate to="/login" />;
  }

  const Component = layouts[layout];

  return <Component />;
};
