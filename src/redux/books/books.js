// action types
const ADD_BOOK = 'bookstore_cms/bookReducer/checkStatus';
const DELETE_BOOK = 'bookstore_cms/bookReducer/checkStatus';

const initialState = [];

export default function bookReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 1000),
          name: action.payload.task,
        },
      ];
    case DELETE_BOOK:
      return state.filter((item) => item.id !== action.payload.id);
    default:
      return initialState;
  }
}
