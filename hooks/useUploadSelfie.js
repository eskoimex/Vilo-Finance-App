import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { baseUrl } from "../redux/baseUrl";
import Toast from 'react-native-root-toast';
import { toastStyleFailure, toastStyleSuccess } from "../components/toast";
import { logoutUser } from "../redux/actions/logoutUser";

//https://firebasestorage.googleapis.com/v0/b/vilo-finance.appspot.com/o/3bafeb9b-5caa-44b5-b7ac-0b28e274ca81.jpg?alt=media

export const useUploadSelfie = () => {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);

    const handleUploadSelfie = async (imageData, navigation) => {
        try {
            setIsLoading(true);
            const token = await AsyncStorage.getItem("accessToken");
            const userId = await AsyncStorage.getItem("userId");
            const res = await fetch(baseUrl + "photo_upload",
                {
                    method: "POST",
                    headers: {
                        Authorization: "Bearer " + token,
                    },
                    body: imageData
                }
            );
            let responseJson = await res.json();

            const bodyContent = JSON.stringify({
                "image": responseJson.data,
                "userId": userId
            });

            // const bodyContent = JSON.stringify({
            //     "image": "https://asset.cloudinary.com/dh3i1wodq/a52b7d",
            //     "userId": userId
            // });

            const verify = await fetch("https://vilo-finance.herokuapp.com/api/v1/biometric_verification", {
                method: "POST",
                body: bodyContent,
                headers: {
                    Authorization: "Bearer " + token,
                    "Content-Type": "application/json"
                },
            });

            let verifyJson = await verify.json();
            if (verifyJson.status !== false) {
                dispatch(logoutUser("Verification Successful! Please login again to continue"));
                // navigation.navigate("Home");
                // Toast.show("Verification Successful!", toastStyleSuccess);
                setIsLoading(false);
            } else {
                Toast.show(verifyJson.detail, toastStyleFailure);
                setIsLoading(false);
            }
        } catch (error) {
            Toast.show("Service Unavailable, try again later", toastStyleFailure);
            setIsLoading(false);
        }
    }

    return {
        isLoading,
        handleUploadSelfie,
    };
};
