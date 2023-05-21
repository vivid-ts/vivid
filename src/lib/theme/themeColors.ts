/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/indent */
import type { DefaultMantineColor, Tuple } from '@mantine/core';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import twConfig from '../../../tailwind.config';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const colors = twConfig!.theme!.extend!.colors as Record<
  string,
  Record<string | number, string> | string
>;

type ColorInput = Record<string | number, string>;
type ColorGroup = [
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
];

export const formatTwToMantine = (twColor: ColorInput) => {
  return Object.entries(twColor)
    .filter(([key]) => key !== 'DEFAULT')
    .map(([_, value]) => value) as ColorGroup;
};

export const themeColors = {
  primary: formatTwToMantine(colors!.primary! as ColorInput),
  secondary: formatTwToMantine(colors!.secondary! as ColorInput),
  accent: formatTwToMantine(colors!.accent! as ColorInput),
  neutral: formatTwToMantine(colors!.neutral! as ColorInput),
  base: formatTwToMantine(colors!.base! as ColorInput),
  info: formatTwToMantine(colors!.info! as ColorInput),
  success: formatTwToMantine(colors!.success! as ColorInput),
  warning: formatTwToMantine(colors!.warning! as ColorInput),
  error: formatTwToMantine(colors!.error! as ColorInput),
} as const;

declare module '@mantine/core' {
  export interface MantineThemeColorsOverride {
    colors: Record<
      keyof typeof themeColors | DefaultMantineColor,
      Tuple<string, 10>
    >;
  }
}
