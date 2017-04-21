'use strict';
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
export default class TabFourScreenOne extends React.Component {
  render(){
    return(
      <View style={{
        flex:1,
        backgroundColor:'yellow',
        alignItems:'center',
        justifyContent:'center'
      }}>
        <Text>{ 'Tab Four Screen One' }</Text>
        <TouchableOpacity
          onPress={ () => this.props.navigation.navigate('StackRootModal') }
          style={{
            padding:20,
            borderRadius:20,
            backgroundColor:'blue',
            marginTop:20
          }}>
          <Text>{'Open Modal'}</Text>
        </TouchableOpacity>

      </View>
    )
  }
}
