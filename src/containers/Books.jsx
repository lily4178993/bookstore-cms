import React from 'react';
import { useSelector } from 'react-redux';
import { BookForm, BookList } from '../components';

/**
 * Books Component - Represents a collection of books.
 *
 * This component displays a collection of books, allowing users to view and
 * manage the list of books. It includes a BookList component for displaying
 * individual books and a BookForm component for adding new books.
 */
const Books = () => {
  const { books } = useSelector((state) => state.books);

  return (
    <section className="h-[80vh]">
      <br />
      <h1 className="text-3xl text-center">Book Collections</h1>
      <br />
      <br />
      <BookList
        books={books}
      />
      <br />
      <br />
      <BookForm />
    </section>
  );
};

export default Books;
