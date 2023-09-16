import type { BookCategory } from '@entities/book';
import { Option } from '@shared/ui/dropdown';

export const categoryToOptions = (categories: Record<BookCategory, string>): Option[] => {
  const options = Object.keys(categories) as BookCategory[];
  return options.map((key) => ({
    label: key,
    value: categories[key],
  }));
};
