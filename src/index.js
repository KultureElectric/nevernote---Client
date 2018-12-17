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

// TODO: integrate that active note has different color in note lists -- maybe with styled components npm package
// TODO: find a way that note isn't getting selected as current note when note will be deleted
// TODO: Keep working on the EditorSide of things - https://github.com/facebook/draft-js/blob/master/examples/draft-0-10-0/rich/rich.html
// TODO: Find a way to display two placeholders for first and second paragraph and make first paragraph (Title) to h1 property
