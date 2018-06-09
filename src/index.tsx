import React from "react";
import { compose, createStore } from "redux";
import { Provider } from "react-redux";
import {
  StackNavigator,
} from 'react-navigation';


import Counter from "./containers/Counter";
import Home from "./containers/Home";
import LandingPage from "./containers/LnadingPage";
import Question from "./containers/Question";
import AddQuestion from "./containers/AddQuestion";
import rootReducer from "./redux";

const store = compose()(createStore)(rootReducer);

export default function AppContainer() {
  return (
    <Provider store={store}>
      <LandingPage />
    </Provider>
  );
}
const App = StackNavigator({
  Home: { screen: Home },
  Question: { screen: Question },
  NewQuestion: { screen: AddQuestion }
});