import '../src/index.css';

import React from 'react';
import { ColorSchemeProvider, MantineProvider, createEmotionCache } from '@mantine/core';
import { mantineConfig } from '../src/utils/theme/mantineConfig'
import type { Preview } from '@storybook/react';
import { useDarkMode } from 'storybook-dark-mode';

const cache = createEmotionCache({
  key: 'mantine',
  prepend: false
})

const ThemeWrapper = (props: { children: React.ReactNode }) => {
  const colorScheme = useDarkMode() ? 'dark' : 'light';

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={() => {}}>
      <MantineProvider theme={{ ...mantineConfig, colorScheme }} emotionCache={cache} withGlobalStyles withNormalizeCSS>
        {props.children}
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

const preview: Preview = {
  parameters: {
    darkMode: {
      stylePreview: true
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;

export const decorators = [(renderStory: Function) => <ThemeWrapper>{renderStory()}</ThemeWrapper>];
