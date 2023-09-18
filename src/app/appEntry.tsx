import { createTheme, Loader, MantineProvider } from '@mantine/core';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { store } from '@app/appStore';
import '@mantine/core/styles.css';

import { appRouter } from './appRouter';
import './styles/global.scss';

const theme = createTheme({
  breakpoints: { xs: '0', sm: '36em', md: '48em', lg: '62em', xl: '75em' },
});

const root = document.getElementById('root');

ReactDOM.createRoot(root!).render(
  <React.StrictMode>
    <Provider store={store}>
      <MantineProvider theme={theme}>
        <RouterProvider
          fallbackElement={<Loader className="loader-overlay" size="xl" />}
          router={appRouter()}
        />
      </MantineProvider>
    </Provider>
  </React.StrictMode>
);
