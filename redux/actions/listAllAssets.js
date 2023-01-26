import * as ActionTypes from "../actionTypes";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
import { baseUrl } from "../baseUrl";
import { userData } from "./userData";

export const listAllAssets = () => async (dispatch) => {
  try {
    dispatch(assetsLoading());
    const token = await AsyncStorage.getItem("accessToken");
    const response = await fetch(baseUrl + "list_all_assets_in_wallet", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    const json = await response.json();
    if (json.status === "success") {
      dispatch(addAssets(json.data));
    } else {
      let error = json.message;
      dispatch(assetsFailed(error));
    }
  } catch (error) {
    dispatch(assetsFailed(error));
  }
};

const assetsLoading = () => ({
  type: ActionTypes.ASSETS_LOADING,
});

const assetsFailed = (errmess) => ({
  type: ActionTypes.ASSETS_FAILED,
  payload: errmess,
});

const addAssets = (assets) => ({
  type: ActionTypes.ADD_ASSETS,
  payload: assets,
});
