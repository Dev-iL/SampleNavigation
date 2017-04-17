'use strict'

import { StackNavigator, TabNavigator, TabView } from 'react-navigation'

// Screens
import Day1 from './tabs/Day1'
import Day2 from './tabs/Day2'
import Day3 from './tabs/Day3'
import Day4 from './tabs/Day4'
import Day5 from './tabs/Day5'
import Day6 from './tabs/Day6'

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
  // backBehavior: 'none',
}

export const NavigatorTabOneScreenTwo = TabNavigator(routeConfiguration,tabNavigatorConfiguration)
