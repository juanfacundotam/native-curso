import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeView from '../views/HomeView'
import SettingsView from '../views/SettingsView'

const Stack = createStackNavigator();

export default function NavigationStack() {
  return (
    <Stack.Navigator initialRouteName='Settings'>
      <Stack.Screen name="Home" component={HomeView}/>
      <Stack.Screen name="Settings" component={SettingsView}/>
    </Stack.Navigator>
  )
}