import axios from 'axios';

// action types
const GET_BOOK = 'bookstore_cms/bookReducer/books';
const ADD_BOOK = 'bookstore_cms/bookReducer/addBook';
const DELETE_BOOK = 'bookstore_cms/bookReducer/checkStatus';
const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/5YW2OgDLnSBnM7Xf2ZfG/books';

export const getBook = (payload) => ({
  type: GET_BOOK,
  payload,
});

export const addBook = (book) => ({
  type: ADD_BOOK,
  book,
});

export const removeBook = (id) => ({
  type: DELETE_BOOK,
  id,
});

export const fetchBook = () => async (dispatch) => {
  try {
    const response = await axios.get(url);
    const data = await response.data;
    const books = [];
    Object.entries(data).forEach((el) => {
      books.push({
        item_id: el[0],
        ...el[1][0],
      });
    });
    dispatch(getBook(books));
  } catch (error) {
    <h2>{error}</h2>;
  }
};

export default function bookReducer(state = [], action) {
  switch (action.type) {
    case GET_BOOK:
      return action.payload;
    case ADD_BOOK:
      return [
        ...state,
        action.book,
      ];
    case DELETE_BOOK:
      return [...state].filter((item) => item.item_id !== action.id);
    default:
      return state;
  }
}
