import { takeEvery, put } from "redux-saga/effects";

import actions from "../../store/actions";

export function* init() {
  yield put(actions.config.get.start());
}

export default function* watch() {
  yield takeEvery(actions.app.init.start, init);
}
