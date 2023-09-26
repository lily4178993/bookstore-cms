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
 */
const BookList = ({ books }) => (
  <>
    {books.map((book) => (
      <BooksItem
        key={book.item_id}
        book={book}
      />
    ))}
  </>
);

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      item_id: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default BookList;
