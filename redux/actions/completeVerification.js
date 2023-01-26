import * as ActionTypes from "../actionTypes";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
import { baseUrl } from "../baseUrl";
import { userData } from "./userData";
import Toast from "react-native-root-toast";
import { toastStyleFailure } from "../../components/toast";

export const completeVerification = (creds) => async (dispatch) => {
  try {
    dispatch(requestVerification(creds));
    const token = await AsyncStorage.getItem("accessToken");
    const response = await fetch(baseUrl + "personal_info", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(creds),
    });
    const json = await response.json();
    // console.log(json);
    if (json.message === "User Personal Information Saved.") {
      dispatch(receiveVerification());
      dispatch(userData());
    } else {
      let error = json.message;
      dispatch(VerificationError(error));
      Toast.show(error, toastStyleFailure);
    }
  } catch (error) {
    dispatch(VerificationError("Service Unavailable, try again later"));
    Toast.show("Service Unavailable, try again later", toastStyleFailure);
  }
};

const requestVerification = (creds) => {
  return {
    type: ActionTypes.ONBOARDING_REQUEST,
    creds,
  };
};

const receiveVerification = () => {
  return {
    type: ActionTypes.ONBOARDING_SUCCESS,
  };
};

const VerificationError = (message) => {
  return {
    type: ActionTypes.ONBOARDING_FAILURE,
    message,
  };
};
