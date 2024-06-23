import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ModalScreen from "./src/screens/ModalScreen";
import PigGame from "./src/screens/PigGame";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Modal" component={ModalScreen} />
        <Stack.Screen name="PigGame" component={PigGame} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
