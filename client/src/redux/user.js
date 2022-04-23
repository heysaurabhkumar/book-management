import { initialState } from "./initialState";
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: initialState.user,
  reducers: {
    setUser: (state, action) => {
      return {
        ...state,
        ...action.payload,
        isLoggined: true,
      };
    },
    logout: (state) => {
      return {
        ...state,
        _id: "",
        name: "",
        email: "",
        isAdmin: "",
        isLoggined: false,
      };
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
