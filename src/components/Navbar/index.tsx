import { Accordion, type AccordionProps } from '@mantine/core';
import clsx from 'clsx';
import { NavbarEntries } from './Entries';
import type { Navigation } from '@/types/config';

export interface NavbarProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  data: Navigation;
  currentPath: string;
  accordionProps?: AccordionProps<true>;
  disableACL?: boolean;
  indentGroup?: boolean;
}

export const Navbar = ({
  data,
  currentPath,
  accordionProps,
  disableACL,
  indentGroup = true,
  ...props
}: NavbarProps) => {
  return (
    <nav {...props}>
      <Accordion
        {...accordionProps}
        classNames={{ content: clsx(indentGroup && 'pl-3') }}
        multiple
      >
        <NavbarEntries
          disableACL={disableACL}
          data={data}
          currentPath={currentPath}
        />
      </Accordion>
    </nav>
  );
};
