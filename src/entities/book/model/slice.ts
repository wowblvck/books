import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { BookSession } from './model';

const initialState: BookSession = {
  page: 0,
  category: ' ',
  value: 'everything',
  orderBy: 'Relevance',
  isUpdateItems: false,
  viewPosition: 0,
};

export const bookSessionSlice = createSlice({
  name: 'bookSession',
  initialState,
  reducers: {
    changeData: (_state, action: PayloadAction<BookSession>) => {
      return action.payload;
    },
    changePage: (state, action: PayloadAction<Pick<BookSession, 'page' | 'isUpdateItems'>>) => {
      state.isUpdateItems = action.payload.isUpdateItems;
      state.page = action.payload.page;
    },
    changeUpdateStatus: (state, action: PayloadAction<boolean>) => {
      state.isUpdateItems = action.payload;
    },
    changeViewPosition: (state, action: PayloadAction<number>) => {
      state.viewPosition = action.payload;
    },
  },
});

export const { changeData, changePage, changeUpdateStatus, changeViewPosition } =
  bookSessionSlice.actions;

export const selectBookSessionData = (state: RootState) => state.bookSession;
