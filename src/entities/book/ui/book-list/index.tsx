import { Grid } from '@mantine/core';
import React from 'react';
import type { BookItem } from '@entities/book';

import { BookCard } from '../book-card';

type BookListProps = {
  books: BookItem[];
};

export const BookList: React.FC<BookListProps> = ({ books }) => {
  return (
    <Grid gutter="xl" m={0}>
      {books.map((book) => (
        <Grid.Col key={book.etag} xs={12} sm={6} md={4} lg={3}>
          <BookCard book={book} />
        </Grid.Col>
      ))}
    </Grid>
  );
};
