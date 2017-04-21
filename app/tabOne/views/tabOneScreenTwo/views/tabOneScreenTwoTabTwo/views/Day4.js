"use strict";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
export default class Day4 extends React.Component {
  static navigationOptions = {
    tabBarLabel: "Day 4"
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
        <Text>{"Day 4"}</Text>
      </View>
    );
  }
}
