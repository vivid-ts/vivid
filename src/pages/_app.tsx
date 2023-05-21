import '@fontsource/inter/latin.css';

import { Outlet } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
  createEmotionCache,
} from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import { useEffect } from 'react';
import { Metadata } from '@/components/Metadata';
import { mantineConfig } from '@/utils/theme/mantineConfig';

const cache = createEmotionCache({
  key: 'mantine',
  prepend: false,
});

export default function App() {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'theme',
    defaultValue: 'light',
    getInitialValueInEffect: true,
    serialize(value) {
      return value;
    },
    deserialize(value: ColorScheme) {
      return value;
    },
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  useEffect(() => {
    const html = document.querySelector('html');
    if (!html) return;

    if (colorScheme === 'dark') {
      return html.classList.add('dark');
    }

    html.classList.remove('dark');
  }, [colorScheme]);

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        emotionCache={cache}
        theme={{
          colorScheme,
          ...mantineConfig,
        }}
        withCSSVariables
        withGlobalStyles
      >
        <HelmetProvider>
          <Metadata />

          <Outlet />
        </HelmetProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
