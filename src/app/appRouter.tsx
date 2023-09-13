import { createBrowserRouter } from 'react-router-dom';

import { baseLayout } from './layouts/baseLayout';

export const appRouter = () =>
  createBrowserRouter([
    {
      children: [
        {
          index: true,
          async lazy() {
            const { MainPage } = await import('@pages/main');
            return { Component: MainPage };
          },
          path: '/',
        },
        {
          async lazy() {
            const { BookPage } = await import('@pages/book');
            return { Component: BookPage };
          },
          path: '/book/:bookId',
        },
      ],
      element: baseLayout,
    },
  ]);
