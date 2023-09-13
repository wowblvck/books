import { Loader, MantineProvider } from '@mantine/core';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import { appRouter } from './appRouter';
import './styles/global.scss';

const root = document.getElementById('root');

ReactDOM.createRoot(root!).render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <RouterProvider
        fallbackElement={<Loader className="loader-overlay" size="xl" />}
        router={appRouter()}
      />
    </MantineProvider>
  </React.StrictMode>
);
