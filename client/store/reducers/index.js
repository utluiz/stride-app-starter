import { combineReducers } from "redux";

export default combineReducers({
  config: require("./config").default,
  loading: require("./loading").default
});
