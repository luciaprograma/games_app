import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  Modal,
  TouchableOpacity,
  Alert,
  ImageBackground,
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const ModalScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const modalTitle = "DOM HTML";
  const modalText =
    "The HTML DOM is an Object Model for HTML. It defines: HTML elements as objects Properties for all HTML elements Methods for all HTML elements Events for all HTML elements";

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.container}
        source={require("../../../my-first-app/assets/images/starry_night_2.jpg")}
      >
        <Text style={styles.title}> This is the modal Window </Text>
        <GestureHandlerRootView>
          <TouchableOpacity
            style={styles.btnShow}
            onPress={() => setModalVisible(true)}
          >
            <Text
              style={{
                color: "grey",
                textAlign: "center",
                alignContent: "center",
                fontSize: 20,
              }}
            >
              SHOW MODAL
            </Text>
          </TouchableOpacity>

          <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.viewModal}>
              <Text style={styles.titleModal}>{modalTitle}</Text>
              <Text style={styles.textModal}>{modalText}</Text>
              <TouchableOpacity
                style={styles.btnHide}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text
                  style={{
                    color: "grey",
                    textAlign: "center",
                    alignContent: "center",
                    fontSize: 20,
                  }}
                >
                  HIDE MODAL
                </Text>
              </TouchableOpacity>
            </View>
          </Modal>
        </GestureHandlerRootView>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(249, 231, 159 )",
    flex: 1,
  },
  btnShow: {
    margin: 15,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "black",
    alignSelf: "center",
    backgroundColor: "white",
  },
  btnHide: {
    margin: 15,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "black",
    alignSelf: "center",
    backgroundColor: "white",
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    color: "lightpink",
  },
  textModal: {
    fontSize: 10,
    color: "lightblue",
  },
  titleModal: {
    fontSize: 15,
    color: "lightpink",
  },
  viewModal: {
    alignItems: "center",
    marginTop: 200,
    backgroundColor: "rgba(52, 52, 52, 0.8)",
    borderRadius: 20,
    padding: 80,
    alignSelf: "center",
    display: "flex",
    
  },
});

export default ModalScreen;
