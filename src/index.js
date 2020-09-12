import React from "react";
import * as serviceWorker from "./serviceWorker";
import reducer from "./redux/reducer/index";
import { Provider } from "react-redux";
import { createStore } from "redux";
import ReactDOM from "react-dom";
import App from "./App/App";
import "./index.sass";

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
