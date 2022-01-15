import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  userId: "",
  userName: "",
  is_admin: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    LOGIN: (state) => {
      state.isAuth = !state.isAuth;
    },
  },
});

export default authSlice.reducer;
