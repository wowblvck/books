import { type BookVolume } from '@entities/book';
import { googleApi } from '@shared/api';
import { config } from '@shared/config';

import { mapVolume } from '../lib';
import { type BookRequestArgs, BookVolumeDto } from './types';

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
        return currentArg !== previousArg;
      },
    }),
  }),
});

export const { useBooksQuery } = bookApi;
