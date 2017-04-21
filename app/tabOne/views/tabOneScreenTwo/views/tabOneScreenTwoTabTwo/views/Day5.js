"use strict";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
export default class Day5 extends React.Component {
  static navigationOptions = {
    tabBarLbel: "Day 5"
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
        <Text>{"Day 5"}</Text>
      </View>
    );
  }
}
