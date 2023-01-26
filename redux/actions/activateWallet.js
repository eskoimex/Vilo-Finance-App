import * as ActionTypes from "../actionTypes";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
import { baseUrl } from "../baseUrl";
import { useSelector } from "react-redux";
import Toast from "react-native-root-toast";
import { toastStyleFailure } from "../../components/toast";

export const activateWallet = (data, user) => async (dispatch) => {
  try {
    const token = await AsyncStorage.getItem("accessToken");
    // const subAccountId = await AsyncStorage.getItem("subAccountId");
    const subAccountId = user?.user[0]?.wallet?.data.accountId || null
    const response = await fetch(
      baseUrl + `activate_wallet_asset?label=user-asset&asset=${data}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify({ subAccountId }),
      }
    );
    const json = await response.json();
    if (json.status === "success") {
      dispatch(addUserAssets(json.data.assetId));
    } else {
      let error = json.message;
      Toast.show(error, toastStyleFailure);
    }
  } catch (error) {
    console.log({ error });
  }
  //   const token = await AsyncStorage.getItem("accessToken");
  //   const subAccountId = await AsyncStorage.getItem("subAccountId");
  //   const userAsset = await AsyncStorage.getItem("userAsset");
  //   const response = await fetch(baseUrl + `activate_wallet_asset?label=user-asset&asset=${data}`, {
  //     method: "POST",
  //     headers: {
  //       Authorization: "Bearer " + token,
  //     },
  //     body: JSON.stringify({subAccountId}),
  //   });
  //   const json = await response.json()
  //   const newAssets =
  //     JSON.parse(userAsset) === null
  //       ? [""]
  //       : [...JSON.parse(userAsset), json.data.assetId];
  //   AsyncStorage.setItem("userAsset", JSON.stringify(newAssets));
  // } catch (error) {
  //   console.log({ error });
  // }
};

const addUserAssets = (assets) => ({
  type: ActionTypes.ADD_USERASSETS,
  payload: assets,
});
