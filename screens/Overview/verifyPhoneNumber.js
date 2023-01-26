import {
  View,
  Text,
  TextInput,
  Alert,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./style";
import TopHeader from "../../components/topHeader";
import BottomButton from "../../components/bottomButton";
import { useSelector, useDispatch } from "react-redux";
import { createUserSubAccount } from "../../redux/actions/createUserSubAccout";
import { completeVerification } from "../../redux/actions/completeVerification";
import { baseUrl } from "../../redux/baseUrl";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SendPhoneOtp } from "../../components/sendPhoneOtp";
import Toast from "react-native-root-toast";
import { toastStyleFailure } from "../../components/toast";

export default function VerifyPhoneNumber({ navigation, route }) {
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
    phoneNumber,
    pin_id,
  } = route.params;
  const [otp, setOtp] = useState("");
  const auth = useSelector((state) => state.auth);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    // if (user?.user[0]?.isPhoneVerified) {
    if (auth.isVerificationComplete) {
      navigation.navigate("Identity");
    }
  }, [auth.isVerificationComplete]);

  const handleSubmit = async () => {
    if (otp.length > 0) {
      setIsLoading(true);
      try {
        const token = await AsyncStorage.getItem("accessToken");
        const response = await fetch(baseUrl + "verify_phone_otp", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
          body: JSON.stringify({ pin_id, pin: otp }),
        });
        const json = await response.json();
        const parsed = JSON.parse(json.data);
        if (parsed.verified === true) {
          dispatch(
            completeVerification({
              firstName,
              lastName,
              address,
              postalCode,
              city,
              country,
              employmentStatus,
              natureOfBusiness,
              soureOfFunds: sourceOfFunds,
              soureOfCrypto: sourceOfCrypto,
              phoneNumber,
            })
          );
          setIsLoading(false);
        } else {
          let error = "Failed to verify token";
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
          component={"verify"}
          goBack={() => navigation.goBack()}
          styles={styles}
          name={"Personal Information"}
        />

        <ScrollView style={styles.bodyContainer}>
          <View style={styles.marginx2}>
            <Text style={[styles.legalName, { fontFamily: "Ubuntu_700Bold" }]}>
              {"Verify Phone Number"}
            </Text>
            <Text style={[styles.subText, { fontFamily: "Ubuntu_400Regular" }]}>
              {"Enter verification code sent to phone\nnumber"}
            </Text>
            <View style={styles.inputContainer}>
              <Text
                style={[styles.inputText, { fontFamily: "Ubuntu_700Bold" }]}
              >
                {"Verify Phone Number"}
              </Text>
              <View
                style={[
                  styles.inputInputContainer,
                  focused && { borderColor: "blue" },
                ]}
              >
                <TextInput
                  style={styles.inputInput}
                  placeholder="Six-digit code"
                  onFocus={() => setFocused(true)}
                  onBlur={() => setFocused(false)}
                  keyboardType="numeric"
                  onChangeText={(e) => setOtp(e)}
                />
              </View>
              <TouchableOpacity
                onPress={() =>
                  SendPhoneOtp(phoneNumber, setIsLoading, navigation)
                }
              >
                <Text style={[styles.resend, { fontFamily: "Ubuntu_700Bold" }]}>
                  Resend code
                </Text>
              </TouchableOpacity>
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
