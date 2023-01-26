import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import styles from "./style";
import TopHeader from "../../components/topHeader";
import BottomButton from "../../components/bottomButton";
import * as DocumentPicker from "expo-document-picker";
import * as FileSystem from 'expo-file-system';
import Toast from "react-native-root-toast";
import { toastStyleMessage } from "../../components/toast";
import { useUploadDocument } from "../../hooks/useUploadDocument";

export default function Identity({ navigation }) {
  const { isLoading, handleUploadDocument } = useUploadDocument(navigation);
  const [text, setText] = useState("");
  const [file, setFile] = useState("");
  const [selectedImage, setSelectedImage] = React.useState(false);

  const getFile = async () => {
    let result = await DocumentPicker.getDocumentAsync({
      type: '*/*'
    });

    if (result.type === undefined) {
      Toast.show("Extention not allowed", toastStyleMessage);
      return null;
    }

    // Base64 encoding for reading & writing
    const options = { encoding: FileSystem.EncodingType.Base64 };
    // Read the file from it's local Uri
    const data = await FileSystem.readAsStringAsync(result.uri, options);

    if (!result.cancelled) {
      // console.log(data);
      setText(result.name);
      setFile(data);
      setSelectedImage(true);
    }
  };

  return (
    <>
      <SafeAreaView style={{ backgroundColor: "#B9D9EB" }}>
        <TopHeader
          component={"identity"}
          goBack={() => navigation.goBack()}
          styles={styles}
          name={"Identity Verification"}
        />

        <View style={styles.bodyContainer}>
          <View style={styles.marginx2}>
            <Text
              style={[styles.legalName, { fontFamily: "Ubuntu_400Regular" }]}
            >
              {"Means of Identification"}
            </Text>
            <Text style={[styles.subText, { fontFamily: "Ubuntu_400Regular" }]}>
              {
                "Use Camera or select from Gallery a picture of a means of identification"
              }
            </Text>
            <View style={styles.center}>
              {!selectedImage ? (
                <TouchableOpacity onPress={getFile}>
                  <Image
                    style={styles.marginx2}
                    source={require("../../assets/chooseFile.png")}
                  />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={getFile}>
                  <Text
                    style={[
                      styles.legalName,
                      { fontFamily: "Ubuntu_500Medium" },
                    ]}
                  >
                    {text}
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
      </SafeAreaView>

      <View style={styles.container}>
        <BottomButton
          navigation={() => handleUploadDocument(file, navigation)}
          styles={styles}
          name={"Continue"}
          isLoading={isLoading}
        />
      </View>
    </>
  );
}
