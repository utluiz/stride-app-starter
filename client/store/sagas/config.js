import { takeEvery, call, put } from "redux-saga/effects";

import actions from "../../store/actions";
import * as config from "../../services/config";

export function* get() {
  try {
    const res = yield call(config.get);
    yield put(actions.config.get.ok(res));
  } catch (e) {
    yield put(actions.config.get.fail(e));
  }
}

export default function* watch() {
  yield takeEvery(actions.config.get.start, get);
}
