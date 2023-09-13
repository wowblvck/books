import { Option } from '@shared/ui/dropdown';

import { bookCategories } from '../model/consts';
import { BookCategory, BookCategoryType } from '../model/types';

export const categoriesToOptions = (categories: BookCategoryType): Option[] => {
  const options = Object.keys(categories) as BookCategory[];
  return options.map((key) => ({
    label: bookCategories[key],
    value: key,
  }));
};
