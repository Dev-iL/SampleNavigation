"use strict";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
export default class Day3 extends React.Component {
  static navigationOptions = {
    tabBarLbel: "Day 3"
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
        <Text>{"Day 3"}</Text>
      </View>
    );
  }
}
