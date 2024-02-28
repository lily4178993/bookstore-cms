import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchBooks, removeBook } from '../redux/books/booksSlice';
import Button from './ux/Button';

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
    dispatch(removeBook(bookKey)).then(() => dispatch(fetchBooks()));
  };
  return (
    <div className="relative max-w-[1175px] m-auto my-4 py-7 px-1.5 border bg-white flex justify-between md:p-4">
      <div>
        <span className="text-xs font-bold text-slate-400">{category}</span>
        <h2 className="text-sm font-bold -mt-2 -mb-2 md:text-2xl">{title}</h2>
        <span className="text-xs text-primary">{author}</span>
        <div className="flex gap-2 mt-4 absolute bottom-0 left-1/2 -translate-x-1/2 border-t-2 shadow-inner md:relative md:left-0 md:translate-x-0 md:border-none md:shadow-none">
          <Button
            name="Comment"
            title="Comment"
            onClick={() => null}
            className="text-xs text-primary px-2 border-r-0 focus:font-bold hover:font-bold md:pl-0 md:border-r-2"
          />
          <Button
            name="Edit"
            title="Edit"
            onClick={() => null}
            className="text-xs text-primary px-2 border-r-0 focus:font-bold hover:font-bold md:pl-0 md:border-r-2"
          />
          <Button
            name="Delete"
            title="delete"
            onClick={handleDeleteBook}
            className="text-xs text-primary px-2 border-r-0 focus:font-bold hover:font-bold md:pl-0 md:border-r-2"
          />
        </div>
      </div>
      <div className="flex items-center gap-4 md:mx-10">
        <div className="relative w-12 h-12 rounded-full border-4 border-primary flex justify-center items-center">
          <span className="font-roboto md:absolute left-14">
            <span className="text-xs md:text-3xl">0%</span>
            <br />
            <span className="text-xs text-slate-400 hidden md:block">
              Completed
            </span>
          </span>
        </div>
        <div className="flex flex-col md:gap-3.5 md:ml-32 md:pl-8 md:border-l-2">
          <span className="text-[7px] uppercase text-gray-400 md:text-[11px]">
            Current Chapter
          </span>
          <span className="text-[9px] md:text-base">Chapter 1</span>
          <Button
            name="Update Progress"
            title="Update Progress"
            onClick={() => null}
            className="text-xs text-white bg-secondary px-2 py-1 absolute top-0 right-0 hover:bg-ternary hover:text-secondary focus:px-5 md:relative md:focus:px-2"
          />
        </div>
      </div>
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
