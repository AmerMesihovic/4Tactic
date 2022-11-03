import { useState, useRef } from "react";
import {
  StyleSheet,
  View,
  Button,
  Image,
  Text,
  Linking,
  Alert,
  ImageBackground
} from "react-native";
import { SafeAreaView, TextInput } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity } from "react-native";
import { ScrollView } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export default function Register({}) {
  const [email, setEmail] = useState("");
  const [idBroj, setIdBroj] = useState("");
  const [ime, setIme] = useState("");
  const [prezime, setPrezime] = useState("");
  const [brojTel, setBrojTel] = useState("");
  const [password, setPassword] = useState("");

  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const image = require("../../../../assets/images/imageGalery/2.jpg");

  const onPress = async () => {
    const url = "https://www.sk4tactic.ba/";
    await Linking.canOpenURL(url);
    Linking.openURL(url);
  };

  const printAlert = () => {
    Alert.alert(
      "Molim Vas radi ispravne registracije da dodate vasu sliku profila. Hvala"
    );
  };

  const printAlert2 = () => {
    Alert.alert(
      "Molim Vas radi ispravne registracije da dodate vasu uplatnicu. Hvala"
    );
  };
  const printAlert3 = () => {
    Alert.alert(
      "Molim Vas radi ispravne registracije da unesete broj vase licne karte. Hvala!"
    );
  };

  return (
    <ImageBackground style={styles.container} resizeMode='cover' source={image} opacity={0.4}>
      <View>
        <SafeAreaView>
          <ScrollView horizontal={false}>
            <Image
              style={styles.logo}
              source={require('../../../../assets/images/imageGalery/LogoHD.png')}
            />
            <TextInput
              style={styles.input}
              placeholder="Ime"
              onChangeText={(ime) => setIme(ime)}
            />
            <TextInput
              style={styles.input}
              placeholder="Prezime"
              onChangeText={(prezime) => setPrezime(prezime)}
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              onChangeText={(email) => setEmail(email)}
            />
            <TextInput
              style={styles.input}
              onChangeText={(password) => setPassword(password)}
              placeholder="Password"
              secureTextEntry={true}
            />
            <TextInput
              style={styles.input}
              placeholder="Broj Telefona"
              keyboardType="numeric"
              onChangeText={(brojTel) => setBrojTel(brojTel)}
            />
            <View style={styles.containerTwo}>
              <TouchableOpacity style={styles.inputButton}>
                <Text style={styles.login}>Broj licne karte</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={printAlert3}
                style={styles.smallButton}
              >
                <Text style={styles.info}>i</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.containerTwo}>
              <TouchableOpacity style={styles.inputButton}>
                <Text style={styles.login}>SLIKA</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={printAlert} style={styles.smallButton}>
                <Text style={styles.info}>i</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.containerTwo}>
              <TouchableOpacity style={styles.inputButton}>
                <Text style={styles.login}>UPLATNICA</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={printAlert2}
                style={styles.smallButton}
              >
                <Text style={styles.info}>i</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
          <Text style={styles.link} onPress={onPress}>
            wwww.4Tactic.ba
          </Text>
        </SafeAreaView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    alignItems: "center",
  },

  containerTwo: {
    flex: 1,
    flexDirection: "row",
    // justifyContent: 'space-around',
    alignItems: "center",
    marginTop: 13,
  },

  info: {
    alignSelf: "center",
    fontSize: 20,
    alignContent: "center",
    fontWeight: "bold",
    fontSize: 20,
  },

  inputButton: {
    borderRadius: 5,
    backgroundColor: "#dabf66",
    borderWidth: 1,
    justifyContent: "center",
    width: 300,
    height: 50,
  },

  smallButton: {
    borderRadius: 5,
    backgroundColor: "#dabf66",
    height: 50,
    width: 50,
    borderWidth: 1,
    justifyContent: "center",
    marginLeft: 2,
  },

  logo: {
    width: 250,
    height: 250,
    alignSelf: "center",
    marginBottom: 20,
    marginTop: 20,
    opacity: 0.8
  },

  input: {
    width: "100%",
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

  link: {
    fontWeight: "bold",
    marginTop: 20,
    alignSelf: "center",
    marginBottom: 20,
  },

  login: {
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
