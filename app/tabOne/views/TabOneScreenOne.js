'use strict'
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
export default class TabOneScreenOne extends React.Component {

  static navigationOptions = {
    header: {
      visible: false,
      backTitle: null,
      style: {
        backgroundColor: "#00acec"
      },
      tintColor: "#fff"
    }
  };

  render(){
    return(
      <View style={{
        flex:1,
        backgroundColor:'#FFF8DC',
        alignItems:'center',
        justifyContent:'center'
      }}>
        <Text>{ 'Tab One Screen One' }</Text>
        <TouchableOpacity
          onPress={ () => this.props.navigation.navigate('TabOneScreenTwo') }
          style={{
            padding:20,
            borderRadius:20,
            backgroundColor:'#B8860B',
            marginTop:20
          }}>
          <Text>{'Choose something'}</Text>
        </TouchableOpacity>

      </View>
    )
  }
}
