// JS

// CSS
import "../css/app.css";
import "../css/fonts.css";

// APP
import React from "react";
import ReactDOM from "react-dom";
import { browserHistory } from "react-router";
import { syncHistoryWithStore } from "react-router-redux";
import configureStore from "./application/store";
import Root from "./application/containers/root";

const store = configureStore(browserHistory);
const history = syncHistoryWithStore(browserHistory, store);

const target = document.getElementById("root_container");
const node = <Root routerHistory={history} store={store} />;

setTimeout(() => ReactDOM.render(node, target), 2000)
