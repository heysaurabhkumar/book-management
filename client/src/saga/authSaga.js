import { takeLatest, all, put } from "redux-saga/effects";
import auth from "../api/auth";
import { userActions } from "../redux/user";
import sagaActions from "./sagaActions";

function* login(action) {
  try {
    const { data } = yield auth.login(action.payload);
    yield put(userActions.setUser(data.user));
  } catch (error) {
    console.log(error);
  }
}

function* logout() {
  try {
    yield auth.logout();
    yield put(userActions.logout());
  } catch (error) {
    console.log(error);
  }
}

export default function* authSaga() {
  yield all([
    yield takeLatest(sagaActions.LOGIN, login),
    yield takeLatest(sagaActions.LOGOUT, logout),
  ]);
}
