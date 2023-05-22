import { twMerge } from 'tailwind-merge';

export const BlankLayout = ({
  children,
  ...props
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>) => {
  return (
    <main
      {...props}
      className={twMerge('flex flex-col min-h-screen', props.className)}
    >
      {children}
    </main>
  );
};
