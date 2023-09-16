import type { BookVolumeDto } from '@entities/book';
import type { BookVolume } from '@entities/book';

import { mapBook } from './map-book';

export const mapVolume = (dto: BookVolumeDto, page: number): BookVolume => {
  return {
    items: dto.items && dto.items.map((bookDto) => mapBook(bookDto)),
    totalItems: dto.totalItems,
    page,
  };
};
