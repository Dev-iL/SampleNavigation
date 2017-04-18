'use strict'

import { StackNavigator, TabNavigator, TabView } from 'react-navigation'

// Screens
import TabOneScreenOne from './views/TabOneScreenOne'
import TabOneScreenTwo from './views/tabOneScreenTwo/TabOneScreenTwoNavigation'
import TabOneScreenThree from './views/TabOneScreenThree'

const routeConfiguration = {
  TabOneScreenOne: { screen: TabOneScreenOne },
  TabOneScreenTwo: { screen: TabOneScreenTwo },
  TabOneScreenThree: { screen: TabOneScreenThree },
}

const tabNavigatorConfiguration = {
  // headerMode: 'none',
  initialRoute: 'TabOneScreenOne',
  tabBarComponent: TabView.TabBarTop,
  tabBarPosition: 'top',
  swipeEnabled: false,
  // backBehavior: 'none',
}

export const NavigatorTabOne = TabNavigator(routeConfiguration,tabNavigatorConfiguration)
