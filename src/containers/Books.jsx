import React, { useState } from 'react';
import { BookForm, BookList } from '../components';
import initialBooksData from '../constants/initialBooksData';

/**
 * Books Component - Represents a collection of books.
 *
 * This component displays a collection of books, allowing users to view and
 * manage the list of books. It includes a BookList component for displaying
 * individual books and a BookForm component for adding new books.
 */
const Books = () => {
  const [books, setBooks] = useState(initialBooksData);

  const addBook = (newBook) => {
    setBooks([...books, newBook]);
  };

  const deleteBook = (id) => {
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  };
  return (
    <section className="h-[80vh]">
      <br />
      <h1 className="text-3xl text-center">Book Collections</h1>
      <br />
      <br />
      <BookList
        books={books}
        deleteBook={deleteBook}
      />
      <br />
      <br />
      <BookForm addBook={addBook} />
    </section>
  );
};

export default Books;
