import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/booksSlice';
import Button from './Button';

/**
 * BooksItem Component - Represents a single book item.
 *
 * This component displays information about a book, including its category, title, and author.
 * It also provides a "Delete" button to delete the book.
 *
 * @param {Object} props - The component's props.
 * @param {Object} props.book - The book object with item_id, author, category, and title.
 */
const BooksItem = ({ book }) => {
  const dispatch = useDispatch();

  /**
   * Handles the deletion of a book.
   *
   * @param {string} itemId - The unique identifier of the book.
   */
  const handleDeleteBook = (itemId) => {
    dispatch(removeBook(itemId));
  };

  return (
    <div className="border p-4">
      <span>
        <span className="font-bold">Category:</span>
        {' '}
        <b>{book.category}</b>
      </span>
      <h2>
        <span className="font-bold">Title</span>
        {book.title}
      </h2>
      <span>
        <span className="font-bold">Author</span>
        {book.author}
      </span>
      <Button
        name="Delete"
        title="delete"
        onClick={() => handleDeleteBook(book.item_id)}
        className="border ml-4 px-4 py-1"
      />
    </div>
  );
};

BooksItem.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default BooksItem;
