import { configureStore } from '@reduxjs/toolkit';
import { bookSessionSlice } from '@entities/book';
import { googleApi } from '@shared/api';

export const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(googleApi.middleware),
  reducer: {
    [googleApi.reducerPath]: googleApi.reducer,
    bookSession: bookSessionSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
