import { createSlice } from '@reduxjs/toolkit';

export const categorySlice = createSlice({
  name: 'checkStatus',
  initialState: [],
  reducers: {
    checkStatus: (state, action) => {
      const checkStat = {
        name: action.payload.task,
      };
      state.push(checkStat);
    },

  },
});

export const { checkStat } = categorySlice.actions;

export default categorySlice.reducer;
