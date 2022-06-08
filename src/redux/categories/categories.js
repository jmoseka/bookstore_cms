// action types
const CHECK_STATUS = 'bookstore_cms/bookReducer/checkStatus';

export const checkStatus = () => ({
  type: CHECK_STATUS,
});

const initialState = '';
export default function checkStatusReducer(state = initialState, action) {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under Construction 🏗';
    default:
      return state;
  }
}
