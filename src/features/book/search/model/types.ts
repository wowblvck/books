export type BookCategory =
  | 'All'
  | 'Art'
  | 'Biography'
  | 'Computers'
  | 'History'
  | 'Medical'
  | 'Poetry';

export type BookSortBy = 'Newest' | 'Relevance';

export type BookCategoryType = Record<BookCategory, string>;

export type BookSortByType = Record<BookSortBy, string>;
