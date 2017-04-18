'use strict'

// React
import React from 'react'

// Navigation
import { addNavigationHelpers } from 'react-navigation'
import { NavigatorTabOneScreenTwoTabTwo } from '../navigationConfiguration'

// Redux
import { connect } from 'react-redux'

// Icon
import Icon from 'react-native-vector-icons/FontAwesome'

const mapStateToProps = (state) => {
 return {
    navigationState: state.tabOneScreenTwoTabTwo
  }
}

class TabOneScreenTwoTabTwoNavigation extends React.Component {
  static navigationOptions = {
    tabBar:{
      label: 'Days',
      // icon: ({ tintColor }) => <Icon size={ 20 } name={ 'cogs' } color={ tintColor }/>
    }
  }

  render(){
    const { navigationState, dispatch } = this.props
    return (
      <NavigatorTabOneScreenTwoTabTwo
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
export default connect(mapStateToProps)(TabOneScreenTwoTabTwoNavigation)
