import { createActions } from "redux-actions";

export default createActions({
  app: require("./app").default,
  config: require("./config").default
});
