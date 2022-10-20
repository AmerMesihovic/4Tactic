import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createMaterialBottomTabNavigator();
const image = require("../../../../assets/images/imageGalery/image7.png");

function Home() {
  return (
    <ImageBackground
      style={styles.imageBcg}
      resizeMode="cover"
      source={image}
      opacity={0.4}
    >
      <View style={styles.container}>
        <Text style={styles.text}>Proba</Text>
      </View>
    </ImageBackground>
  );
}

function Proba() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Proba</Text>
    </View>
  );
}

function Proba2() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Proba</Text>
    </View>
  );
}

function Member(navigation) {
  return (
    <Tab.Navigator
      style={styles.tabNavigator}
      initialRouteName="Feed"
      activeColor="#dabf66"
      barStyle={{ backgroundColor: "#000000" }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="Proba"
        component={Proba}
        options={{
          tabBarLabel: "Cjenovnik",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="file" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="Proba2"
        component={Proba2}
        options={{
          tabBarLabel: "Postavke",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="image" color={color} size={28} />
          ),
        }}
      />
      {/* <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
              tabBarLabel: "Profil",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="account" color={color} size={28} />
              ),
            }}
          /> */}
    </Tab.Navigator>
  );
}

export default Member;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
  },
  imageBcg: {
    flex: 1,
  },
});
