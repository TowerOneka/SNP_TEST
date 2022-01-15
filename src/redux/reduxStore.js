import { applyMiddleware, combineReducers, createStore } from "redux";
import authReducer from "./reducers/authReducer";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./sagas/sagas";
import { createBrowserHistory } from "history";
import { connectRouter, routerMiddleware } from "connected-react-router";
import modalReducer from "./reducers/modalReducer";

const sagaMiddleware = createSagaMiddleware();

export const history = createBrowserHistory();

let reducers = combineReducers({
  auth: authReducer,
  modal: modalReducer,
  router: connectRouter(history),
});

let store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware, routerMiddleware(history))
);
sagaMiddleware.run(rootSaga)

window.store = store;

export default store;
