import { Button, Center, Container, Loader, Text } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import React from 'react';
import { ScrollToTop } from '@features/scroll-to-top';
import {
  useBooksQuery,
  BookList,
  selectBookSessionData,
  changePage,
  changeViewPosition,
} from '@entities/book';

import { isApiErrorResponse } from '@shared/api/google';
import { config } from '@shared/config';
import { useAppDispatch, useAppSelector } from '@shared/model';

export const Books = () => {
  const dispatch = useAppDispatch();
  const bookCardRef = React.useRef<HTMLDivElement>(null);
  const { orderBy, value, category, page, isUpdateItems, viewPosition } =
    useAppSelector(selectBookSessionData);
  const { data, isLoading, isFetching, error, isError } = useBooksQuery({
    page,
    orderBy,
    q: value,
    subject: category,
  });

  const nextPage = page + 1;
  const possibleResults = nextPage * config.MAX_RESULTS;

  const loadMore = () => {
    dispatch(changePage({ isUpdateItems: false, page: nextPage }));
  };

  React.useEffect(() => {
    if (page > 0 && data?.items && bookCardRef.current) {
      window.scrollTo({ top: bookCardRef.current.offsetTop, behavior: 'smooth' });
    }
  }, [data]);

  React.useEffect(() => {
    if (isError && isApiErrorResponse(error)) {
      notifications.show({
        title: 'Error',
        message: error.data.error.message,
        autoClose: 3000,
      });
    }
  }, [isError]);

  React.useEffect(() => {
    if (viewPosition > 0) {
      window.scrollTo({ top: viewPosition, behavior: 'smooth' });
    }
  }, []);

  const onItemClick = (event: React.MouseEvent<HTMLElement>) => {
    dispatch(changeViewPosition(event.currentTarget.offsetTop));
  };

  if (isError) {
    return (
      <Center h={200}>
        <Text fz="md">Books not found</Text>
      </Center>
    );
  }

  if (!isFetching && !data?.items) {
    return (
      <Center h={200}>
        <Text fz="md">Books not found</Text>
      </Center>
    );
  }

  if (isLoading || (isFetching && isUpdateItems)) {
    return (
      <Center h={200}>
        <Loader />
      </Center>
    );
  }

  return (
    <Container size="lg" pt={25} pb={30}>
      {data && (
        <>
          <Center>
            <Text fw={700}>Found {data.totalItems} results</Text>
          </Center>
          <BookList books={data.items} clickedItem={onItemClick} ref={bookCardRef} />
          <Center>
            {data.totalItems > 0 && (
              <Button
                onClick={loadMore}
                loading={isFetching}
                disabled={data.totalItems < possibleResults}
              >
                Load More
              </Button>
            )}
          </Center>
          <ScrollToTop />
        </>
      )}
    </Container>
  );
};
