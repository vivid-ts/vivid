import type { NavigationEntry } from '@/router';
import { NavbarHeading } from './Heading';
import { NavbarLink } from './Link';
import { NavbarGroup } from './Group';
import { cannot } from '@/lib/acl/cannot';
import { canNavigateDeep } from '@/lib/acl/canNavigateDeep';

export const NavbarEntry = ({
  entry,
  currentPath,
}: {
  entry: NavigationEntry;
  currentPath: string;
}) => {
  if (
    (entry.acl && cannot(entry.acl)) ||
    (entry.children && !canNavigateDeep(entry.children))
  )
    return null;

  return (
    <>
      {entry.heading && <NavbarHeading>{entry.heading}</NavbarHeading>}

      {entry.children && (
        <NavbarGroup
          {...entry}
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
}: {
  data: NavigationEntry[];
  currentPath: string;
}) => (
  <>
    {data.map((entry) => (
      <NavbarEntry entry={entry} currentPath={currentPath} key={entry.name} />
    ))}
  </>
);
