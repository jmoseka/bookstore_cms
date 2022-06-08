// action types
const ADD_BOOK = 'bookstore_cms/bookReducer/checkStatus';
const DELETE_BOOK = 'bookstore_cms/bookReducer/checkStatus';

const initialState = {
};

export const addBook = (id, title, author) => ({
  type: ADD_BOOK,
  book: {
    id,
    title,
    author,
  },
});

export const removeBook = (id) => ({
  type: DELETE_BOOK,
  book: {
    id,
  },
});

export default function bookReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOK:
      return {
        ...state,
        newBook: action.newBook,
      };
    case DELETE_BOOK:
      return state.filter((item) => item.id !== action.book.id);
    default:
      return initialState;
  }
}
