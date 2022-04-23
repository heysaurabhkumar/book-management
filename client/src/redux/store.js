import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import userReducer from "./user";
import booksReducer from "./books";
import rootSaga from "../saga";

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  user: userReducer,
  books: booksReducer,
});

const store = configureStore({
  reducer,
  middleware: [sagaMiddleware],
  devTools: true,
});

sagaMiddleware.run(rootSaga);
export default store;
