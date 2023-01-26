import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
import { useSelector } from "react-redux";
import { baseUrl } from "../redux/baseUrl";
import Toast from 'react-native-root-toast';
import { toastStyleFailure } from "../components/toast";

export const useSendCrypto = () => {
  const user = useSelector((state) => state.user);
  const [isLoading, setIsLoading] = useState(false);
  const [transactionSuccessul, setTransactionSuccessul] = useState(false);

  const handleSendCrypto = async (firstTokenName, price, walletAddress) => {
    try {
      setIsLoading(true);
      const token = await AsyncStorage.getItem("accessToken");
      const subAccountId = user?.user[0]?.wallet?.data.accountId || null
      // d7f3167c-61fb-40d4-b078-45dc062da7a3
      const response = await fetch(
        baseUrl +
          `send_crypto?walletId=${subAccountId}&address=${walletAddress}&cryptoAmount=${price}&assetType=${firstTokenName}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );
      const json = await response.json();
      if (json.status === "success") {
        setTransactionSuccessul(true);
      } else {
        let error = json.message;
        Toast.show(error, toastStyleFailure);
      }
    } catch (error) {
      Toast.show("Service Unavailable, try again later", toastStyleFailure);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    transactionSuccessul,
    handleSendCrypto,
  };
};
