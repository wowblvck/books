export const bookCategories = {
  All: ' ',
  Biography: 'Biography',
  Computers: 'Computers',
  History: 'History',
  Medical: 'Medical',
  Poetry: 'Poetry',
  Art: 'Art',
} as const;

export type BookCategory = Keys<typeof bookCategories>;
export type BookCategoryValue = Values<typeof bookCategories>;

export const bookOrderBy = {
  Newest: 'Newest',
  Relevance: 'Relevance',
} as const;

export type BookOrder = Keys<typeof bookOrderBy>;
export type BookOrderValue = Values<typeof bookOrderBy>;
