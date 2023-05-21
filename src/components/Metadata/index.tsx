import { useCurrentPage } from '@/hooks/useCurrentPage';
import { Head } from '../Head';

export const Metadata = () => {
  const page = useCurrentPage();

  return (
    <Head>
      <title>{page.handle?.title || 'Vivid'}</title>
      {page.handle?.description && (
        <meta name="description" content={page.handle.description} />
      )}
    </Head>
  );
};
