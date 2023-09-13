import { categoriesToOptions, sortToOptions } from '@features/book/search/lib';
import { BookCategory, BookSortBy } from '@features/book/search/model/types';
import { Button, Flex, Input, Stack } from '@mantine/core';
import { Dropdown } from '@shared/ui/dropdown';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import { bookCategories, bookSortBy } from '../model/consts';
import styles from './styles.module.scss';

interface SearchFormState {
  category: BookCategory;
  searchValue: string;
  sortBy: BookSortBy;
}

const defaultState: SearchFormState = {
  category: 'All',
  searchValue: '',
  sortBy: 'Relevance',
};

export const SearchForm = () => {
  const { control, handleSubmit } = useForm<SearchFormState>({
    defaultValues: defaultState,
  });

  const onSubmit: SubmitHandler<SearchFormState> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack>
        <Controller
          control={control}
          name="searchValue"
          render={({ field }) => (
            <Input
              {...field}
              className={styles.input}
              placeholder="Enter a book title or description"
              radius="md"
              size="md"
            />
          )}
        />
        <Flex align="center" gap="md">
          <Controller
            control={control}
            name="category"
            render={({ field }) => (
              <Dropdown
                defaultValue={defaultState.category}
                onChange={field.onChange}
                options={categoriesToOptions(bookCategories)}
              />
            )}
          />
          <Controller
            control={control}
            name="sortBy"
            render={({ field }) => (
              <Dropdown
                defaultValue={defaultState.sortBy}
                onChange={field.onChange}
                options={sortToOptions(bookSortBy)}
              />
            )}
          />
          <Button className={styles.btn} radius="md" type="submit">
            Find
          </Button>
        </Flex>
      </Stack>
    </form>
  );
};
