'use strict'

// Redux
import { applyMiddleware, combineReducers, createStore } from 'redux'
import {createLogger} from "redux-logger";

// Navigation
import { NavigatorTabOneStack } from './tabOne/navigationConfiguration'
import { NavigatorTabOneScreenTwo } from './tabOne/views/tabOneScreenTwo/navigationConfiguration'
import { NavigatorTabOneScreenTwoTabTwo } from './tabOne/views/tabOneScreenTwo/views/tabOneScreenTwoTabTwo/navigationConfiguration.js'
import { NavigatorTabTwo } from './tabTwo/navigationConfiguration'
import { NavigatorTabThree } from './tabThree/navigationConfiguration'
import { NavigatorTabFour } from './tabFour/navigationConfiguration'

import { TabBar, tabBarReducer } from './tabBar/navigationConfiguration'

import { StackRoot } from './stackRoot/navigationConfiguration'

// Middleware
const middleware = () => {
  return applyMiddleware(createLogger({predicate: (getState, action) => __DEV__}))
}

export default createStore(
  combineReducers({

    stackRoot: (state,action) => StackRoot.router.getStateForAction(action,state),

    tabBar: tabBarReducer,

    tabOneStack: (state,action) => NavigatorTabOneStack.router.getStateForAction(action,state),

    tabOneScreenTwoTabs: (state,action) => NavigatorTabOneScreenTwo.router.getStateForAction(action,state),

    tabOneScreenTwoTabTwo: (state,action) => NavigatorTabOneScreenTwoTabTwo.router.getStateForAction(action,state),

    tabTwo: (state,action) => NavigatorTabTwo.router.getStateForAction(action,state),

    tabThree: (state,action) => NavigatorTabThree.router.getStateForAction(action,state),

    tabFour: (state,action) => NavigatorTabFour.router.getStateForAction(action,state),

  }),
  middleware(),
)
