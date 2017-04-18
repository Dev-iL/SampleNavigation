"use strict";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
export default class TabOneScreenTwoTabThree extends React.Component {
  static navigationOptions = {
    tabBar: {
      label: "Cat"
    }
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "green",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Text>{"Tab One Screen Two Tab Three"}</Text>
        {/*<TouchableOpacity
          onPress={() => this.props.navigation.goBack()}
          style={{
            padding: 20,
            borderRadius: 20,
            backgroundColor: "purple",
            marginTop: 20
          }}
        >
          <Text>{"Go back a screen this tab"}</Text>
        </TouchableOpacity>*/}

      </View>
    );
  }
}
