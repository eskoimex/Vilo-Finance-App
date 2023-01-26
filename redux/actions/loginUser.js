import * as ActionTypes from "../actionTypes";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
import { baseUrl } from "../baseUrl";
import Toast from 'react-native-root-toast';
import { toastStyleFailure } from "../../components/toast";

export const loginUser = (creds) => async (dispatch) => {
  try {
    dispatch(requestLogin(creds));
    const response = await fetch(baseUrl + "auth/signin", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(creds),
    });
    const json = await response.json();
    if (json.accessToken) {
      AsyncStorage.setItem("accessToken", json.accessToken);
      AsyncStorage.setItem("userId", JSON.stringify(json.id));
      dispatch(receiveLogin(json));
    } else {
      let error = json.message;
      dispatch(loginError(error));
      // Alert.alert(error);
      Toast.show(error, toastStyleFailure)
    }
  } catch (error) {
    dispatch(loginError("Service Unavailable, try again later"));
    Toast.show("Service Unavailable, try again later", toastStyleFailure);
  }
};

const requestLogin = (creds) => {
  return {
    type: ActionTypes.LOGIN_REQUEST,
    creds,
  };
};

const receiveLogin = (response) => {
  return {
    type: ActionTypes.LOGIN_SUCCESS,
    accessToken: response.accessToken,
    userId: response.userId,
  };
};

const loginError = (message) => {
  return {
    type: ActionTypes.LOGIN_FAILURE,
    message,
  };
};
