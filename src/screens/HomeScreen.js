import React from "react";
import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.conteiner}>
      <ImageBackground
        style={styles.conteiner}
        source={require("../../../my-first-app/assets/images/starry_night.jpg")}
      >
        <Text style={styles.title}>Home Screen</Text>
        <TouchableOpacity
          style={styles.touchableStyle}
          onPress={() => navigation.navigate("Modal")}
        >
          <Text style={styles.touchableTxt}>Go to Modal</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.touchableStyle}
          onPress={() => navigation.navigate("PigGame")}
        >
          <Text style={styles.touchableTxt}>Go to Pig Game</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
  },
  title: {
    textAlign: "center",
    fontSize: 30,
    margin: 20,
    color: "white",
  },
  touchableStyle: {
    color: "white",
    padding: 5,
    width: 300,
    height: 140,
    alignSelf: "center",
  },
  touchableTxt: {
    backgroundColor: "lightblue",
    fontSize: 25,
    textAlign: "center",
    borderRadius: 10,
    borderColor: "lightpink",
    borderWidth: 2,
  },
});
