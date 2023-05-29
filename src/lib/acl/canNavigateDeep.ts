import type { Navigation } from '@/types/config';
import { can } from './can';

export const canNavigateDeep = (navs: Navigation): boolean => {
  return navs.some((n) => {
    if (n.children) {
      return canNavigateDeep(n.children);
    }

    return can(n.acl);
  });
};
