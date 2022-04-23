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
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
