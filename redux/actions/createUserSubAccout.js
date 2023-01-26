import * as ActionTypes from "../actionTypes";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
import { baseUrl } from "../baseUrl";
import { userData } from "./userData";

export const createUserSubAccount = () => async (dispatch) => {
  try {
    const token = await AsyncStorage.getItem("accessToken");
    const id = await AsyncStorage.getItem("userId");
    const response = await fetch(
      baseUrl +
        `create_sub_acount?name=user-wallet&externalId=${JSON.parse(
          id
        )}&metaData=""`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    );
    const json = await response.json();
    // console.log(json);
    if (json.status === "success") {
      AsyncStorage.setItem("subAccountId", json.data.uid);
      dispatch(receiveMetaMapVerification());
    } else {
      let error = json.message;
      console.log(error);
    }
  } catch (error) {
    dispatch(MetaMapVerificationError(error));
  }
};

const receiveMetaMapVerification = () => {
  return {
    type: ActionTypes.METAMAP_SUCCESS,
  };
};

const MetaMapVerificationError = (message) => {
  return {
    type: ActionTypes.METAMAP_FAILURE,
    message,
  };
};
