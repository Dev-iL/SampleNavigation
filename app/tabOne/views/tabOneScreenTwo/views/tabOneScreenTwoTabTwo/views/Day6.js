"use strict";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
export default class Day6 extends React.Component {
  static navigationOptions = {
    tabBarLabel: "Day 6"
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
        <Text>{"Day 6"}</Text>
      </View>
    );
  }
}
