import * as ActionTypes from "../actionTypes";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { baseUrl } from "../baseUrl";

export const metamapWebHook = (id) => async () => {
  // metamap_verification_webhook
  try {
    const token = await AsyncStorage.getItem("accessToken");
    const response = await fetch(baseUrl + "user_doc_verification_response", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({ id }),
    });
    const json = await response.json();
    console.log(json);
    dispatch(receiveMetaMapVerification());
  } catch (error) {
    console.log({ error });
  }
};

const receiveMetaMapVerification = () => {
  return {
    type: ActionTypes.METAMAP_SUCCESS,
  };
};
