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
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <RouterProvider
          fallbackElement={<Loader className="loader-overlay" size="xl" />}
          router={appRouter()}
        />
      </MantineProvider>
    </Provider>
  </React.StrictMode>
);
