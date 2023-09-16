import { Loader, MantineProvider } from '@mantine/core';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { store } from '@app/appStore';

import { appRouter } from './appRouter';
import './styles/global.scss';

const root = document.getElementById('root');

ReactDOM.createRoot(root!).render(
  <React.StrictMode>
    <Provider store={store}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{ breakpoints: { xs: '0', sm: '36rem', md: '48rem', lg: '62rem', xl: '75rem' } }}
      >
        <RouterProvider
          fallbackElement={<Loader className="loader-overlay" size="xl" />}
          router={appRouter()}
        />
      </MantineProvider>
    </Provider>
  </React.StrictMode>
);
