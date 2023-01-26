import * as ActionTypes from "../actionTypes";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
import { baseUrl } from "../baseUrl";
import Toast from "react-native-root-toast";
import { toastStyleFailure } from "../../components/toast";

export const userData = () => async (dispatch) => {
  try {
    dispatch(userLoading());
    const token = await AsyncStorage.getItem("accessToken");
    const id = await AsyncStorage.getItem("userId");
    const response = await fetch(baseUrl + `user_data/${JSON.parse(id)}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    const json = await response.json();
    if (json.data) {
      dispatch(addUser(json.data));
    } else {
      let error = json.message;
      dispatch(userFailed(error));
      Toast.show(error, toastStyleFailure);
    }
  } catch (error) {
    dispatch(userFailed("Service Unavailable, try again later"));
    Toast.show("Service Unavailable, try again later", toastStyleFailure);
  }
};

const userLoading = () => ({
  type: ActionTypes.USER_LOADING,
});

const addUser = (user) => ({
  type: ActionTypes.ADD_USER,
  payload: user,
});

const userFailed = (errmess) => ({
  type: ActionTypes.USER_FAILED,
  payload: errmess,
});
