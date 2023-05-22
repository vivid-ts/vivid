import { ability } from '@/plugins/casl';
import type { Meta } from '@/router';

export const cannot = (options?: Meta['acl']) => {
  if (options === undefined) return true;
  if (options === false) return false;

  const { action, subject } = options;

  return ability.cannot(action ?? 'manage', subject ?? 'all');
};
