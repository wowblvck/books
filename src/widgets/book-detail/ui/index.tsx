import { Breadcrumbs, Container, Flex, Grid, Image, ScrollArea, Text, Title } from '@mantine/core';
import React from 'react';
import { BookItem } from '@entities/book';
import { removeCategoriesDuplicates } from '../lib';
import styles from './styles.module.scss';

type BookDetailProps = {
  data: BookItem;
};

export const BookDetail: React.FC<BookDetailProps> = ({ data }) => {
  const { imageLinks, categories, title, authors, description } = data;

  return (
    <Container size="lg" pt={20} pb={20}>
      <Grid gutter={{ base: 50 }}>
        <Grid.Col span="auto">
          <Image
            src={imageLinks?.thumbnail}
            height={370}
            fit="contain"
            fallbackSrc="https://placehold.co/300x370?text=No+image"
          />
        </Grid.Col>
        <Grid.Col span={{ md: 6, lg: 8 }}>
          <Flex direction="column">
            {categories && (
              <Breadcrumbs
                mb={30}
                c="dimmed"
                separator="/"
                style={{ flexWrap: 'wrap', rowGap: '10px' }}
              >
                {removeCategoriesDuplicates(categories)}
              </Breadcrumbs>
            )}
            <Title order={2}>{title}</Title>
            {authors && (
              <Text td="underline" mt={10} c="dimmed" size="sm">
                {authors.join(', ')}
              </Text>
            )}
            {description && (
              <ScrollArea
                p={15}
                mt={20}
                className={styles.description}
                h={250}
                offsetScrollbars
                scrollbarSize={7}
              >
                <div dangerouslySetInnerHTML={{ __html: description }}></div>
              </ScrollArea>
            )}
          </Flex>
        </Grid.Col>
      </Grid>
    </Container>
  );
};
