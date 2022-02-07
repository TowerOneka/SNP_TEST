import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  error: "",
  testList: [],
  isFetching: false,
  currentTest: {
    questions: [],
  },
};

const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    LOAD_TEST_LIST: (state, action) => {
      state.testList = action.payload;
      state.error = "";
    },
    LOAD_TEST_LIST_ERROR: (state, action) => {
      state.error = action.payload;
    },
    EMPTY_ERROR: (state) => {
      state.error = "";
    },
    CHANGE_FETCHING: (state) => {
      state.isFetching = !state.isFetching;
    },
    GET_CURRENT_TEST: (state, action) => {
      state.currentTest = action.payload;
    },
    CREATE_QUESTION: (state, action) => {
      state.currentTest.questions.push(action.payload);
    },
    EDIT_QUESTION: (state, action) => {
      state.currentTest.questions.forEach((item) => {
        if (item.id === action.payload.id) {
          item.title = action.payload.title;
          item.question_type = action.payload.question_type;
          item.answer = action.payload.answer;
        }
      });
    },
    DELETE_QUESTION: (state, action) => {
      state.currentTest.questions.forEach((item, index) => {
        if (item.id === action.payload.id) {
          state.currentTest.questions.splice(index, 1);
        }
      });
    },
    ADD_ANSWER: (state, action) => {
      state.currentTest.questions.forEach((item) => {
        if (item.id === action.question_id) {
          item.answers.push(action.payload);
        }
      });
    },
    EDIT_ANSWER: (state, action) => {
      state.currentTest.questions.forEach((item) => {
        item.answers.forEach((answer) => {
          if (answer.id === action.payload.id) {
            answer.text = action.payload.text;
            answer.is_right = action.payload.is_right;
          }
        });
      });
    },
    DELETE_ANSWER: (state, action) => {
      state.currentTest.questions.forEach((item, index) => {
        item.answers.forEach((answer, answer_index) => {
          if (answer.id === action.payload.id) {
            state.currentTest.questions[index].answers.splice(answer_index, 1);
          }
        });
      });
    },
  },
});

export const {
  LOAD_TEST_LIST,
  LOAD_TEST_LIST_ERROR,
  EMPTY_ERROR,
  CHANGE_FETCHING,
  GET_CURRENT_TEST,
  CREATE_QUESTION,
  EDIT_QUESTION,
  DELETE_QUESTION,
  ADD_ANSWER,
  DELETE_ANSWER,
  EDIT_ANSWER,
} = testSlice.actions;

export default testSlice.reducer;
