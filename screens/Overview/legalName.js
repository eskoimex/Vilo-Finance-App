import {
  View,
  Text,
  TextInput,
  Alert,
  Image,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import styles from "./style";
import TopHeader from "../../components/topHeader";
import BottomButton from "../../components/bottomButton";
import Toast from "react-native-root-toast";
import { toastStyleFailure } from "../../components/toast";

export default function LegalName({ navigation }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [focused, setFocused] = useState(false);
  const [lastnameFocused, setLastnameFocused] = useState(false);

  const handleSubmit = () => {
    if (firstName.length > 0 && lastName.length > 0) {
      navigation.navigate("Residential", { firstName, lastName });
    } else {
      Toast.show("Credentials cannot be empty", toastStyleFailure);
    }
  };
  return (
    <>
      <SafeAreaView style={{ backgroundColor: "#B9D9EB" }}>
        <TopHeader
          component={"name"}
          goBack={() => navigation.goBack()}
          styles={styles}
          name={"Personal Information"}
        />

        <View style={styles.bodyContainer}>
          <View style={styles.marginx2}>
            <Text style={[styles.legalName, { fontFamily: "Ubuntu_700Bold" }]}>
              {"Legal Name"}
            </Text>
            <View style={styles.inputContainer}>
              <Text style={[styles.inputText, {fontFamily: "Ubuntu_700Bold"}]}>{"First Name"}</Text>
              <View style={[styles.inputInputContainer, focused && {borderColor: "blue"}]}>
                <TextInput
                  style={styles.inputInput}
                  placeholder={"Enter your first Name"}
                  onFocus={() => setFocused(true)}
                  onBlur={() => setFocused(false)}
                  multiline={true}
                  onChangeText={(e) => setFirstName(e)}
                />
              </View>
            </View>
            <View style={styles.inputContainer}>
              <Text
                style={[styles.inputText, { fontFamily: "Ubuntu_700Bold" }]}
              >
                {"Last Name"}
              </Text>
              <View style={[styles.inputInputContainer, lastnameFocused && {borderColor: "blue"}]}>
                <TextInput
                  style={styles.inputInput}
                  placeholder={"Enter your last Name"}
                  onFocus={() => setLastnameFocused(true)}
                  onBlur={() => setLastnameFocused(false)}
                  multiline={true}
                  onChangeText={(e) => setLastName(e)}
                />
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>

      <View style={styles.container}>
        <BottomButton
          navigation={handleSubmit}
          styles={styles}
          name={"Continue"}
        />
      </View>
    </>
  );
}
