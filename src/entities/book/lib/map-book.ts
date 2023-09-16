import type { BookItem } from '@entities/book';
import type { BookItemDto } from '@entities/book';

export const mapBook = (dto: BookItemDto): BookItem => {
  return {
    authors: dto.volumeInfo.authors,
    categories: dto.volumeInfo.categories,
    description: dto.volumeInfo.description,
    id: dto.id,
    etag: dto.etag,
    imageLinks: dto.volumeInfo.imageLinks,
    selfLink: dto.selfLink,
    subtitle: dto.volumeInfo.subtitle,
    title: dto.volumeInfo.title,
  };
};
