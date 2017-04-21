"use strict";
// React
import React from "react";
// Navigation
import { addNavigationHelpers } from "react-navigation";
import { NavigatorTabOneStack } from "../navigationConfiguration";
//Redux
import { connect } from "react-redux";
// Icon
import Icon from "react-native-vector-icons/FontAwesome";

const mapStateToProps = state => {
  return {
    navigationState: state.tabOneStack
  };
};

class TabOneStackNavigation extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Tab One',
    tabBarIcon: ({ tintColor }) => <Icon size={ 20 } name={ 'coffee' } color={ tintColor }/>
  };

  render() {
    const { dispatch, navigationState } = this.props;
    return (
      <NavigatorTabOneStack
        navigation={addNavigationHelpers({
          dispatch: dispatch,
          state: navigationState
        })}
      />
    );
  }
}

export default connect(mapStateToProps)(TabOneStackNavigation);
