import {
  NativeModules,
  NativeEventEmitter,
  View,
  TouchableOpacity,
  Text,
  Alert,
  Button,
} from "react-native";
import React, { useEffect } from "react";
import styles from "./style";
import TopHeader from "../../components/topHeader";
import { useDispatch, useSelector } from "react-redux";
import { createUserSubAccount } from "../../redux/actions/createUserSubAccout";
import { metamapWebHook } from "../../redux/actions/metamapWebHook";
import { logoutUser } from "../../redux/actions/logoutUser";
import { MetaMapRNSdk } from "react-native-expo-metamap-sdk";
import Constants from "expo-constants";

export default function MetaMap({ navigation }) {
  const auth = useSelector((state) => state.auth);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (Constants.appOwnership === "expo") {verti
      console.log("App running on Expo Go");
    } else {
      const MetaMapVerifyResult = new NativeEventEmitter(
        NativeModules.MetaMapRNSdk
      );
      MetaMapVerifyResult.addListener("verificationSuccess", (data) => {
        dispatch(metamapWebHook(data.verificationId));
        dispatch(logoutUser("Please login again to continue"));
        // dispatch(createUserSubAccount());
      });
      MetaMapVerifyResult.addListener("verificationCanceled", (data) =>
        console.log(data)
      );
    }
  });

  const handleMetaMapClickButton = () => {
    if (Constants.appOwnership === "expo") {
      console.log("App running on Expo Go");
    } else {
      let metadata = {};
      MetaMapRNSdk.showFlow(
        "62c4ad70c72677001c32edf0",
        "62d6b1009246c3001c754dad",
        metadata
      );
    }
  };

  return (
    <>
      <View style={{ backgroundColor: "#B9D9EB" }}>
        <TopHeader
          component={"metamap"}
          goBack={() => navigation.goBack()}
          styles={styles}
          name={"Identity Verification"}
        />
      </View>

      <View style={styles.metamapContainer}>
        <TouchableOpacity
          onPress={() => handleMetaMapClickButton()}
          style={styles.commenceVerification}
        >
          <Text style={[styles.buttonText, { fontSize: 16 }]}>
            {"Commence identity verification"}
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
