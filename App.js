import React, { Component } from 'react'
import { View, Text, Button, StyleSheet, Image } from 'react-native'
import { NavigationContainer } from "@react-navigation/native"

import { createNativeStackNavigator } from "@react-navigation/native-stack"
import homeScreen from './pages/homeScreen'
import deltaScreen from './pages/deltaScreen'
import wyeScreen from './pages/wyeScreen'

export default class app extends Component {
  constructor(props) {
    super(props)

  }
  render() {

    const Stack = createNativeStackNavigator();


    return (
      <NavigationContainer>
        <View style={this.styles.part}> </View>
        <Stack.Navigator>

          <Stack.Screen
            name='homeScreen'
            component={homeScreen}

          />
          <Stack.Screen
            name='deltaScreen'
            component={deltaScreen}

          />
          <Stack.Screen
            name="wyeScreen"
            component={wyeScreen} />


        </Stack.Navigator>


      </NavigationContainer>


    );
  }
  styles = StyleSheet.create({

    part: {
      alignItems: "center",
      flexDirection: 'row',
      justifyContent: 'center',
      margin: 30

    }
  });
}


