import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet } from "react-native";
import Login from "./src/views/screens/login/login"
import Register from "./src/views/screens/register/register";
import HomeScreen from "./src/views/screens/guest/GuestScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PriceScreen from "./src/views/screens/price/PriceScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ShowImage from "./src/components/ShowImage";
import Member from "./src/views/screens/member/Memberscreen";
import ArchersVisoko from "./src/views/screens/archersScreen/archersVisoko/ArchersVisoko";
import ArchersZuc from "./src/views/screens/archersScreen/archersZuc/ArchersZuc";

export default function App() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer style={styles.containerWrapper}>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Guest Screen" component={PriceScreen} />
        <Stack.Screen name="Strelište Žuč" component={ArchersZuc} />
        <Stack.Screen name="Strelište Visoko" component={ArchersVisoko} />
        <Stack.Screen
          name="ShowImage"
          component={ShowImage}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Member" component={Member} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  containerWrapper: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
