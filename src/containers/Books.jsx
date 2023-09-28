import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BookForm, BooksItem } from '../components';
import { fetchBooks } from '../redux/books/booksSlice';

/**
 * Books Component - Represents a collection of books.
 *
 * This component displays a collection of books, allowing users to view and
 * manage the list of books. It includes a BookList component for displaying
 * individual books and a BookForm component for adding new books.
 *
 * @component
 */
const Books = () => {
  const { books, loading, error } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    if (books.length === 0) {
      dispatch(fetchBooks());
    }
  }, [books.length, dispatch]);

  return (
    <section className="h-[80vh]">
      <br />
      <h1 className="text-3xl text-center">Book Collections</h1>
      <br />
      <br />
      {loading === 'pending' && (<p>Loading...</p>)}
      {books && books.length !== 0 && (
        Object.entries(books).map(([itemId, book]) => (
          <BooksItem
            key={itemId}
            bookKey={(itemId)}
            author={book[0].author}
            category={book[0].category}
            title={book[0].title}
          />
        )))}
      {error && (
      <p>
        No books available.
        {' '}
        Error:
        {' '}
        {error.message}
      </p>
      )}
      <br />
      <br />
      <BookForm />
    </section>
  );
};

export default Books;
