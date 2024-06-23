import React from "react";
import { Pressable, View, StyleSheet, Text } from "react-native";

const PayerDetail = (props) => {
  return (
    <View>
      <Text style={styles.playerActive}> Player: {props.player}</Text>
      <View style={styles.accounts}>
        <Text>{`Current score: ${props.currentScore} `}</Text>
        <Text>{`Total score: ${props.totalScore}`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  playerActive: {
    fontWeight: "bold",
    textAlign: "center",
  },
  accounts: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    marginTop: 80,
  },
});

export default PayerDetail;
