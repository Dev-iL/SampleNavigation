"use strict";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
export default class StackRootLoading extends React.Component {

  componentDidMount() {
    setTimeout(() => {
        this.props.navigation.navigate("StackRootLogin");
    }, 2000);
  }

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
        <Text>{"Loading Screen"}</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("StackRootLogin")}
          style={{
            padding: 20,
            borderRadius: 20,
            backgroundColor: "#7FFF00",
            marginTop: 20
          }}
        >
          <Text>{"End Loading"}</Text>
        </TouchableOpacity>

      </View>
    );
  }
}
