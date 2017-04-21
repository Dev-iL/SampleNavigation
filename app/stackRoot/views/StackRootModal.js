"use strict";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default class StackRootModal extends React.Component {

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#8B008B",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Text>{"Loading Screen"}</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.goBack()}
          style={{
            padding: 20,
            borderRadius: 20,
            backgroundColor: "#7FFF00",
            marginTop: 20
          }}
        >
          <Text>{"Close it"}</Text>
        </TouchableOpacity>

      </View>
    );
  }
}
