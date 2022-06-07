import { createSlice } from '@reduxjs/toolkit';

export const bookSlice = createSlice({
  name: 'bookItem',
  initialState: [],
  reducers: {
    addBookItem: (state, action) => {
      const newTask = {
        id: Math.floor(Math.random() * 1000),
        name: action.payload.task,
      };
      state.push(newTask);
    },
    deleteBookItem: (state, action) => state.filter((item) => item.id !== action.payload.id),
  },
});

export const { addBookItem, deleteBookItem } = bookSlice.actions;

export default bookSlice.reducer;
