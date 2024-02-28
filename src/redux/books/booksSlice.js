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
 * Adds a new book to the API.
 *
 * @function
 * @name addBook
 * @param {Object} newBook - The new book data to be added.
 * @returns {Promise} A Promise that resolves to the added book data.
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
 * @property {string} loading - The loading state ('idle', 'pending', or 'fulfilled').
 * @property {null|Error} error - An optional error object if there is an issue.
 */
const initialState = {
  books: [],
  loading: false,
  error: null,
};

// Create a books slice
const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addBook.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(removeBook.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(fetchBooks.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.loading = false;
        state.books = Object.entries(action.payload).map(
          ([bookId, bookArray]) => ({
            item_id: bookId,
            author: bookArray[0].author,
            title: bookArray[0].title,
            category: bookArray[0].category,
          }),
        );
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        if (state.books.length === 0) {
          state.loading = false;
          state.error = action.error;
        }
      });
  },
});

export { addBook, fetchBooks, removeBook };
export default booksSlice.reducer;
