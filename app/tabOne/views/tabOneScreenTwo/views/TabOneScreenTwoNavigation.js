"use strict";

// React
import React from "react";

// Navigation
import { addNavigationHelpers } from "react-navigation";
import { NavigatorTabOneScreenTwo } from "../navigationConfiguration";

// Redux
import { connect } from "react-redux";

// Icon
import Icon from "react-native-vector-icons/FontAwesome";

const mapStateToProps = state => {
  return {
    navigationState: state.tabOneScreenTwoTabs
  };
};

class TabOneScreenTwoNavigation extends React.Component {
  static navigationOptions = {
    headerVisible: true,
    headerTitle: "test",
    headerStyle: {
      backgroundColor: "#00acec"
    },
    headerTintColor: "#fff",
    headerRight: (
      <Icon
        size={20}
        name={"eye"}
        color={"#FF1493"}
        style={{ marginRight: 8 }}
      />
    ),
    headerLeft: (
      <Icon
        size={20}
        name={"flask"}
        color={"#483D8B"}
        style={{ marginLeft: 8 }}
      />
    )
  };

  render() {
    const { navigationState, dispatch } = this.props;
    return (
      <NavigatorTabOneScreenTwo
        navigation={addNavigationHelpers({
          dispatch: dispatch,
          state: navigationState
        })}
      />
    );
  }
}
export default connect(mapStateToProps)(TabOneScreenTwoNavigation);
