import { Button, Flex, Input, Stack } from '@mantine/core';
import { useForm } from '@mantine/form';

import { bookCategories, bookOrderBy, changeData } from '@entities/book';
import { useAppDispatch } from '@shared/model';
import { Dropdown } from '@shared/ui/dropdown';
import { categoryToOptions, orderToOptions } from '../lib';

import { SearchFormState } from '../model';

const defaultFormValues: SearchFormState = {
  category: ' ',
  orderBy: 'Relevance',
  value: 'everything',
};

export const SearchForm = () => {
  const form = useForm({
    initialValues: defaultFormValues,
  });

  const dispatch = useAppDispatch();

  const onSubmit = (data: SearchFormState) => {
    dispatch(
      changeData({
        value: data.value,
        category: data.category,
        orderBy: data.orderBy,
        page: 0,
        isUpdateItems: true,
        viewPosition: 0,
      })
    );
  };

  return (
    <form onSubmit={form.onSubmit(onSubmit)}>
      <Stack>
        <Input
          {...form.getInputProps('value')}
          w={'100%'}
          placeholder="Enter a book title or description"
          radius="md"
          size="md"
        />
        <Flex align="center" gap="md" direction={{ xs: 'column', sm: 'row' }}>
          <Dropdown
            {...form.getInputProps('category')}
            defaultValue={defaultFormValues.category}
            options={categoryToOptions(bookCategories)}
          />
          <Dropdown
            {...form.getInputProps('orderBy')}
            defaultValue={defaultFormValues.orderBy}
            options={orderToOptions(bookOrderBy)}
          />
          <Button
            w={120}
            ml={{ xs: 'none', sm: 'auto' }}
            style={{ flexShrink: 0 }}
            radius="md"
            type="submit"
          >
            Find
          </Button>
        </Flex>
      </Stack>
    </form>
  );
};
