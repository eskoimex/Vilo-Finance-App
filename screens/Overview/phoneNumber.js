import {
  View,
  Text,
  TextInput,
  Alert,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import styles from "./style";
import TopHeader from "../../components/topHeader";
import BottomButton from "../../components/bottomButton";
import { baseUrl } from "../../redux/baseUrl";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-root-toast";
import { toastStyleFailure } from "../../components/toast";

export default function PhoneNumber({ navigation, route }) {
  const {
    firstName,
    lastName,
    address,
    postalCode,
    city,
    country,
    employmentStatus,
    natureOfBusiness,
    sourceOfFunds,
    sourceOfCrypto,
  } = route.params;
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [focused, setFocused] = useState(false);

  const handleSubmit = async () => {
    if (phoneNumber.length > 0) {
      setIsLoading(true);
      try {
        const token = await AsyncStorage.getItem("accessToken");
        const response = await fetch(baseUrl + "send_phone_otp", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
          body: JSON.stringify({ phoneNumber }),
        });
        const json = await response.json();
        const parsed = JSON.parse(json.data);
        console.log({ parsed });
        if (parsed.pinId) {
          navigation.navigate("VerifyPhoneNumber", {
            firstName,
            lastName,
            address,
            postalCode,
            city,
            country,
            employmentStatus,
            natureOfBusiness,
            sourceOfFunds,
            sourceOfCrypto,
            phoneNumber,
            pin_id: parsed.pinId,
          });
          setIsLoading(false);
        } else {
          let error = parsed.message;
          Toast.show(error, toastStyleFailure);
          setIsLoading(false);
        }
      } catch (error) {
        Toast.show("Service Unavailable, try again later", toastStyleFailure);
        setIsLoading(false);
      }
    } else {
      Toast.show("Input field is required!", toastStyleFailure);
    }
  };

  return (
    <>
      <SafeAreaView style={{ backgroundColor: "#B9D9EB" }}>
        <TopHeader
          component={"phone"}
          goBack={() => navigation.goBack()}
          styles={styles}
          name={"Personal Information"}
        />

        <ScrollView style={styles.bodyContainer}>
          <View style={styles.marginx2}>
            <Text style={[styles.legalName, { fontFamily: "Ubuntu_700Bold" }]}>
              {"Phone Number"}
            </Text>
            <View style={styles.inputContainer}>
              <Text
                style={[styles.inputText, { fontFamily: "Ubuntu_700Bold" }]}
              >
                {"Mobile Phone Number"}
              </Text>
              <View
                style={[
                  styles.inputInputContainer,
                  focused && { borderColor: "blue" },
                ]}
              >
                <TextInput
                  style={styles.inputInput}
                  placeholder="eg 2348055555555"
                  keyboardType={"phone-pad"}
                  onFocus={() => setFocused(true)}
                  onBlur={() => setFocused(false)}
                  multiline={true}
                  onChangeText={(e) => setPhoneNumber(e)}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>

      <View style={styles.container}>
        <BottomButton
          navigation={handleSubmit}
          styles={styles}
          name={"Continue"}
          isLoading={isLoading}
        />
      </View>
    </>
  );
}
