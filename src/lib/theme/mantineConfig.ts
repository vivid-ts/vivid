import type {
  AccordionProps,
  ActionIconProps,
  ButtonProps,
  MantineThemeOverride,
  TextInputProps,
} from '@mantine/core';
import { themeColors } from './themeColors';

const colorTransition = 'transition-colors duration-200';

export const mantineConfig: MantineThemeOverride = {
  fontFamily: 'Inter, sans-serif',
  colors: {
    ...themeColors,
    dark: themeColors.base,
    light: themeColors.accent,
  },

  primaryColor: 'primary',
  primaryShade: 5,

  defaultRadius: 'md',

  components: {
    Accordion: {
      classNames: {
        item: 'border-none',
        control:
          'group p-4 rounded-lg transition-colors duration-200 hover:bg-accent-100 dark:hover:bg-base-600 data-[active=true]:bg-accent-100 data-[active=true]:dark:bg-base-600 text-accent-900 dark:text-base-50',
        label: 'p-0 group-data-[active=true]:font-semibold',
        content: 'p-0 pt-2',
      } as AccordionProps['classNames'],
    },

    ActionIcon: {
      defaultProps: {
        variant: 'light',
        size: 'lg',
      } as ActionIconProps,
      classNames: {
        root: colorTransition,
      } as ActionIconProps['classNames'],
    },

    Button: {
      defaultProps: {
        color: 'accent',
      } as ButtonProps,
      classNames: {
        root: colorTransition,
      } as ButtonProps['classNames'],
    },

    TextInput: {
      defaultProps: {
        color: 'blue',
      } as TextInputProps,
      classNames: {
        label:
          'mb-1 font-bold uppercase text-xs text-base-300 dark:text-base-50',
        input:
          'bg-zinc-100 aria-[invalid=false]:border-zinc-300 dark:bg-base-800 dark:aria-[invalid=false]:border-base-500',
      } as TextInputProps['classNames'],
    },
  },
};
