import * as ActionTypes from "../actionTypes";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
import Toast from "react-native-root-toast";
import { toastStyleSuccess } from "../../components/toast";

export const logoutUser = (mesage) => (dispatch) => {
  dispatch(requestLogout());
  Toast.show(mesage, toastStyleSuccess);
  AsyncStorage.removeItem("accessToken");

  dispatch(receiveLogout());
};

const requestLogout = () => {
  return {
    type: ActionTypes.LOGOUT_REQUEST,
  };
};

const receiveLogout = () => {
  return {
    type: ActionTypes.LOGOUT_SUCCESS,
  };
};
