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
 * Async thunk action to fetch books from an API.
 *
 * @function
 * @name fetchBooks
 * @returns {Promise} A Promise that resolves to the fetched books data.
 * @throws {Error} If there is an issue with the API request.
 */
const fetchBooks = createAsyncThunk('books/fetchBooks', () => axios
  .get(`${BOOKS_API_URL}${BOOKS_API_KEY}/books`)
  .then((response) => response.data));

// Define the initial state with initial data of books and an empty array of filtered books
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
      .addCase(fetchBooks.pending, (state) => {
        if (state.loading === 'idle') {
          state.loading = 'pending';
        }
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        if (state.loading === 'pending') {
          state.loading = 'idle';
          state.books.push(action.payload);
        }
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        if (state.loading === 'pending') {
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

export { fetchBooks };
// Export the reducer function and actions
export const { addBook, filteredBooksByCategory, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
