'use strict'

// Redux
import { applyMiddleware, combineReducers, createStore } from 'redux'
import logger from 'redux-logger'

// Navigation
import { NavigatorTabOne } from './tabOne/navigationConfiguration'
import { NavigatorTabOneScreenTwo } from './tabOne/views/tabOneScreenTwo/navigationConfiguration'
import { NavigatorTabTwo } from './tabTwo/navigationConfiguration'
import { NavigatorTabThree } from './tabThree/navigationConfiguration'
import { NavigatorTabFour } from './tabFour/navigationConfiguration'

import { TabBar, tabBarReducer } from './tabBar/navigationConfiguration'

import { StackRoot } from './stackRoot/navigationConfiguration'

// Middleware
const middleware = () => {
  return applyMiddleware(logger())
}

export default createStore(
  combineReducers({

    stackRoot: (state,action) => StackRoot.router.getStateForAction(action,state),

    tabBar: tabBarReducer,

    tabOne: (state,action) => NavigatorTabOne.router.getStateForAction(action,state),

    tabOneScreenTwo: (state,action) => NavigatorTabOneScreenTwo.router.getStateForAction(action,state),

    tabTwo: (state,action) => NavigatorTabTwo.router.getStateForAction(action,state),

    tabThree: (state,action) => NavigatorTabThree.router.getStateForAction(action,state),

    tabFour: (state,action) => NavigatorTabFour.router.getStateForAction(action,state),

  }),
  middleware(),
)
