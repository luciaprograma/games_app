import React, { act, useReducer, useState } from "react";
import { Text, StyleSheet, View, Pressable, Dimensions } from "react-native";
//import LinearGradient from "react-native-linear-gradient";
import { LinearGradient } from "expo-linear-gradient";
import PayerDetail from "../components/PigPlayer";

let player = 0;
let points = [0, 0];
// Windows Dimensions
const windowHeight = Dimensions.get("screen").height;
const windowWidth = Dimensions.get("screen").width;

const PigGame = () => {
  let [dice, setDice] = useState("?");
  const [current, setCurrent] = useState([]);
  const [score, setScore] = useState([0, 0]);

  // Rollind dice & add current score functionality
  const rolDice = function (ActivePlayer) {
    dice = Math.trunc(Math.random() * 5) + 1;

    //Dice != 1
    if (dice != 1) {
      setDice(dice);
      points[ActivePlayer] += dice;
      current[ActivePlayer] = points[ActivePlayer];
      ActivePlayer === 0
        ? setCurrent([current[0], 0])
        : setCurrent([0, current[1]]);
    } else {
      setDice(dice);
      ActivePlayer = 1;
    }
    //Dice ===1
  };

  // Add dice to current score

  //Total score functionalityr
  const holdScore = function (ActivePlayer) {
    //setScore(score[player]);
  };

  return (
    <View style={{ backgroundColor: "#F9E79F", flex: 1 }}>
      <View style={styles.headerView}>
        <Text style={styles.title}> 🐷 PiG GaMe 🐷</Text>
        <Pressable style={styles.btnAgain}>
          <Text>Play Again</Text>
        </Pressable>
      </View>
      <LinearGradient
        // Background Linear Gradient
        colors={["darkorange", "transparent"]}
        locations={[1, 1]}
        style={{ flex: 1 }}
      >
        <PayerDetail player=" 1 " currentScore={current[0]} totalScore="0" />
      </LinearGradient>
      <LinearGradient
        colors={["grey", "transparent"]}
        locations={[1, 1]}
        style={{ flex: 1 }}
      >
        <PayerDetail player=" 2 " currentScore={current[1]} totalScore="0" />
      </LinearGradient>
      <View style={styles.btnView}>
        <Pressable
          style={styles.btnHold}
          onPress={() => {
            if (player === 0) {
            }
          }}
        >
          <Text style={styles.btnText}>HOLD</Text>
        </Pressable>
        <Text style={styles.dice}>{dice}</Text>
        <Pressable
          style={styles.btnDice}
          onPress={() => {
            rolDice(player);
          }}
        >
          <Text style={styles.btnText}>ROLL DICE </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerView: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 25,
    color: "#E8A06E",
  },
  btnAgain: {
    borderWidth: 3,
    width: windowWidth / 3,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },

  btnView: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    backgroundColor: "white",
  },

  btnHold: {
    borderWidth: 5,
    borderColor: "pink",
    justifyContent: "center",

    flex: 3,
    height: windowHeight / 12,
    width: windowWidth / 3,
  },
  dice: {
    borderWidth: 5,
    borderColor: "grey",
    backgroundColor: "pink",
    textAlign: "center",
    textAlignVertical: "center",
    height: windowHeight / 12,
    width: windowWidth / 3,
    flex: 3,
  },

  btnDice: {
    height: windowHeight / 12,
    width: windowWidth / 3,
    borderWidth: 5,
    borderColor: "pink",
    justifyContent: "center",
    flex: 3,
  },

  btnText: {
    fontSize: 20,
    font: "bold",
    textAlign: "center",
  },
});

export default PigGame;
