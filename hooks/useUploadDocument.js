import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { baseUrl } from "../redux/baseUrl";
import Toast from 'react-native-root-toast';
import { toastStyleFailure } from "../components/toast";

export const useUploadDocument = () => {
    const [isLoading, setIsLoading] = useState(false);

    const handleUploadDocument = async (file, navigation) => {
        //Check if any file is selected or not
        if (file != null) {
            //If file selected then create FormData
            const fileToUpload = file;
            // const data = new FormData();
            // data.append("doc_country", "NG");
            // data.append("doc_type", "PP");
            // data.append("doc_image", fileToUpload);

            let payload = {
                "doc_country": "NG",
                "doc_type": "PP",
                "doc_image": fileToUpload
            };

            let formBody = [];
            for (let property in payload) {
                let encodedKey = encodeURIComponent(property);
                let encodedValue = encodeURIComponent(payload[property]);
                formBody.push(encodedKey + "=" + encodedValue);
            }
            formBody = formBody.join("&");
            // setIsLoading(true);
            // const res = await fetch("https://api.myidentitypay.com/api/v1/biometrics/merchant/data/verification/document", {
            //     method: "POST",
            //     headers: {
            //         "app-id": "d689895a-7eea-4ffc-95a9-6139b3e772ec",
            //         "x-api-key": "xakamWye.cxWg9arkFGK5rqVIHKbLfV0otiLLeMEn",
            //         "Content-Type": "application/x-www-form-urlencoded",
            //     },
            //     body: data,
            // });
            // let responseJson = await res.json();
            // console.log(responseJson);
            // if (responseJson.status === true) {
            //     navigation.navigate("Selfie");
            //     setIsLoading(false);
            // } else {
            //     Toast.show(responseJson.message, toastStyleFailure);
            //     setIsLoading(false);
            // }

            try {
                setIsLoading(true);
                const token = await AsyncStorage.getItem("accessToken");
                const res = await fetch("https://vilo-finance.herokuapp.com/api/v1/document_verification/", {
                // const res = await fetch("http://172.20.10.4:3000/api/v1/document_verification/", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                        Authorization: "Bearer " + token,
                    },
                    body: formBody,
                });
                let responseJson = await res.json();
                if (responseJson.status !== false) {
                    navigation.navigate("Selfie");
                    setIsLoading(false);
                } else {
                    Toast.show(responseJson.message, toastStyleFailure);
                    setIsLoading(false);
                }
            } catch (error) {
                Toast.show("Service Unavailable, try again later", toastStyleFailure);
                setIsLoading(false);
            }
        }
    };

    return {
        isLoading,
        handleUploadDocument,
    };
};
