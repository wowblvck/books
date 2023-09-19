import {
  type BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryMeta,
} from '@reduxjs/toolkit/query/react';
import { type FetchBaseQueryError } from '@reduxjs/toolkit/query/react';
import { config } from '@shared/config';

export const baseQuery: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError,
  object,
  FetchBaseQueryMeta
> = fetchBaseQuery({
  baseUrl: config.API_ENDPOINT,
});
