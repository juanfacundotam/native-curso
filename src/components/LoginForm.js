import { StyleSheet, View, Text, TextInput, Button } from "react-native";
import React, { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const emailInputChangeHandler = (inputValue) => {
    console.log("Email changed:", inputValue);
    setEmail(inputValue);
  };

  const buttonPressHandler = () => {
    console.log("Button pressed");
  };

  return (
    <View>
      <Text>LoginForm</Text>
      <TextInput
        placeholder="Email"
        onChangeText={emailInputChangeHandler} // Use onChangeText instead of onChange
        value={email} // Set the value of the input to the email state
      />
      <TextInput
        placeholder="Pass"
        onChangeText={(passValue) => setPass(passValue)}
        value={pass}
      />
      <Button title="Enviar" onPress={buttonPressHandler} />
    </View>
  );
}