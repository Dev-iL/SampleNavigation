"use strict";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
export default class Day2 extends React.Component {
  static navigationOptions = {
    tabBar: {
      label: "Day 2"
    }
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
        <Text>{"Day 2"}</Text>
      </View>
    );
  }
}
