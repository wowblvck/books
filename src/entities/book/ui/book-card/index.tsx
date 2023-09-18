import { Badge, Card, Image, Stack, Text } from '@mantine/core';
import React from 'react';
import { Link } from 'react-router-dom';
import type { BookItem } from '@entities/book';

import styles from './styles.module.scss';

type BookCardProps = {
  book: BookItem;
};

export const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const { authors, categories, id, imageLinks, title } = book;
  return (
    <Link className={styles.link} to={`/book/${id}`}>
      <Card className={styles.card} padding="lg" radius="md" shadow="sm" withBorder>
        <Card.Section p={20}>
          <Image
            alt={title}
            fit="contain"
            height={230}
            src={imageLinks?.smallThumbnail}
            fallbackSrc="https://placehold.co/200x230?text=No+image"
          />
        </Card.Section>

        <Stack mb="xs" mt="md">
          {categories && (
            <Badge color="pink" variant="light" style={{ alignSelf: 'center' }}>
              {categories[0]}
            </Badge>
          )}
          <Text size="sm">{title}</Text>
        </Stack>
        {authors && (
          <Text c="dimmed" size="sm">
            {authors.join(', ')}
          </Text>
        )}
      </Card>
    </Link>
  );
};
