import { Button, Center, Container, Loader, Text } from '@mantine/core';
import { useWindowScroll } from '@mantine/hooks';
import { useBooksQuery, BookList, selectBookSessionData, changePage } from '@entities/book';

import { config } from '@shared/config';
import { useAppDispatch, useAppSelector } from '@shared/model';
import { UpButton } from '@shared/ui/up-button';

export const Books = () => {
  const { orderBy, value, category, page, isUpdateItems } = useAppSelector(selectBookSessionData);
  const { data, isLoading, isFetching } = useBooksQuery({
    page,
    orderBy,
    q: value,
    subject: category,
  });

  const nextPage = page + 1;

  const dispatch = useAppDispatch();

  const possibleResults = nextPage * config.MAX_RESULTS;

  const [scroll, scrollTo] = useWindowScroll();

  const loadMore = () => {
    dispatch(changePage({ isUpdateItems: false, page: nextPage }));
  };

  if (!isFetching && !data?.items) {
    return (
      <Center h={200}>
        <Text fz="md">Items not found</Text>
      </Center>
    );
  }

  if (isLoading || (isFetching && isUpdateItems)) {
    return (
      <Center h={200}>
        <Loader variant="dots" />
      </Center>
    );
  }

  return (
    <Container size="lg" pt={20} pb={20}>
      {data && (
        <>
          <Center>
            <Text m={20} fw={700}>
              Found {data.totalItems} results
            </Text>
          </Center>
          <BookList books={data.items} />
          <Center>
            {data.totalItems > 0 && (
              <Button
                m={20}
                onClick={loadMore}
                loading={isFetching}
                disabled={data.totalItems < possibleResults}
              >
                Load More
              </Button>
            )}
          </Center>
          {scroll.y > 100 && <UpButton clickEvent={() => scrollTo({ y: 0 })} />}
        </>
      )}
    </Container>
  );
};
