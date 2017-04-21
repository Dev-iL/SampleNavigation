'use strict'

import { StackNavigator, TabNavigator, TabView } from 'react-navigation'

// Screens
import TabOneScreenTwoTabOne from './views/TabOneScreenTwoTabOne'
import TabOneScreenTwoTabTwo from './views/tabOneScreenTwoTabTwo/views/TabOneScreenTwoTabTwoNavigation'
import TabOneScreenTwoTabThree from './views/TabOneScreenTwoTabThree'
import TabOneScreenTwoTabFour from './views/TabOneScreenTwoTabFour'

const routeConfiguration = {
  TabOneScreenTwoTabOne: { screen: TabOneScreenTwoTabOne },
  TabOneScreenTwoTabTwo: { screen: TabOneScreenTwoTabTwo },
  TabOneScreenTwoTabThree: { screen: TabOneScreenTwoTabThree },
  TabOneScreenTwoTabFour: { screen: TabOneScreenTwoTabFour },
}

const tabNavigatorConfiguration = {
  initialRoute: 'TabOneScreenTwoTabOne',
  tabBarComponent: TabView.TabBarTop,
  tabBarPosition: 'top',
  swipeEnabled: false,
}

export const NavigatorTabOneScreenTwo = TabNavigator(routeConfiguration,tabNavigatorConfiguration)
