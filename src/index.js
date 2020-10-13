import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import App from "./Components/App";
import { Provider } from "react-redux";
import { createStore } from "redux";
//import { addCharactersById } from "./Actions";
import rootReducers from "./Reducers";

const store = createStore(rootReducers);
console.log("Actual State", store.getState());
store.subscribe(() => console.log("store", store.getState()));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
