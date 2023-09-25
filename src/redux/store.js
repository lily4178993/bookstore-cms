/**
 * Redux Store Configuration
 *
 * This module configures the Redux store using Redux Toolkit. It combines multiple reducers
 * The store includes reducers for managing books and categories.
 *
 * @module store
 */

import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/booksSlice';
import categoryReducer from './categories/categoriesSlice';

/**
 * Configure the Redux store.
 *
 * @function
 * @name configureReduxStore
 * @returns {ReduxStore} The configured Redux store instance.
 */

const store = configureStore({
  reducer: {
    books: bookReducer,
    categories: categoryReducer,
  },
});

export default store;
