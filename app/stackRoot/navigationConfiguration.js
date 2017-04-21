"use strict";
import { StackNavigator } from "react-navigation";
// Tab-Navigators
import TabBarNavigation from "../tabBar/views/TabBarNavigation";
import StackRootLoading from "./views/StackRootLoading";
import StackRootModal from "./views/StackRootModal";
import StackRootLogin from "./views/StackRootLogin";

const routeConfiguration = {
  StackRootLoading: { screen: StackRootLoading },
  StackRootModal: { screen: StackRootModal },
  StackRootLogin: { screen: StackRootLogin },
  TabBarNavigation: { screen: TabBarNavigation }
};

// going to disable the header for now
const stackNavigatorConfiguration = {
  headerMode: 'none',
  mode: 'modal',
  navigationOptions: {
    cardStack: {
      gesturesEnabled: false,
    },
  },
  initialRoute: 'StackRootLoading'
}

// const MultiNavigator = (routeConfigs, stackNavigatorConfiguration) => {
//   const modalNavigatorRoutes = {};
//   Object.keys(routeConfigs).forEach(routeName => {
//     const InnerNavigator = StackNavigator(routeConfigs, stackNavigatorConfiguration);
//     modalNavigatorRoutes[routeName+'Modal'] = { screen: InnerNavigator };
//   });
//   return StackNavigator(modalNavigatorRoutes, {...stackNavigatorConfiguration, mode: 'modal'});
// };

export const StackRoot = StackNavigator(routeConfiguration,stackNavigatorConfiguration)
