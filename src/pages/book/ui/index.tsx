import { Center, Loader, Text } from '@mantine/core';
import { skipToken } from '@reduxjs/toolkit/query';
import { useParams } from 'react-router-dom';
import { BookDetail } from '@widgets/book-detail';
import { useBookQuery } from '@entities/book';

export const BookPage = () => {
  const { bookId } = useParams<{ bookId: string }>();

  const { data, isFetching } = useBookQuery(bookId ? bookId : skipToken, { skip: !bookId });

  const isNotFound = !bookId || (!isFetching && !data);

  if (isNotFound) {
    return (
      <Center h={200}>
        <Text fz="md">Book not found</Text>
      </Center>
    );
  }

  if (isFetching) {
    return (
      <Center h={200}>
        <Loader variant="dots" />
      </Center>
    );
  }

  return <>{data && <BookDetail data={data} />}</>;
};
