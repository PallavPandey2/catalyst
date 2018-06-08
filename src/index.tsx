import React from "react";
import { compose, createStore } from "redux";
import { Provider } from "react-redux";

import Counter from "./containers/Counter";
import Home from "./containers/Home";
import rootReducer from "./redux";

const store = compose()(createStore)(rootReducer);

export default function AppContainer() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}
