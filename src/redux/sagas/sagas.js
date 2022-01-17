import { api } from "./../../API/api";
import { takeEvery, spawn, put, call } from "redux-saga/effects";
import { LOGIN, LOGOUT } from "../reducers/authReducer";

function* logIn(params) {
  try {
    const request = yield call(api.signin, params.payload);
    yield put({type: LOGIN, payload: request})
  } catch (e) {
    console.log(e);
  }
}

function* signUp(params){
  try{
    const request = yield call(api.signup, params.payload);
    console.log(request);
  } catch(e){
    console.log(e)
  }
}
function* getCurrent(){
  try{
    const request = yield call(api.getCurrentUser);
    console.log(request);
  }catch(e){
    console.log(e)
  }
}
function* logOut(){
  try{
    yield call(api.logout);
    yield put({type: LOGOUT})
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
function* watchGetCurrnentUser(){
  yield takeEvery("GET_CURRENT_USER", getCurrent)
}
function* watchSignOut(){
  yield takeEvery("LOG_OUT", logOut)
}

export function* rootSaga() {
  yield spawn(watchSignIn);
  yield spawn(watchSignUp);
  yield spawn(watchGetCurrnentUser);
  yield spawn(watchSignOut);
}
