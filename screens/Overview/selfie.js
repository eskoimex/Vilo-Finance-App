import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Platform
} from "react-native";
import React, { useState, useEffect, useRef } from "react";
import styles from "./style";
import TopHeader from "../../components/topHeader";
import BottomButton from "../../components/bottomButton";
import { Camera, CameraType } from "expo-camera";
import * as FileSystem from 'expo-file-system';
import { useUploadSelfie } from "../../hooks/useUploadSelfie";

export default function Selfie({ navigation }) {
  const { isLoading, handleUploadSelfie } = useUploadSelfie();
  const [image, setImage] = useState(null);
  const [imageData, setImageData] = useState("");
  const [selectedImage, setSelectedImage] = React.useState(false);
  const [hasPermission, setHasPermission] = useState(null);
  const imageref = useRef(null);

  const ref = useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const takePicture = async () => {
    const photo = await ref.current.takePictureAsync({});
    setSelectedImage(true);
    setImage(photo.uri);

    const data = new FormData();
    const name = photo.uri.split('/').pop();

    data.append('image', {
      name,
      type: "image/jpg",
      uri: Platform.OS === "ios" ? photo.uri.replace('file//', "") : photo.uri
    })

    setImageData(data)
  };

  return (
    <>
      <SafeAreaView style={{ backgroundColor: "#B9D9EB" }}>
        <TopHeader
          component={"selfie"}
          goBack={() => navigation.goBack()}
          styles={styles}
          name={"Identity Verification"}
        />

        <View style={styles.bodyContainer}>
          <View style={styles.marginx2}>
            <Text
              style={[styles.legalName, { fontFamily: "Ubuntu_400Regular" }]}
            >
              {"Take Selfie"}
            </Text>
            <Text style={[styles.subText, { fontFamily: "Ubuntu_400Regular" }]}>
              {"Your face should be within the square below"}
            </Text>
            <View style={styles.center}>
              {!selectedImage ? (
                <View>
                  <Image
                    style={styles.marginx2}
                    source={require("../../assets/square.png")}
                  />
                  <View style={styles.innerCamera}>
                    <Camera
                      type={CameraType.front}
                      ref={ref}
                      style={{ flex: 1 }}
                    ></Camera>
                  </View>
                </View>
              ) : (
                <View>
                  <Image
                    style={styles.marginx2}
                    source={require("../../assets/square.png")}
                  />
                  <View style={styles.innerCamera}>
                    <Image source={{ uri: image }} style={{ flex: 1 }} />
                  </View>
                </View>
              )}
              {!selectedImage ? (
                <TouchableOpacity style={styles.selfie} onPress={takePicture}>
                  <Text
                    style={[
                      styles.selfieText,
                      { fontFamily: "Ubuntu_500Medium" },
                    ]}
                  >
                    {"Take Selfie"}
                  </Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={styles.selfie}
                  onPress={() => setSelectedImage(false)}
                >
                  <Text
                    style={[
                      styles.selfieText,
                      { fontFamily: "Ubuntu_500Medium" },
                    ]}
                  >
                    {"Retake Selfie"}
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
      </SafeAreaView>

      <View style={styles.container}>
        <BottomButton
          navigation={() => handleUploadSelfie(imageData, navigation)}
          styles={styles}
          name={"Finish"}
          isLoading={isLoading}
        />
      </View>
    </>
  );
}
