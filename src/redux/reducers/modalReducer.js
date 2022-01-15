import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  isOpen: false,
  modalType: "form",
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openClose: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { openClose } = modalSlice.actions;

export default modalSlice.reducer;
