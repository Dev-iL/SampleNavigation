'use strict'

import { StackNavigator } from 'react-navigation'

// Screens
import TabOneScreenOne from './views/TabOneScreenOne'
import TabOneScreenTwoNavigation from './views/tabOneScreenTwo/views/TabOneScreenTwoNavigation'

const routeConfiguration = {
  TabOneScreenOne: { screen: TabOneScreenOne },
  TabOneScreenTwo: { screen: TabOneScreenTwoNavigation },
}
// going to disable the header for now

const stackNavigatorConfiguration = {
  headerMode: 'screen', // <-- should allow you to change the styles of the header
  initialRoute: 'TabOneScreenOne'
}

export const NavigatorTabOneStack = StackNavigator(routeConfiguration,stackNavigatorConfiguration)
