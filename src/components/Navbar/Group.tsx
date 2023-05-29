import { Accordion } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import type { Path } from '@/router/utils';
import { NavbarEntries } from './Entries';
import type { Navigation } from '@/types/config';

export interface NavbarGroupProps {
  name: string;
  children: Navigation;
  path?: Path;
  icon?: JSX.Element;

  currentPath: string;
  disableACL?: boolean;
}

export const NavbarGroup = ({
  name,
  children,
  path,
  icon,
  currentPath,
  disableACL,
}: NavbarGroupProps) => {
  const navigate = useNavigate();

  return (
    <Accordion.Item value={name}>
      <Accordion.Control onClick={() => path && navigate(path)} icon={icon}>
        {name}
      </Accordion.Control>

      <Accordion.Panel>
        <NavbarEntries
          data={children}
          disableACL={disableACL}
          currentPath={currentPath}
        />
      </Accordion.Panel>
    </Accordion.Item>
  );
};
