// action types
const CHECK_STATUS = 'bookstore_cms/bookReducer/checkStatus';

export const checkStat = () => ({
  type: CHECK_STATUS,
});

const initialState = 'Under Construction 🏗';
export default function statusReducer(state = initialState, action) {
  switch (action.type) {
    case CHECK_STATUS:
      return state;
    default:
      return state;
  }
}
