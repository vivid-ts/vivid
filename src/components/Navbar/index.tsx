import { Accordion, type AccordionProps } from '@mantine/core';
import type { NavigationEntry } from '@/router';
import { NavbarEntries } from './Entries';

export interface NavbarProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  data: NavigationEntry[];
  currentPath: string;
  accordionProps?: AccordionProps<true>;
}

export const Navbar = ({
  data,
  currentPath,
  accordionProps,
  ...props
}: NavbarProps) => {
  return (
    <nav {...props}>
      <Accordion {...accordionProps} multiple>
        <NavbarEntries data={data} currentPath={currentPath} />
      </Accordion>
    </nav>
  );
};
