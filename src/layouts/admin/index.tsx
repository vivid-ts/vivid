import { brand, navigation } from '@/config';
import { BlankLayout } from '../blank';
import { ThemeSwitch } from '@/components/ThemeSwitch';
import { Navbar } from '@/components/Navbar';
import { Page } from '@/hooks/useCurrentPage';

export const AdminLayout = ({
  children,
  page,
  ...props
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
  page: Page;
}) => {
  return (
    <BlankLayout {...props} className="flex-row">
      <aside className="w-full max-w-sm border-r dark:border-base-500 bg-white dark:bg-base-700">
        <header className="flex items-center gap-5 justify-between p-6 border-b dark:border-base-500">
          <section className="flex items-center gap-5">
            <img src={brand.logo} width={48} />
            <h1 className="text-2xl font-semibold dark:text-zinc-200">
              {brand.name}
            </h1>
          </section>

          <ThemeSwitch />
        </header>

        <section className="p-6">
          <Navbar data={navigation} currentPath={page.pathname} />
        </section>
      </aside>

      <section className="flex-grow flex flex-col p-8">{children}</section>
    </BlankLayout>
  );
};
