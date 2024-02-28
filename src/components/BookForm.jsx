import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook, fetchBooks } from '../redux/books/booksSlice';
import Button from './ux/Button';

/**
 * BookForm Component - Represents a form for adding new books.
 *
 * This component provides a form with input fields for entering a book's category,
 * title and author. When the user submits the form, it invokes the `addBook`
 * function to add a new book to the collection.
 *
 * @component
 */
const BookForm = () => {
  const { categories: categoryOptions } = useSelector((state) => state.categories);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState(categoryOptions[1]);
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
    setCategory(categoryOptions[1]);
  };

  return (
    <div className="mt-6 pt-2 border-t-2 border-neutral-200">
      <span className="font-bold text-slate-500">Add New Book</span>
      <form onSubmit={handleSubmit} className="max-w-[1080px] flex flex-col gap-2 md:flex-row md:items-stretch">
        <input
          type="text"
          name="bookTitle"
          id="bookTitle"
          placeholder="Book Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="flex-1 border px-2 py-1 hover:px-5 focus:px-5 focus:outline-primary"
        />
        <input
          type="text"
          name="bookAuthor"
          id="bookAuthor"
          placeholder="Book Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="flex-1 border px-2 py-1 hover:px-5 focus:px-5 focus:outline-primary"
        />
        <select
          name="category"
          id="category"
          value={category}
          onChange={(event) => {
            if (event) {
              return setCategory(event.target.value);
            }
            return setCategory(categoryOptions[1]);
          }}
          className="flex-1 border px-1 py-1.5 hover:px-5 focus:px-5 focus:outline-primary"
        >
          {categoryOptions.slice(1).map((categoryOption) => (
            <option
              key={`categoryOptions.length-${categoryOption}`}
              value={categoryOption}
              className="text-primary"
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
          className="border px-4 py-1 uppercase text-xs text-white bg-secondary hover:bg-primary focus:bg-primary focus:outline-trabsparent md:hover:px-5 md:focus:px-5"
        />
      </form>
    </div>
  );
};

export default BookForm;
