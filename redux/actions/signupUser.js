import * as ActionTypes from "../actionTypes";
import { Alert } from "react-native";
import { baseUrl } from "../baseUrl";
import Toast from "react-native-root-toast";
import { toastStyleFailure } from "../../components/toast";

export const signUpUser = (creds) => async (dispatch) => {
  try {
    dispatch(requestSignUp(creds));
    const response = await fetch(baseUrl + "auth/signup", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(creds),
    });
    const json = await response.json();
    // console.log(json);
    if (json.message === "Registration Successful!") {
      dispatch(receiveSignUp(json));
    } else {
      let error = json.message;
      dispatch(signUpError(error));
      Toast.show(error, toastStyleFailure);
    }
  } catch (error) {
    dispatch(signUpError("Service Unavailable, try again later"));
    Toast.show("Service Unavailable, try again later", toastStyleFailure);
  }
};

const requestSignUp = (creds) => {
  return {
    type: ActionTypes.SIGNUP_REQUEST,
    creds,
  };
};

const receiveSignUp = () => {
  return {
    type: ActionTypes.SIGNUP_SUCCESS,
  };
};

const signUpError = (message) => {
  return {
    type: ActionTypes.SIGNUP_FAILURE,
    message,
  };
};
