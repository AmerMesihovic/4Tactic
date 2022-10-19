import { Center } from "native-base";
import React from "react";
import { View, ImageBackground, Dimensions, StyleSheet } from "react-native";

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

const ShowImage = (props) => {
  return (
    <View>
      <ImageBackground
         style={styles.container}
        source={props.route.params.url}
      />
    </View>
  );
};

export default ShowImage;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: deviceHeight,
    width: deviceWidth,
  }
})
