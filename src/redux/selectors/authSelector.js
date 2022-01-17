import { createSelector } from "@reduxjs/toolkit";


export const selectAuth = (state) => state.auth;
export const selectIsAuth = (state) => state.auth.isAuth;
export const selectUserName = (state) => state.auth.username;
