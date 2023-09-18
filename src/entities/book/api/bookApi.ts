import { googleApi } from '@shared/api';
import { config } from '@shared/config';

import { mapBook, mapVolume } from '../lib';
import { type BookVolume, BookItem } from '../model';
import { type BookRequestArgs, BookVolumeDto, BookItemDto } from './types';

export const bookApi = googleApi.injectEndpoints({
  endpoints: (build) => ({
    books: build.query<BookVolume, BookRequestArgs>({
      query: ({ orderBy, q, subject, page }) => ({
        params: { orderBy, startIndex: page * config.MAX_RESULTS },
        url: `/volumes?key=${config.API_KEY}&q=${q}+subject:${subject}&maxResults=${config.MAX_RESULTS}`,
      }),
      transformResponse: (response: BookVolumeDto, _meta, arg) => {
        return mapVolume(response, arg.page);
      },
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      merge: (currentCache, newItems) => {
        if (newItems.page > 0) {
          currentCache.items.push(...newItems.items);
          currentCache.page = newItems.page;
          return currentCache;
        }
        return newItems;
      },
      forceRefetch({ currentArg, previousArg }) {
        return JSON.stringify(currentArg) !== JSON.stringify(previousArg);
      },
    }),
    book: build.query<BookItem, string>({
      query: (bookId) => ({
        url: `/volumes/${bookId}`,
      }),
      transformResponse: (response: BookItemDto) => {
        return mapBook(response);
      },
    }),
  }),
});

export const { useBooksQuery, useBookQuery } = bookApi;
