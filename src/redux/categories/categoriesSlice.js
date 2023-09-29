/**
 * Redux Slice for Category Data
 *
 * This Redux slice manages the state for category-related data, including an array of categories.
 * It provides a reducer to handle category selection.
 *
 * @module categorySlice
 */

import { createSlice } from '@reduxjs/toolkit';

// Define the initial state with an array of categories and no selected category
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
});

/**
 * Redux actions for the categories slice.
 *
 * @typedef {Object} CategoryActions
 * @property {Function} selectCategory - Set the selected category in the state.
 */

// Export the reducer function and actions
export const { selectCategory } = categorySlice.actions;
export default categorySlice.reducer;
