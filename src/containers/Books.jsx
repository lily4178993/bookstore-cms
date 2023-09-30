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
    <section className="h-screen relative px-4 py-8 bg-ternary md:px-10 md:py-10 xl:px-[8%]">
      {loading === 'pending' && (<p className="text-center m-10">Loading...</p>)}
      <div className="h-[60vh] overflow-x-auto md:h-[70vh]">
        {books && books.length !== 0 && (
          books.map((book) => (
            <BooksItem
              key={book.item_id}
              bookKey={book.item_id}
              author={book.author}
              category={book.category}
              title={book.title}
            />
          ))
        )}
      </div>
      {error && (
      <p className="text-center mt-10">
        Error:
          {' '}
          {error.message}
        <br />
        <br />
        No books available.
      </p>
      )}
      <BookForm />
    </section>
  );
};

export default Books;
