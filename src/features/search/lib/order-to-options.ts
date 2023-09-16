import type { BookOrder } from '@entities/book';
import { Option } from '@shared/ui/dropdown';

export const orderToOptions = (orders: Record<BookOrder, string>): Option[] => {
  const options = Object.keys(orders) as BookOrder[];
  return options.map((key) => ({
    label: key,
    value: orders[key],
  }));
};
