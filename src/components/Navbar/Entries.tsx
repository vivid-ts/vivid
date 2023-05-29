import { NavbarHeading } from './Heading';
import { NavbarLink } from './Link';
import { NavbarGroup } from './Group';
import { cannot } from '@/lib/acl/cannot';
import { canNavigateDeep } from '@/lib/acl/canNavigateDeep';
import type { Navigation, NavigationEntry } from '@/types/config';

export interface NavbarEntriesProps {
  data: Navigation;
  currentPath: string;
  disableACL?: boolean;
}

export const NavbarEntry = ({
  entry,
  currentPath,
  disableACL,
}: Omit<NavbarEntriesProps, 'data'> & { entry: NavigationEntry }) => {
  if (
    !disableACL &&
    ((entry.acl && cannot(entry.acl)) ||
      (entry.children && !canNavigateDeep(entry.children)))
  )
    return null;

  return (
    <>
      {entry.heading && <NavbarHeading>{entry.heading}</NavbarHeading>}

      {entry.children && (
        <NavbarGroup
          {...entry}
          disableACL={disableACL}
          children={entry.children} // ts-lol
          currentPath={currentPath}
        />
      )}

      {entry.path && !entry.children && (
        <NavbarLink
          path={entry.path}
          name={entry.name}
          icon={entry.icon}
          active={entry.path === currentPath}
        />
      )}
    </>
  );
};

export const NavbarEntries = ({
  data,
  currentPath,
  disableACL,
}: NavbarEntriesProps) => (
  <>
    {data.map((entry) => (
      <NavbarEntry
        disableACL={disableACL}
        entry={entry}
        currentPath={currentPath}
        key={entry.name}
      />
    ))}
  </>
);
