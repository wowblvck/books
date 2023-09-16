import { Button, Flex, Input, Stack } from '@mantine/core';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import { bookCategories, bookOrderBy, changeData } from '@entities/book';
import { useAppDispatch } from '@shared/model';
import { Dropdown } from '@shared/ui/dropdown';
import { categoryToOptions, orderToOptions } from '../lib';

import { SearchFormState } from '../model';
import styles from './styles.module.scss';

const defaultFormValues: SearchFormState = {
  category: '',
  orderBy: 'Relevance',
  value: 'everything',
};

export const SearchForm = () => {
  const { control, handleSubmit } = useForm<SearchFormState>({
    defaultValues: defaultFormValues,
  });

  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<SearchFormState> = (data) => {
    dispatch(
      changeData({
        value: data.value,
        category: data.category,
        orderBy: data.orderBy,
        page: 0,
        isUpdateItems: true,
      })
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack>
        <Controller
          control={control}
          name="value"
          render={({ field }) => (
            <Input
              onChange={field.onChange}
              className={styles.input}
              defaultValue={defaultFormValues.value}
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
                defaultValue={defaultFormValues.category}
                onChange={field.onChange}
                options={categoryToOptions(bookCategories)}
              />
            )}
          />
          <Controller
            control={control}
            name="orderBy"
            render={({ field }) => (
              <Dropdown
                defaultValue={defaultFormValues.orderBy}
                onChange={field.onChange}
                options={orderToOptions(bookOrderBy)}
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
