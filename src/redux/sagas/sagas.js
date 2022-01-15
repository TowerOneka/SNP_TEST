import { api } from "./../../API/api";
import { takeEvery, spawn, put, call } from "redux-saga/effects";

function* logIn(params) {
  try {
    const request = yield call(api.signin, params);
  } catch (e) {}
}

function* signUp(params){
  try{
    const request = yield call(api.signup, params);
    console.log(request);
  } catch(e){
    console.log(e)
  }
}

function* watchSignIn() {
  yield takeEvery("LOG_IN", logIn);
}

function* watchSignUp(){
  yield takeEvery("SIGN_UP", signUp)
}

export function* rootSaga() {
  yield spawn(watchSignIn);
  yield spawn(watchSignUp)
}
