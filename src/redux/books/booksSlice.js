/**
 * Redux Slice for Book Data
 *
 * This Redux slice manages the state for book-related data, including an array of books.
 * It provides reducers for adding and removing books from the state
 and filtering books by category.
 *
 * @module booksSlice
 */

import { createSlice } from '@reduxjs/toolkit';

// Define the initial state with initial data of books and an empty array of filtered books
const initialState = {
  books: [
    {
      item_id: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      item_id: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      item_id: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ],
  filteredBooks: [],
};

// Create a books slice
const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    /**
     * Reducer to add a new book to the state.
     *
     * @function
     * @name addBook
     * @param {Object} state - The current state of the books slice.
     * @param {Book} action.payload - The new book to add.
     */
    addBook: (state, action) => {
      state.books.push(action.payload);
    },

    /**
     * Reducer to remove a book from the state by ID.
     *
     * @function
     * @name removeBook
     * @param {Object} state - The current state of the books slice.
     * @param {number} action.payload - The ID of the book to remove.
     */
    removeBook: (state, action) => {
      state.books = state.books.filter(
        (book) => book.item_id !== action.payload,
      );
    },

    /**
     * Reducer to filter books by category.
     *
     * @function
     * @name filteredBooksByCategory
     * @param {Object} state - The current state of the books slice.
     * @param {string|null} action.payload - The selected category
     to filter by (or null to show all books).
     */
    filteredBooksByCategory: (state, action) => {
      const selectedCategory = action.payload;
      state.filteredBooks = selectedCategory === 'All'
        ? state.books
        : state.books.filter((book) => book.category === selectedCategory);
    },
  },
});

/**
 * Redux actions for the books slice.
 *
 * @typedef {Object} BooksActions
 * @property {Function} addBook - Add a new book to the state.
 * @property {Function} removeBook - Remove a book from the state by ID.
 * @property {Function} filteredBooksByCategory - Filter books by category.
 */

// Export the reducer function and actions
export const { addBook, filteredBooksByCategory, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
