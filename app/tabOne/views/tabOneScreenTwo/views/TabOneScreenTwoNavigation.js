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
    header: {
      visible: true,
      title: "test",
      style: {
        backgroundColor: "#00acec"
      },
      tintColor: "#fff",
      right: (
        <Icon
          size={20}
          name={"eye"}
          color={"#FF1493"}
          style={{ marginRight: 5 }}
        />
      ),
      left: (
        <Icon
          size={20}
          name={"flask"}
          color={"#483D8B"}
          style={{ marginLeft: 5 }}
        />
      )
    }
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
