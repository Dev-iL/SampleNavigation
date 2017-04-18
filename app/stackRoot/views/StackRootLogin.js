"use strict";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
export default class StackRootLogin extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#00FFFF",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Text>{"Login Screen"}</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("TabBarNavigation")}
          style={{
            padding: 20,
            borderRadius: 20,
            backgroundColor: "#7FFF00",
            marginTop: 20
          }}
        >
          <Text>{"Login"}</Text>
        </TouchableOpacity>

      </View>
    );
  }
}
