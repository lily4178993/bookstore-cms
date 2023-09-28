/**
 * Redux Slice for Book Data
 *
 * This Redux slice manages the state for book-related data, including an array of books.
 * It provides reducers for adding and removing books from the state
 * and filtering books by category.
 *
 * @module booksSlice
 */

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const BOOKS_API_URL = process.env.REACT_APP_URL;
const BOOKS_API_KEY = process.env.REACT_APP_KEY;

/**
 * Async thunk action to remove a book from the API by its ID.
 *
 * @function
 * @name removeBook
 * @param {string} bookId - The ID of the book to be removed.
 * @returns {Promise} A Promise that resolves to the ID of the removed book.
 * @throws {Error} If there is an issue with the API request.
 */
const addBook = createAsyncThunk('books/addBook', async (newBook) => {
  const response = await axios.post(
    `${BOOKS_API_URL}${BOOKS_API_KEY}/books`,
    newBook,
  );
  return response.data;
});

/**
 * Async thunk action to remove a book from the API by its ID.
 *
 * @function
 * @name removeBook
 * @param {string} bookId - The ID of the book to be removed.
 * @returns {Promise} A Promise that resolves to the ID of the removed book.
 * @throws {Error} If there is an issue with the API request.
 */
const removeBook = createAsyncThunk('books/removeBook', async (bookId) => {
  await axios.delete(`${BOOKS_API_URL}${BOOKS_API_KEY}/books/${bookId}`);
  return bookId;
});

/**
 * Async thunk action to fetch books from the API.
 *
 * @function
 * @name fetchBooks
 * @returns {Promise} A Promise that resolves to the fetched books data.
 * @throws {Error} If there is an issue with the API request.
 */
const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const response = await axios.get(`${BOOKS_API_URL}${BOOKS_API_KEY}/books`);
  return response.data;
});

/**
 * Initial state object for the books slice.
 *
 * @typedef {Object} BooksInitialState
 * @property {Array} books - An array of book objects.
 * @property {Array} filteredBooks - An array of book objects filtered by category.
 * @property {string} loading - The loading state ('idle', 'pending', or 'fulfilled').
 * @property {null|Error} error - An optional error object if there is an issue.
 */
const initialState = {
  books: [],
  filteredBooks: [],
  loading: 'idle',
  error: null,
};

// Create a books slice
const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {

    /**
     * Reducer to filter books by category.
     *
     * @function
     * @name filteredBooksByCategory
     * @param {Object} state - The current state of the books slice.
     * @param {string|null} action.payload - The selected category
     *   to filter by (or null to show all books).
     */
    filteredBooksByCategory: (state, action) => {
      const selectedCategory = action.payload;
      state.filteredBooks = selectedCategory === 'All'
        ? state.books
        : state.books.filter((book) => book.category === selectedCategory);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addBook.fulfilled, (state) => {
        state.loading = 'idle';
      })
      .addCase(removeBook.fulfilled, (state) => {
        state.loading = 'idle';
      })
      .addCase(fetchBooks.pending, (state) => {
        if (state.loading === 'idle') {
          state.loading = 'pending';
        }
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        if (state.loading === 'pending') {
          state.loading = 'fulfilled';
          state.books = action.payload;
        }
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        if (state.books.length === 0) {
          state.loading = 'idle';
          state.error = action.error;
        }
      });
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
export { addBook, fetchBooks, removeBook };
export const { filteredBooksByCategory } = booksSlice.actions;
export default booksSlice.reducer;
