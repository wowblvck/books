import { createApi } from '@reduxjs/toolkit/query/react';

import { baseQuery } from './baseQuery';

export const baseApi = createApi({
  baseQuery: baseQuery,
  endpoints: () => ({}),
  reducerPath: 'googleApi',
});
