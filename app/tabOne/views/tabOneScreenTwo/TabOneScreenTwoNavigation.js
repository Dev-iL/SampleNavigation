'use strict'

// React
import React from 'react'

// Navigation
import { addNavigationHelpers } from 'react-navigation'
import { NavigatorTabOneScreenTwo } from './navigationConfiguration'

// Redux
import { connect } from 'react-redux'

// Icon
import Icon from 'react-native-vector-icons/FontAwesome'

const mapStateToProps = (state) => {
 return {
    navigationState: state.tabOneScreenTwo
  }
}

class TabOneScreenTwoNavigation extends React.Component {
  static navigationOptions = {
    tabBar:{
      label: 'Days',
      // icon: ({ tintColor }) => <Icon size={ 20 } name={ 'cogs' } color={ tintColor }/>
    }
  }

  render(){
    const { navigationState, dispatch } = this.props
    return (
      <NavigatorTabOneScreenTwo
        navigation={
          addNavigationHelpers({
            dispatch: dispatch,
            state: navigationState
          })
        }
      />
    )
  }
}
export default connect(mapStateToProps)(TabOneScreenTwoNavigation)
