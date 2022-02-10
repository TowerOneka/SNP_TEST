import { createSelector } from "@reduxjs/toolkit";

export const selectTestError = (state) => state.test.error;
export const selectTestFetching = (state) => state.test.isFetching;
export const selectTestList = (state) => state.test.testList;
export const selectCurrentTest = (state) => state.test.currentTest;
export const selectPagesCount = (state) => state.test.total_pages;
export const selectCurrentPage = (state) => state.test.currentPage;

export const selectRightAnswers = createSelector();
