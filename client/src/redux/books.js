import { initialState } from "./initialState";
import { createSlice } from "@reduxjs/toolkit";

const booksSlice = createSlice({
  name: "books",
  initialState: initialState.books,
  reducers: {
    setBooks: (state, action) => {
      console.log(action.payload);
      return [...action.payload];
    },
    addBooks: (state, action) => {
      console.log(action.payload);
      return [...state, action.payload];
    },
    deleteBooks: (state, action) => {
      console.log(action.payload);
      return state.filter((book) => book._id !== action.payload);
    },
    increaseBooks: (state, action) => {
      console.log(action.payload);
      return state.map((book) =>
        book._id === action.payload._id ? action.payload : book
      );
    },
    decreaseBooks: (state, action) => {
      console.log(action.payload);
      return state.map((book) =>
        book._id === action.payload._id ? action.payload : book
      );
    },
  },
});

export const booksActions = booksSlice.actions;
export default booksSlice.reducer;
