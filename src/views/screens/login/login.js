import { StatusBar } from "expo-status-bar";
import React from "react";
import { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  Linking,
  ImageBackground,
  Alert,
} from "react-native";
import Eye from "../../../../assets/icons/Eye.png";
import EyeActive from "../../../../assets/icons/EyeActive.png";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TextInput from "../../../components/TextInput";
import axios from "axios";

const login = async (username, password) => {
  try {
    const response = await axios.post("https://your-api-endpoint.com/login", {
      username,
      password,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

const Stack = createNativeStackNavigator();

const UselessTextInput = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [seePassword, setSeePassword] = useState(true);
  const [checkValidEmail, setCheckValidEmail] = useState(false);
  const [username, setUserName] = useState("");

  const onPress = async () => {
    const url = "https://www.sk4tactic.ba/";
    await Linking.canOpenURL(url);
    Linking.openURL(url);
  };

  const image = require("../../../../assets/images/imageGalery/Background.jpg");

  const handleCheckEmail = (text) => {
    let re = /\S+@\S+\.\S+/;
    let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    setEmail(text);
    if (re.test(text) || regex.test(text)) {
      setCheckValidEmail(false);
    } else {
      setCheckValidEmail(true);
    }
  };

  const checkPasswordValidity = (value) => {
    const isNonWhiteSpace = /^\S*$/;
    if (!isNonWhiteSpace.test(value)) {
      return "Password must not contain Whitespaces.";
    }

    const isContainsUppercase = /^(?=.*[A-Z]).*$/;
    if (!isContainsUppercase.test(value)) {
      return "Password must have at least one Uppercase Character.";
    }

    const isContainsLowercase = /^(?=.*[a-z]).*$/;
    if (!isContainsLowercase.test(value)) {
      return "Password must have at least one Lowercase Character.";
    }

    const isContainsNumber = /^(?=.*[0-9]).*$/;
    if (!isContainsNumber.test(value)) {
      return "Password must contain at least one Digit.";
    }

    const isValidLength = /^.{8,16}$/;
    if (!isValidLength.test(value)) {
      return "Password must be 8-16 Characters Long.";
    }

    return null;
  };

  const handleLogin = async () => {
    try {
      const data = await login(username, password);
      Alert.alert("Sucess", "You have successfully logged in", [
        { text: "OK", onPress: () => navigation.navigate("Member") },
      ]);
    } catch (error) {
      Alert.alert("Error", "There was an error logging in. Please try again.");
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        source={image}
        opacity={0.5}
        style={{ width: "100%", height: "100%" }}
      >
        <Image
          style={styles.logo}
          source={require("../../../../assets/images/imageGalery/LogoHD.png")}
        />
        <TextInput
          label="Username"
          returnKeyType="next"
          value={username}
          onChangeText={(text) => setUserName(text)}
        />
        <TextInput
          label="Password"
          returnKeyType="next"
          value={password}
          secureTextEntry={seePassword}
          onChangeText={(text) => setPassword(text)}
        />
        {/* <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={(text) => handleCheckEmail(text)}
        />
        {checkValidEmail ? (
          <Text style={styles.textFailed}>Invalid Email</Text>
        ) : (
          <Text style={styles.textFailed}></Text>
        )}
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          secureTextEntry={seePassword}
          onChangeText={(text) => setPassword(text)}
        /> */}
        <TouchableOpacity
          style={styles.wrapperIcon}
          onPress={() => setSeePassword(!seePassword)}
        >
          <Image source={seePassword ? Eye : EyeActive} style={styles.icon} />
        </TouchableOpacity>
        {email == "" || password == "" || checkValidEmail == true ? (
          <TouchableOpacity
            disabled
            style={styles.loginBtn}
            onPress={handleLogin}
          >
            <Text style={styles.login}>LOGIN</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.loginBtn}
            onPress={() => navigation.navigate("Member")}
          >
            <Text style={styles.login}>LOGIN</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity>
          <Text style={styles.forgot_button}>Forgot Password?</Text>
        </TouchableOpacity>
        <Text style={styles.link} onPress={onPress}>
          wwww.4Tactic.ba
        </Text>
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ffff",
    backgroundColor: "repeat",
  },
  logo: {
    width: 250,
    height: 250,
    marginTop: 100,
    marginBottom: 80,
    alignSelf: "center",
    opacity: 0.7,
  },
  input: {
    width: "85%",
    borderRadius: 5,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 5,
    backgroundColor: "#dabf66",
    borderWidth: 1,
    textAlign: "center",
    fontSize: 20,
  },
  loginBtn: {
    width: "85%",
    borderRadius: 5,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 20,
    backgroundColor: "#dabf66",
    borderWidth: 1,
  },
  login: {
    fontSize: 20,
    fontWeight: "bold",
  },
  forgot_button: {
    fontSize: 17,
    alignSelf: "center",
    paddingTop: 20,
    fontWeight: "bold",
  },
  link: {
    alignSelf: "center",
    marginTop: 20,
    fontWeight: "bold",
  },
  textFailed: {
    alignSelf: "center",
    color: "red",
    marginTop: 2,
  },
  icon: {
    width: 30,
    height: 24,
  },
  wrapperIcon: {
    position: "absolute",
    right: 40,
    padding: 10,
    bottom: 215,
  },
});

export default UselessTextInput;
