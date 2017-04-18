"use strict";
import { TabNavigator, TabView } from "react-navigation";
// Tab-Navigators
import TabOneNavigation from "../tabOne/views/TabOneNavigation";
import TabTwoNavigation from "../tabTwo/views/TabTwoNavigation";
import TabThreeNavigation from "../tabThree/views/TabThreeNavigation";
import TabFourNavigation from "../tabFour/views/TabFourNavigation";

const routeConfiguration = {
  TabOneNavigation: { screen: TabOneNavigation },
  TabTwoNavigation: { screen: TabTwoNavigation },
  TabThreeNavigation: { screen: TabThreeNavigation },
  TabFourNavigation: {screen: TabFourNavigation}
};

const tabBarConfiguration = {
  tabBarComponent: TabView.TabBarBottom,
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  initialRoute: 'TabOneNavigation',
  //...other configs
  tabBarOptions: {
    // tint color is passed to text and icons (if enabled) on the tab bar
    activeTintColor: "coral",
    inactiveTintColor: "red",
    // background color is for the tab component
    activeBackgroundColor: "skyblue",
    inactiveBackgroundColor: "white",
  }
};

export const TabBar = TabNavigator(routeConfiguration, tabBarConfiguration);

export const tabBarReducer = (state, action) => {
  if (action.type === "JUMP_TO_TAB") {
    return { ...state, index: 0 };
  } else {
    return TabBar.router.getStateForAction(action, state);
  }
};
