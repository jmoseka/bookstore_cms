import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/books';
import checkStatusReducer from './categories/categories';

const rootReducer = combineReducers({
  books: bookReducer,
  categories: checkStatusReducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;
