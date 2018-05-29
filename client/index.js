import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import "@atlaskit/css-reset";

import App from "./components/App";

import store from "./store/store";

document.addEventListener("DOMContentLoaded", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
});
