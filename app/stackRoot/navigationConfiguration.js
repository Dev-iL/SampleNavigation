"use strict";
import { StackNavigator } from "react-navigation";
// Tab-Navigators
import TabBarNavigation from "../tabBar/views/TabBarNavigation";
import StackRootLoading from "./views/StackRootLoading";

const routeConfiguration = {
  StackRootLoading: { screen: StackRootLoading },
  TabBarNavigation: { screen: TabBarNavigation }
};

// going to disable the header for now
const stackNavigatorConfiguration = {
  headerMode: 'none',
  initialRoute: 'StackRootLoading'
}

export const StackRoot = StackNavigator(routeConfiguration,stackNavigatorConfiguration)
