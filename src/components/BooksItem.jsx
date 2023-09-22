import React from 'react';
import PropTypes from 'prop-types';

/**
 * BooksItem Component - Represents a single book item.
 *
 * This component displays information about a book, including its title and author.
 * It also provides a "Delete" button to delete the book.
 *
 * @param {Object} props - The component's props.
 * @param {Object} props.book - The book object with id, author, and title.
 * @param {Function} props.deleteBook - A function to delete the book.
 */
const BooksItem = ({ book, deleteBook }) => (
  <div className="border p-4">
    <span>
      <span className="font-bold">Category:</span>
      {' '}
      <b>Action</b>
    </span>
    <h2>
      <span className="font-bold">Title</span>
      {book.title}
    </h2>
    <span>
      <span className="font-bold">Author</span>
      {book.author}
    </span>
    <button
      type="button"
      title="delete"
      onClick={() => deleteBook(book.id)}
      className="border ml-4 px-4 py-1"
    >
      Delete
    </button>
  </div>
);

BooksItem.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  deleteBook: PropTypes.func.isRequired,
};

export default BooksItem;
