import { Text, View } from 'react-native'
import React, { Component } from 'react'

export default class NavigationDrawer extends Component {
  render() {
    return (
      <View>
        <Text>NavigationDrawer</Text>
      </View>
    )
  }
}

// import { View, Text } from 'react-native'
// import React from 'react'
// import { createDrawerNavigator } from '@react-navigation/drawer'
// import HomeView from '../views/HomeView'
// import SettingsView from '../views/SettingsView'

// const Drawer = createDrawerNavigator() 

// export default function NavigationStack() {
//   return (
//     <Drawer.Navigator initialRouteName='Settings'>
//       <Drawer.Screen name="Home" component={HomeView}/>
//       <Drawer.Screen name="Settings" component={SettingsView}/>
//     </Drawer.Navigator>
//   )
// }