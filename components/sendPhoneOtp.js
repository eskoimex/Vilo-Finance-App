import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { baseUrl } from "../redux/baseUrl";
import Toast from "react-native-root-toast";
import { toastStyleFailure } from "./toast";

export const SendPhoneOtp = async (phoneNumber, setIsLoading, navigation) => {
  if (phoneNumber.length > 0) {
    try {
      setIsLoading(true);
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
      const pin_id = parsed.pinId;
      if (parsed.pinId) {
        // console.log({pinId: parsed.pinId})
        navigation.navigate("VerifyPhoneNumber", { pin_id });
      } else {
        let error = parsed.message;
        Toast.show(error, toastStyleFailure);
      }
    } catch (error) {
      Toast.show("Service Unavailable, try again later", toastStyleFailure);
    } finally {
      setIsLoading(false);
    }
  } else {
    Toast.show("Input field is required!", toastStyleFailure);
  }
};
