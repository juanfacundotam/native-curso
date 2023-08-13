import { View, Text, Button } from 'react-native'
import React from 'react'

export default function HomeView(props) {
  const {navigation} = props;

  const goToSettings = () => {
    navigation.navigate("Settings")
  }
  return (
    <View>
      <Text>HomeView</Text>
      <Text>HomeView</Text>
      <Text>HomeView</Text>
      <Text>HomeView</Text>
      <Button onPress={goToSettings} title='Ir a Ajustes'/>
    </View>
  )
}