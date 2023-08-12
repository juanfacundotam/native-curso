// import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import LoginForm from "./src/components/LoginForm";
import Saludar from "./src/components/Saludar";

import NavigationStack from "./src/navigation/NavigationStack";
// import NavigationDrawer from "./src/navigation/NavigationDrawer";

export default function App() {
  return (
    <NavigationContainer>
      {/* <View style={styles.container}> */}
        {/* <Text>Open sssss</Text> */}
        {/* <LoginForm />
        <Saludar name="Tomas" apellido="Perez" />
        <Saludar name="Pedro" />
        <Saludar name="Juan" />
        <Saludar name="Javier" /> */}
        <NavigationStack/>
        {/* <StatusBar style="auto" /> */}
      {/* </View> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
    alignItems: "center",
    justifyContent: "center",
  },
});
