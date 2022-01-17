import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  id: "",
  username: "",
  is_admin: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    LOGIN: (state, action) => {
      state.isAuth = true;
      state.username = action.payload.username;
      state.id = action.payload.id
      state.is_admin = action.payload.is_admin;
    },
    LOGOUT: (state, action) =>{
      state.isAuth = false;
      state.username = "";
      state.id = "";
      state.is_admin = false;
    }
  },
});

export const {LOGIN, LOGOUT} = authSlice.actions;

export default authSlice.reducer;
