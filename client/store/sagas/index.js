import { all } from "redux-saga/effects";

export default function* sagas() {
  yield all([require("./app").default(), require("./config").default()]);
}
