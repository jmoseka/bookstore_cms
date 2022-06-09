import axios from 'axios';

// action types
const ADD_BOOK = 'bookstore_cms/bookReducer/books';
const DELETE_BOOK = 'bookstore_cms/bookReducer/checkStatus';
const SET_BOOK = 'bookstore_cms/bookReducer/SET_BOOK';
// const REMOVE_SELECTED_BOOK = 'bookstore_cms/bookReducer/REMOVE_SELECTED_BOOK';
// const FETCH_BOOK = 'bookstore_cms/bookReducer/FETCH_BOOK';

export const fetchBook = async () => {
  const response = await axios.get('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/5YW2OgDLnSBnM7Xf2ZfG/books');
  // return action
  return {
    type: SET_BOOK,
    payload: response.data,
  };
};

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (id) => ({
  type: DELETE_BOOK,
  id,
});

export default function bookReducer(state = [], action) {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        action.payload,
      ];
    case DELETE_BOOK:
      return [...state].filter((item) => item.id !== action.id);
    default:
      return state;
  }
}
