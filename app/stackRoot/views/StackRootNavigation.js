'use strict'

// React
import React from 'react'

// Navigation
import { addNavigationHelpers } from 'react-navigation'
import { StackRoot } from '../navigationConfiguration'

//Redux
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
 return {
  navigationState: state.stackRoot,
  }
}

class StackRootNavigation extends React.Component {

  render(){
    const { dispatch, navigationState } = this.props
    return (
      <StackRoot
        navigation={
          addNavigationHelpers({
            dispatch: dispatch,
            state: navigationState,
          })
        }
      />
    )
  }
}

export default connect(mapStateToProps)(StackRootNavigation)
