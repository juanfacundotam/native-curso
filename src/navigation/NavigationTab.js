import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeView from '../views/HomeView'
import SettingsView from '../views/SettingsView'

const Tab = createBottomTabNavigator();

export default function NavigationTab() {
  return (
    <Tab.Navigator initialRouteName='Home'>
      <Tab.Screen name="Home" component={HomeView}/>
      <Tab.Screen name="Settings" component={SettingsView}/>
    </Tab.Navigator>
  )
}