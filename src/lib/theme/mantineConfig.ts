import { MantineThemeOverride } from '@mantine/core';
import { themeColors } from './themeColors';

export const mantineConfig: MantineThemeOverride = {
  fontFamily: 'Inter, sans-serif',
  colors: {
    ...themeColors,
    dark: themeColors.base,
  },

  primaryColor: 'primary',
  primaryShade: 5,

  defaultRadius: 'md',
};
