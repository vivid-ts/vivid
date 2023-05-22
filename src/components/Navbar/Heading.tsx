import { twMerge } from 'tailwind-merge';

export const NavbarHeading = ({
  className,
  ...props
}: React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>) => {
  return (
    <h3
      {...props}
      className={twMerge(
        'text-xs font-bold uppercase text-accent-800 dark:text-base-50 mb-3 mt-4',
        className,
      )}
    />
  );
};
