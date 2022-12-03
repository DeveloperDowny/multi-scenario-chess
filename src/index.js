import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Game from "./components/game.js";
import Home from "./components/Home";
import { Provider } from "react-redux";
import store from "./app/store";

ReactDOM.render(
  // <Game />,
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById("root")
);
