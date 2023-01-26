import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
  ActivityIndicator,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import { Icon } from "react-native-elements";
import { styles } from "./style";
import { baseUrl } from "../../redux/baseUrl";
import Toast from "react-native-root-toast";
import { toastStyleFailure } from "../../components/toast";

export default function Step1({ setFormStep, setToken }) {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [focused, setFocused] = useState(false);

  const handleReset = async () => {
    if (email.length > 1) {
      setIsLoading(true);
      try {
        const response = await fetch(baseUrl + "auth/forgot-password", {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        });
        const json = await response.json();
        if (json.message === "Password Reset Token Sent!") {
          setToken(json.data);
          setFormStep(1);
          setIsLoading(false);
        } else {
          Toast.show(json.message, toastStyleFailure);
          setIsLoading(false);
        }
      } catch (error) {
        Toast.show("Service Unavailable, try again later", toastStyleFailure);
        setIsLoading(false);
      }
    } else {
      Toast.show("Please enter your e-mail address", toastStyleFailure);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.centeredView}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/VILO-NEW-LOGO-01.png")}
            style={{ width: 57, height: 30 }}
          />
        </View>
        <Text style={styles.textHeader}>{"Reset password"}</Text>
        <Text style={styles.textHeader1}>
          {"Please provide your e-mail address to request a reset token."}
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, focused && {borderColor: 'blue'}]}
            onChangeText={(email) => setEmail(email)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            multiline={true}
            placeholder={"Your e-mail address"}
            placeholderTextColor="#8C8CA1"
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleReset}>
          {isLoading ? (
            <ActivityIndicator size="large" color="#4682B4" />
          ) : (
            <Text style={styles.textStyle}>Request reset token</Text>
          )}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
