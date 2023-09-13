import { Option } from '@shared/ui/dropdown';

import { bookSortBy } from '../model/consts';
import { BookSortBy, BookSortByType } from '../model/types';

export const sortToOptions = (sort: BookSortByType): Option[] => {
  const options = Object.keys(sort) as BookSortBy[];
  return options.map((key) => ({
    label: bookSortBy[key],
    value: key,
  }));
};
