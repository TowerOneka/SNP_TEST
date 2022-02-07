export const selectTestError = (state) => state.test.error;
export const selectTestFetching = (state) => state.test.isFetching;
export const selectTestList = (state) => state.test.testList;
export const selectCurrentTest = (state) => state.test.currentTest;

export const selectAnswers = (state) => state.test.currentTest.questions.answer;
