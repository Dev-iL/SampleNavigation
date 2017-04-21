"use strict";
import React from "react";
import { View, Text } from "react-native";
export default class Day1 extends React.Component {
  static navigationOptions = {
    tabBarLabel: "Day 1"
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "azure",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Text>{"Day 1"}</Text>
      </View>
    );
  }
}
