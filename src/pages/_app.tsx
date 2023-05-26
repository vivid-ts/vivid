import '@fontsource/inter/latin.css';

import { HelmetProvider } from 'react-helmet-async';
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
  createEmotionCache,
} from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import { useEffect } from 'react';
import { Notifications } from '@mantine/notifications';
import { ModalsProvider } from '@mantine/modals';
import { SWRConfig } from 'swr';
import { axios } from '@axios';
import { Metadata } from '@/components/Metadata';
import { mantineConfig } from '@/lib/theme/mantineConfig';
import { Layout } from '@/layouts';
import { initializeApp } from '@/lib/core/init';

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

  const setThemeClass = () => {
    const html = document.querySelector('html');
    if (!html) return;

    if (colorScheme === 'dark') {
      return html.classList.add('dark');
    }

    html.classList.remove('dark');
  };

  // Init
  useEffect(() => {
    initializeApp();
  }, []);

  useEffect(() => {
    setThemeClass();
  }, [colorScheme]);

  return (
    <SWRConfig
      value={{
        fetcher: (resource, init) =>
          axios(resource, init).then((res) => res.data),
      }}
    >
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
            <ModalsProvider>
              <Metadata />
              <Notifications />
              <Layout />
            </ModalsProvider>
          </HelmetProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </SWRConfig>
  );
}
