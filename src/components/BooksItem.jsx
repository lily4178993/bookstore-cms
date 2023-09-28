import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/booksSlice';
import Button from './Button';

/**
 * BooksItem Component - Represents a single book item.
 *
 * This component displays information about a book, including its category, title, and author.
 */
const BooksItem = ({
  bookKey, author, category, title,
}) => {
  const dispatch = useDispatch();
  const handleDeleteBook = () => {
    dispatch(removeBook(bookKey));
  };
  return (
    <div className="border p-4">
      <span>
        <span className="font-bold">Category:</span>
        {' '}
        <b>{category}</b>
      </span>
      <h2>
        <span className="font-bold">Title</span>
        {title}
      </h2>
      <span>
        <span className="font-bold">Author</span>
        {author}
      </span>
      <Button
        name="Delete"
        title="delete"
        onClick={handleDeleteBook}
        className="border ml-4 px-4 py-1"
      />
    </div>
  );
};
BooksItem.propTypes = {
  bookKey: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default BooksItem;
