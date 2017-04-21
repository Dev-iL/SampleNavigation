"use strict";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
export default class TabOneScreenTwoTabFour extends React.Component {
  static navigationOptions = {
    tabBar: {
      label: "Fox"
    }
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#FFD700",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Text>{"Tab One Screen Two Tab Four"}</Text>
      </View>
    );
  }
}
