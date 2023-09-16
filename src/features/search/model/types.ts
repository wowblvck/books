import type { BookSession } from '@entities/book';

export type SearchFormState = Pick<BookSession, 'value' | 'category' | 'orderBy'>;
