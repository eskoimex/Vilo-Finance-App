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
import { toastStyleFailure, toastStyleSuccess } from "../../components/toast";

export default function Step3({ navigation, token }) {
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [focused, setFocused] = useState(false);

  const handleReset = async () => {
    if (password.length > 1) {
      setIsLoading(true);
      try {
        const response = await fetch(baseUrl + `auth/reset-password/${token}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ password }),
        });
        const json = await response.json();
        console.log({json});
        if (json.message === "Password Reset Successful!") {
            Toast.show("Success!", "Password reset successfully", toastStyleSuccess);
            setIsLoading(false);
            navigation.navigate("SignIn");
        } else {
          Toast.show(json.message);
          setIsLoading(false);
        }
      } catch (error) {
        Toast.show("Service Unavailable, try again later", toastStyleFailure);
        setIsLoading(false);
      }
    } else {
      Toast.show("Please input your password", toastStyleFailure);
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
          {"Successfully verified. Input a new password"}
        </Text>
        <View style={[styles.emailInputContainer, focused && {borderColor: 'blue'}]}>
          <Icon
            name="lock"
            type="feather"
            color="#8C8CA1"
            size={15}
            iconStyle={{ margin: 5 }}
          />
          <TextInput
            style={styles.passwordInput}
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            placeholder={"New password"}
            placeholderTextColor="#8C8CA1"
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleReset}>
          {isLoading ? (
            <ActivityIndicator size="large" color="#4682B4" />
          ) : (
            <Text style={styles.textStyle}>Reset password</Text>
          )}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
