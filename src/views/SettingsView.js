import { View, Text, Button } from 'react-native'
import React from 'react'

export default function SettingsView(props) {
  const {navigation} = props
  const goToPage = (pageName) => {
    navigation.navigate(pageName)
  }
  return (
    <View>
      <Text>SettingsScreen</Text>
      <Text>SettingsScreen</Text>
      <Text>SettingsScreen</Text>
      <Text>SettingsScreen</Text>
      <Button onPress={() => goToPage("Home")} title='Ir a Home'/>
    </View>
  )
}