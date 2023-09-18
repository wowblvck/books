import { BookOrderValue, BookCategoryValue } from './consts';

export interface BookVolume {
  page: number;
  items: BookItem[];
  totalItems: number;
}

export interface BookItem {
  authors: string[];
  categories?: string[];
  description?: string;
  id: string;
  etag: string;
  imageLinks?: {
    smallThumbnail?: string;
    thumbnail?: string;
    small?: string;
    medium?: string;
    large?: string;
    extraLarge?: string;
  };
  selfLink: string;
  subtitle?: string;
  title: string;
}

export interface BookSession {
  page: number;
  value: string;
  orderBy: BookOrderValue;
  category: BookCategoryValue;
  isUpdateItems: boolean;
}
