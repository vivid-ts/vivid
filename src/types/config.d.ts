import type { CreateAxiosDefaults } from 'axios';
import type { Path } from '../router/utils';
import type { Meta } from '@/router';

export type NavigationEntry = {
  name: string;
  children?: NavigationEntry[];
  path?: Path;
  acl?: Meta['acl'];
  icon?: JSX.Element;
  heading?: string;
};

export type Navigation = NavigationEntry[];

export type Brand = {
  name: string;
  logo: string;
};

export type API = {
  axios?: CreateAxiosDefaults;
  enableMocking?: boolean;
};
