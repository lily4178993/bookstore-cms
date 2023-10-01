/**
 * Redux Slice for Category Data
 *
 * This Redux slice manages the state for category-related data, including an array of categories.
 * It provides a reducer to handle category selection.
 *
 * @module categorySlice
 */

import { createSlice } from '@reduxjs/toolkit';
import { fetchBooks } from '../books/booksSlice';

/**
 * Initial state object for the categories slice.
 *
 * @typedef {Object} CategoriesInitialState
 * @property {Array} categories - An array of categories.
 * @property {null|string} selectedCategory - The currently selected category.
 * @property {Array} filteredBooks - An array of book objects filtered by category.
 */
const initialState = {
  categories: [
    'All',
    'Action',
    'Adventure',
    'Comedy',
    'Cooking',
    'Drama',
    'Fantasy',
    'Fiction',
    'Historical',
    'Horror',
    'Mystery',
    'Psychological',
    'Romance',
    'Sci fi',
    'Sport',
    'Supernatural',
    'Tragedy',
  ],
  selectedCategory: null,
  filteredBooks: [],
};

// Create a category slice
const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    /**
     * Set the selected category in the state.
     *
     * @function
     * @name selectCategory
     * @param {Object} state - The current state of the categories slice.
     * @param {string|null} action.payload - The category to select (or null to clear selection).
     */
    selectCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      const booksObject = typeof action.payload === 'object' ? action.payload : {};
      const booksArray = Object.entries(booksObject).map(
        ([bookId, bookArray]) => ({
          item_id: bookId,
          author: bookArray[0].author,
          title: bookArray[0].title,
          category: bookArray[0].category,
        }),
      );
      if (state.selectedCategory === 'All') {
        state.filteredBooks = booksArray;
      } else {
        state.filteredBooks = booksArray.filter(
          (book) => book.category === state.selectedCategory,
        );
      }
    });
  },
});

export const { selectCategory } = categorySlice.actions;
export default categorySlice.reducer;
