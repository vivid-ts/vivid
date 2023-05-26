import { ability } from '@casl';
import type { Meta } from '@/router';

export const can = (options?: Meta['acl']) => {
  if (options === undefined) return false;
  if (options === false) return true;

  const { action, subject } = options;

  return ability.can(action ?? 'manage', subject ?? 'all');
};
