import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Image,
  Linking,
  ImageBackground,
  TextInput,
} from "react-native";
import { useEffect, useState } from "react";

export default function HomeScreen({ navigation }) {
  const onPress = async () => {
    const url = "https://onlyfans.com/";
    await Linking.canOpenURL(url);
    Linking.openURL(url);
  };

  const image = require("../../../../assets/images/imageGalery/image12.jpeg");

  return (
    <ImageBackground
      style={styles.container}
      resizeMode="cover"
      source={image}
      opacity={0.4}
    >
      <Image
        style={styles.logo}
        source={require("../../../../assets/images/imageGalery/LogoHD.png")}
      />
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => navigation.navigate("Guest Screen")}
      >
        <Text style={styles.login}>GUEST</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => navigation.navigate("Login", { language: "bosnian" })}
      >
        <Text style={styles.login}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => navigation.navigate("Register", { language: "english" })}
      >
        <Text style={styles.login}>REGISTER</Text>
      </TouchableOpacity>
      <Text style={styles.link} onPress={onPress}>
        www.onlyfans.com
      </Text>
      <StatusBar style="auto" />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },

  loginBtn: {
    width: "85%",
    borderRadius: 5,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 13,
    backgroundColor: "#dabf66",
    borderWidth: 1,
    textAlign: "center",
    fontSize: 20,
  },

  login: {
    fontWeight: "bold",
    fontSize: 20,
  },

  logo: {
    width: 250,
    height: 250,
    marginBottom: 50,
    alignSelf: "center",
    opacity: 0.7,
  },

  link: {
    alignSelf: "center",
    marginTop: 20,
    fontWeight: "bold",
  },

  bgImage: {
    flex: 1,
    justifyContent: "center",
    position: "relative",
    opacity: 0.3,
  },
});
