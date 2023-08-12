import { View, Text } from 'react-native'
import React from 'react'
import PropTypes from "prop-types";

export default function Saludar(props) {
    const {name, apellido} = props;

  return (
    <View>
      <Text>Hola {name} {apellido}</Text>
    </View>
  )
}


Saludar.defaultProps = {
    name: "Ernesto",
    apellido: "Gomez",
}

Saludar.propTypes = {
    name: PropTypes.string.isRequired,
    apellido: PropTypes.string,
}