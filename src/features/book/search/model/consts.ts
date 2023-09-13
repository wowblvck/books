import { BookCategoryType, BookSortByType } from './types';

export const bookCategories: BookCategoryType = {
  All: 'All',
  Art: 'Art',
  Biography: 'Biography',
  Computers: 'Computers',
  History: 'History',
  Medical: 'Medical',
  Poetry: 'Poetry',
} as const;

export const bookSortBy: BookSortByType = {
  Newest: 'Newest',
  Relevance: 'Relevance',
} as const;
