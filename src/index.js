import "./style/NoteList.css";
import "materialize-css/dist/css/materialize.css";
import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";

import App from "./components/App";
import reducers from "./reducers";
import * as serviceWorker from "./serviceWorker";

import axios from "axios";
window.axios = axios;

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

// TODO: integrate title function
// TODO: integrate that active note has different color in note lists
// TODO: find a way that note isn't getting selected as current note when note will be deleted
