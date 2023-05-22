import {
  ActionIcon,
  ActionIconProps,
  useMantineColorScheme,
} from '@mantine/core';
import { Moon, Sun } from '@phosphor-icons/react';

export interface ThemeSwitchProps extends ActionIconProps {
  iconSize?: number;
}

export const ThemeSwitch = ({ iconSize = 20, ...props }: ThemeSwitchProps) => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <ActionIcon
      variant="light"
      color="accent"
      onClick={() => toggleColorScheme()}
      {...props}
    >
      {colorScheme === 'dark' && <Moon weight="fill" size={iconSize} />}
      {colorScheme === 'light' && <Sun weight="fill" size={iconSize} />}
    </ActionIcon>
  );
};
