import { type BaseQueryFn, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { config } from '@shared/config';

export const baseQuery: BaseQueryFn = fetchBaseQuery({
  baseUrl: config.API_ENDPOINT,
});
