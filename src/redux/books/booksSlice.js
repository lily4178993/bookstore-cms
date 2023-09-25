/**
 * Redux Slice for Book Data
 *
 * This Redux slice manages the state for book-related data, including an array of books.
 * It provides reducers for adding and removing books from the state.
 *
 * @module booksSlice
 */

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    /**
     * Reducer to add a new book to the state.
     *
     * @function
     * @name addBook
     * @param {Book} action.payload - The new book to add.
     * @param {InitialState} state - The current state of the books slice.
     */
    addBook: (state, action) => {
      state.books.push(action.payload);
    },

    /**
     * Reducer to remove a book from the state by ID.
     *
     * @function
     * @name removeBook
     * @param {number} action.payload - The ID of the book to remove.
     * @param {InitialState} state - The current state of the books slice.
     */
    removeBook: (state, action) => {
      state.books = state.books.filter((book) => book.id !== action.payload);
    },
  },
});

// Export the reducer function and actions
export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
