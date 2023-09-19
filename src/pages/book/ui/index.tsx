import { Center, Loader, Text } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { skipToken } from '@reduxjs/toolkit/query';
import React from 'react';
import { useParams } from 'react-router-dom';
import { BookDetail } from '@widgets/book-detail';
import { useBookQuery } from '@entities/book';
import { isApiErrorResponse } from '@shared/api/google';

export const BookPage = () => {
  const { bookId } = useParams<{ bookId: string }>();

  const { data, isFetching, error, isError } = useBookQuery(bookId ? bookId : skipToken, {
    skip: !bookId,
  });

  const isNotFound = !bookId || (!isFetching && !data);

  React.useEffect(() => {
    if (isError) {
      if (isApiErrorResponse(error)) {
        notifications.show({
          title: 'Error',
          message: error.data.error.message,
          autoClose: 3000,
        });
      }
    }
  }, [isError]);

  if (isError) {
    return (
      <>
        <Center h={200}>
          <Text fz="md">Book not found</Text>
        </Center>
      </>
    );
  }

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
        <Loader />
      </Center>
    );
  }

  return <>{data && <BookDetail data={data} />}</>;
};
