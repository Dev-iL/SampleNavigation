'use strict'

import { TabNavigator, TabView } from 'react-navigation'

// Screens
import Day1 from './views/Day1'
import Day2 from './views/Day2'
import Day3 from './views/Day3'
import Day4 from './views/Day4'
import Day5 from './views/Day5'
import Day6 from './views/Day6'

const routeConfiguration = {
  Day1: { screen: Day1 },
  Day2: { screen: Day2 },
  Day3: { screen: Day3 },
  Day4: { screen: Day4 },
  Day5: { screen: Day5 },
  Day6: { screen: Day6 },
}

const tabNavigatorConfiguration = {
  // headerMode: 'none',
  initialRoute: 'Day1',
  tabBarComponent: TabView.TabBarTop,
  tabBarPosition: 'top',
  swipeEnabled: true,
  // backBehavior: 'none',
}

export const NavigatorTabOneScreenTwoTabTwo = TabNavigator(routeConfiguration,tabNavigatorConfiguration)
