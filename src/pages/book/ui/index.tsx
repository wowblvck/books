import { useParams } from 'react-router-dom';

export const BookPage = () => {
  const { bookId } = useParams<{ bookId: string }>();
  return <>BookPage - {bookId}</>;
};
