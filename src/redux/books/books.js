// action types
const ADD_BOOK = 'bookstore_cms/bookReducer/books';
const DELETE_BOOK = 'bookstore_cms/bookReducer/checkStatus';

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
