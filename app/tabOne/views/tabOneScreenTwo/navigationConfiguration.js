'use strict'

import { StackNavigator, TabNavigator, TabView } from 'react-navigation'

// Screens
import TabOneScreenTwoTabOne from './views/TabOneScreenTwoTabOne'
import TabOneScreenTwoTabTwo from './views/tabOneScreenTwoTabTwo/views/TabOneScreenTwoTabTwoNavigation'
import TabOneScreenTwoTabThree from './views/TabOneScreenTwoTabThree'

const routeConfiguration = {
  TabOneScreenTwoTabOne: { screen: TabOneScreenTwoTabOne },
  TabOneScreenTwoTabTwo: { screen: TabOneScreenTwoTabTwo },
  TabOneScreenTwoTabThree: { screen: TabOneScreenTwoTabThree },
}

const tabNavigatorConfiguration = {
  // headerMode: 'none',
  initialRoute: 'TabOneScreenTwoTabOne',
  tabBarComponent: TabView.TabBarTop,
  tabBarPosition: 'top',
  swipeEnabled: false,
  // backBehavior: 'none',
}

export const NavigatorTabOneScreenTwo = TabNavigator(routeConfiguration,tabNavigatorConfiguration)
