import React, { useState } from 'react';
import PropTypes from 'prop-types';

/**
 * BookForm Component - Represents a form for adding new books.
 *
 * This component provides a form with input fields for entering a book's
 * title and author. When the user submits the form, it invokes the `addBook`
 * function to add a new book to the collection.
 *
 * @param {Object} props - The component's props.
 * @param {Function} props.addBook - A function to add a new book.
 */
const BookForm = ({ addBook }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if ((author.trim() === '') || (title.trim() === '')) return;
    const newBook = { id: Date.now(), author, title };
    addBook(newBook);
    setAuthor('');
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Book Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border ml-4"
      />
      <input
        type="text"
        placeholder="Book Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        className="border ml-4"
      />
      <button type="submit" title="Add Book" className="border ml-4 px-4 py-1">Add Book</button>
    </form>
  );
};

BookForm.propTypes = {
  addBook: PropTypes.func.isRequired,
};

export default BookForm;
