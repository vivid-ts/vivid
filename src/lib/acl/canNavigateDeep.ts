import { NavigationEntry } from '@/router';
import { can } from './can';

export const canNavigateDeep = (navs: NavigationEntry[]): boolean => {
  return navs.some((n) => {
    if (n.children) {
      return canNavigateDeep(n.children);
    }

    return can(n.acl);
  });
};
