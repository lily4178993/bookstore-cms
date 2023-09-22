import React from 'react';
import PropTypes from 'prop-types';
import BooksItem from './BooksItem';

/**
 * BookList Component - Represents a list of books.
 *
 * This component takes an array of book objects and renders a list of
 * individual book items using the BooksItem component.
 *
 * @param {Object} props - The component's props.
 * @param {Object[]} props.books - An array of book objects.
 * @param {Function} props.deleteBook - A function to delete a book.
 */
const BookList = ({ books, deleteBook }) => (
  <>
    {books.map((book) => (
      <BooksItem
        key={book.id}
        book={book}
        deleteBook={deleteBook}
      />
    ))}
  </>
);

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      author: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
  deleteBook: PropTypes.func.isRequired,
};

export default BookList;
