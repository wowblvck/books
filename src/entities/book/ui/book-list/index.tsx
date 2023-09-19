import { Grid } from '@mantine/core';
import React from 'react';
import type { BookItem } from '@entities/book';

import { config } from '@shared/config';
import { BookCard } from '../book-card';

type BookListProps = {
  books: BookItem[];
  firstItemRef?: React.Ref<HTMLDivElement> | null;
};

export const BookList: React.FC<BookListProps> = ({ books, firstItemRef }) => {
  return (
    <Grid gutter="xl" pt={25} pb={25} pr={15} pl={15}>
      {books.map((book, idx) => (
        <Grid.Col
          key={book.etag}
          span={{ xs: 12, sm: 6, md: 4, lg: 3 }}
          ref={idx === books.length - config.MAX_RESULTS ? firstItemRef : null}
        >
          <BookCard book={book} />
        </Grid.Col>
      ))}
    </Grid>
  );
};
