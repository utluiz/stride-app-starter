import { createStore, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";

import sagas from "./sagas";
import reducers from "./reducers";

const isLogging = process.env["NODE_ENV"] !== "production";
const logger = createLogger({
  predicate: () => isLogging,
  collapsed: true
});

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware, logger];

let composeEnhancers = compose;
if (isLogging && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
}

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middleware))
);
sagaMiddleware.run(sagas);

export default store;
