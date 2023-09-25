/**
 * Redux Slice for Category Data
 *
 * This Redux slice manages the state for category-related data, including an array of categories.
 * It provides a reducer that always returns "Under construction" when queried for status.
 *
 * @module categorySlice
 */

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

/**
 * Get the status of the category slice (always returns "Under construction").
 *
 * @function
 * @name getStatus
 * @returns {string} The status message.
 */

const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    getStatus: () => 'Under construction',
  },
});

// Export the reducer function and actions
export const { getStatus } = categorySlice.actions;
export default categorySlice.reducer;
