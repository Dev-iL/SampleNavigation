"use strict";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
export default class TabOneScreenTwoTabOne extends React.Component {
  static navigationOptions = {
    tabBar: {
      label: "Dog"
    }
  };
  
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "red",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Text>{"Tab One Screen Two Tab One"}</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("TabOneScreenTwoTabTwo")}
          style={{
            padding: 20,
            borderRadius: 20,
            backgroundColor: "yellow",
            marginTop: 20
          }}
        >
          <Text>{"Go to next screen this tab"}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
