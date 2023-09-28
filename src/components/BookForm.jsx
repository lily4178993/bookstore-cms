import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook, fetchBooks } from '../redux/books/booksSlice';
import categoryOptions from '../constants/categoryListData';
import Button from './Button';

/**
 * BookForm Component - Represents a form for adding new books.
 *
 * This component provides a form with input fields for entering a book's category,
 * title and author. When the user submits the form, it invokes the `addNewBook`
 * function to add a new book to the collection.
 */
const BookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState(categoryOptions[0]);
  const dispatch = useDispatch();

  /**
   * Handles the submission of the book form.
   *
   * @param {Event} e - The form submission event.
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    if ((author.trim() === '') || (title.trim() === '')) return;
    const newBook = {
      item_id: String(Date.now()), author, title, category,
    };

    dispatch(addBook(newBook)).then(() => dispatch(fetchBooks()));
    setAuthor('');
    setTitle('');
    setCategory(categoryOptions[0]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="bookTitle"
        id="bookTitle"
        placeholder="Book Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border ml-4"
      />
      <input
        type="text"
        name="bookAuthor"
        id="bookAuthor"
        placeholder="Book Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        className="border ml-4"
      />
      <select
        name="category"
        id="category"
        value={category}
        onChange={(event) => {
          if (event) {
            return setCategory(event.target.value);
          }
          return setCategory(categoryOptions[0]);
        }}
        className="border ml-4 px-4 py-1"
      >
        {categoryOptions.slice(1).map((categoryOption) => (
          <option
            key={`categoryOptions.length-${categoryOption}`}
            value={categoryOption}
          >
            {categoryOption}
          </option>
        ))}
      </select>
      <Button
        type="submit"
        name="Add Book"
        title="Add Book"
        onClick={handleSubmit}
        className="border ml-4 px-4 py-1"
      />
    </form>
  );
};

export default BookForm;
