import { useEffect } from 'react';
import { useCurrentPage } from '@/hooks/useCurrentPage';
import { BlankLayout } from './blank';
import { useGlobalState } from '@/hooks/useGlobalState';
import { SplashScreen } from './splash';

// eslint-disable-next-line react-refresh/only-export-components
export const layouts = {
  blank: BlankLayout,
};

export const Layout = () => {
  const globalLoading = useGlobalState((state) => state.loading);

  const current = useCurrentPage();
  const layout = current.handle?.layout ?? 'blank';

  useEffect(() => {
    useGlobalState.setState({ currentPage: current });
  }, [current]);

  // TODO: splash & fetch data
  if (globalLoading) return <SplashScreen />;

  const Component = layouts[layout];

  return <Component />;
};
