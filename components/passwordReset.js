import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  Modal,
  Platform,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { Icon } from "react-native-elements";
import Toast from "react-native-root-toast";
import { toastStyleFailure, toastStyleSuccess } from "./toast";

const fontFamily =
  Platform.OS === "android" ? "sans-serif-condensed" : "Avenir Next";

export default function PasswordReset({ setModalVisible, modalVisible }) {
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [focused, setFocused] = useState(false);

  const handleReset = async () => {
    if (password.length > 1) {
      setIsLoading(true);
      try {
        const response = await fetch(baseUrl + "auth/forgot-password", {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const json = await response.json();
        console.log(json);
        Toast.show("Success!", "Password reset link sent to your password", toastStyleSuccess);
        setIsLoading(false);
      } catch (error) {
        Toast.show("Service Unavailable, try again later", toastStyleFailure);
        setIsLoading(false);
      }
    } else {
      Toast.show("Please enter your e-mail address", toastStyleFailure);
    }
  };

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Icon
              name="x"
              type="feather"
              color="#000000"
              size={17}
              reverse
              iconStyle={{ margin: 5 }}
              onPress={() => setModalVisible(!modalVisible)}
            />
            <Text style={styles.textHeader}>{"Reset Password"}</Text>
            <View style={[styles.passwordInputContainer, focused && {borderColor: "blue"}]}>
              <TextInput
                style={styles.passwordInput}
                onChangeText={(password) => setPassword(password)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                placeholder={"New Password"}
                placeholderTextColor="#8C8CA1"
              />
            </View>

            <TouchableOpacity style={styles.button} onPress={handleReset}>
              {isLoading ? (
                <ActivityIndicator size="large" color="#4682B4" />
              ) : (
                <Text style={styles.textStyle}>Reset your password</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // marginTop: 15,
  },
  modalView: {
    width: "70%",
    height: "40%",
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    paddingTop: 35,
    paddingLeft: 35,
    paddingRight: 35,
    paddingBottom: 5,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  passwordInputContainer: {
    flexDirection: "row",
    width: "100%",
    height: 45,
    borderWidth: 0.8,
    borderColor: "gray",
    alignItems: "center",
    paddingHorizontal: 2,
    margin: 10,
  },
  passwordInput: {
    width: "100%",
    height: "100%",
    marginLeft: 10,
  },
  textHeader: {
    marginTop: 10,
    fontSize: 25,
    fontWeight: "bold",
    fontFamily,
  },
  textHeader1: {
    margin: 10,
    fontSize: 15,
    textAlign: "center",
    fontFamily,
  },
  textStyle: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 15,
  },
  button: {
    backgroundColor: "#000000",
    height: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    margin: 10,
  },
});
