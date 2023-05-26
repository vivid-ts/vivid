import { BlankLayout } from '../blank';
import { Page } from '@/hooks/useCurrentPage';
import { Sidebar } from './Sidebar';

export const AdminLayout = ({
  children,
  page,
  ...props
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
  page: Page;
}) => {
  return (
    <BlankLayout {...props} className="flex-row">
      <Sidebar page={page} />

      <section className="flex-grow flex flex-col p-6">{children}</section>
    </BlankLayout>
  );
};
