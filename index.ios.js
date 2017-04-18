"use strict";
// React
import React from "react";
import { AppRegistry } from "react-native";
// Redux
import { Provider } from "react-redux";
import store from "./app/store";
// Navigation
import StackRootNavigation from "./app/stackRoot/views/StackRootNavigation";
class SampleNavigation extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <StackRootNavigation />
      </Provider>
    );
  }
}
AppRegistry.registerComponent("SampleNavigation", () => SampleNavigation);
