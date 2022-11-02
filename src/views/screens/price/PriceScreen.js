import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import MapView, {
  Callout,
  Marker,
  Circle,
  PROVIDER_GOOGLE,
} from "react-native-maps";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Galery from "../galery/GaleryScreen";

const Stack = createNativeStackNavigator();
const image = require("../../../../assets/images/imageGalery/1667169030924.jpg");

let deviceHeight = Dimensions.get("window").height;
let deviceWidth = Dimensions.get("window").width;

function Home() {
  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        mapType="hybrid"
        initialRegion={{
          latitude: 43.98807455261303,
          longitude: 18.185855229173505,
          latitudeDelta: 0.00922,
          longitudeDelta: 0.00421,
        }}
      >
        <Marker
          coordinate={{
            latitude: 43.98807455261303,
            longitude: 18.185855229173505,
          }}
        >
          <Callout>
            <Text>4TACTIC SPORTSKI KLUB</Text>
          </Callout>
        </Marker>
        <Circle
          center={{
            latitude: 43.98807455261303,
            longitude: 18.185855229173505,
          }}
          radius={100}
        />
      </MapView>
      <Text style={styles.termin}>
        Slijedeci termin za trening je u Utorak u 14:00
      </Text>
    </View>
  );
}

function GaleryMap(props) {
  return (
    <ScrollView>
      <Text style={styles.textGalery}>Galerija slika</Text>
      <View style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {Galery.map((image, index) => (
          <TouchableOpacity
            key={index}
            onPress={() =>
              props.navigation.navigate("ShowImage", { url: image.url })
            }
          >
            <Image
              source={image.url}
              style={{
                height: deviceHeight / 3,
                width: deviceWidth / 2 - 6,
                borderRadius: 10,
                margin: 2,
              }}
            />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

function PriceList({ navigation }) {
  return (
    <ImageBackground
      style={styles.containerWrapper}
      // resizeMode="cover"
      source={image}
      opacity={0.6}
    >
      {/* <Image
          style={styles.logo}
          source={require("../../../../assets/images/SKLOGOPNG.png")}
        /> */}
      <Text style={styles.text}>Cijene za clanove i redovne cijene</Text>
      <View>
        <TouchableOpacity
          style={styles.priceButton}
          onPress={() => navigation.navigate("Strelište Žuč")}
        >
          <Text style={styles.info}>Strelište Žuč</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.priceButton}
          onPress={() => navigation.navigate("Strelište Visoko")}
        >
          <Text style={styles.info}>Strelište Visoko</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const Tab = createMaterialBottomTabNavigator();

function PriceScreen() {
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
        name="PriceList"
        component={PriceList}
        options={{
          tabBarLabel: "Cjenovnik",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="file" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="Galery"
        component={GaleryMap}
        options={{
          tabBarLabel: "Galery",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="image" color={color} size={28} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default PriceScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: 600,
    borderWidth: 0.3,
  },
  text: {
    textAlign: "center",
    fontWeight: "bold",
    padding: 20,
    fontSize: 20,
    paddingTop: 490
  },
  termin: {
    textAlign: "center",
    fontWeight: "bold",
    padding: 20,
    fontSize: 20,
    marginTop: 30,
  },
  logo: {
    width: 300,
    height: 300,
    marginBottom: 50,
  },
  priceButton: {
    width: 355,
    borderRadius: 5,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 13,
    backgroundColor: "#dabf66",
    borderWidth: 1,
    opacity: 1,
  },
  info: {
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
  textGalery: {
    textAlign: "center",
    fontWeight: "bold",
    padding: 20,
    fontSize: 20,
  }
});
