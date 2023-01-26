import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import { Icon } from "react-native-elements";
import { styles } from "./style";
import Toast from "react-native-root-toast";
import { toastStyleFailure } from "../../components/toast";

export default function Step2({ setFormStep, token }) {
  const [code, setCode] = useState("");
  const [focused, setFocused] = useState(false);

  const handleReset = async () => {
    if (code.length > 1) {
      if (token === code) {
        setFormStep(2);
      } else {
        Toast.show("Token is incorrect!", toastStyleFailure);
      }
    } else {
      Toast.show("Please enter the token sent to your e-mail address!", toastStyleFailure);
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
          {"Input the code sent to your e-mail address."}
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, focused && {borderColor: 'blue'}]}
            onChangeText={(code) => setCode(code)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            multiline={true}
            placeholder={"Input code"}
            placeholderTextColor="#8C8CA1"
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleReset}>
          <Text style={styles.textStyle}>Submit code</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
