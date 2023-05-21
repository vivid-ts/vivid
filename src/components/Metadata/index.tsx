import { useCurrentPage } from '@/hooks/useCurrentPage';
import { Head } from '../Head';

export const Metadata = () => {
  const page = useCurrentPage();

  return (
    <Head>
      <title>{page.handle?.title || 'Vivid'}</title>
    </Head>
  );
};
