import { BookError } from './types';

export const isApiErrorResponse = (error: unknown): error is BookError => {
  return typeof error === 'object' && error != null && 'status' in error;
};
