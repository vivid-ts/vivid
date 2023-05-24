import { twMerge } from 'tailwind-merge';
import type { Page } from '@/hooks/useCurrentPage';

export const BlankLayout = ({
  children,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  page,
  ...props
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
  page?: Page;
}) => {
  return (
    <main
      {...props}
      className={twMerge('flex flex-col min-h-screen', props.className)}
    >
      {children}
    </main>
  );
};
