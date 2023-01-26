import {
  SafeAreaView,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Icon } from "react-native-elements";
import styles from "./style";
import { useSelector, useDispatch } from "react-redux";
import { HandleImage } from "../../utils/handleImage";
import { activateWallet } from "../../redux/actions/activateWallet";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CommenceVerification from "../Overview/commeceVerification";
import { Pressable } from "react-native";
import Toast from "react-native-root-toast";
import { toastStyleMessage, toastStyleFailure } from "../../components/toast";
// import { assets } from "../../assets/data/assets";

export default function Wallet({ navigation }) {
  const assets = useSelector((state) => state.assets);
  const userAssets = useSelector((state) => state.userAssets);
  const auth = useSelector((state) => state.auth);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleActivate = (data) => {
    if (user?.user[0]?.isDocumentVerified) {
      dispatch(activateWallet(data, user));
    } else {
      Toast.show(
        "Please complete your verification to activate wallets",
        toastStyleFailure
      );
    }
  };

  const handleProfile = () => {
    if (user?.user[0]?.isDocumentVerified) {
      navigation.navigate("ProfileAndSettings");
    } else {
      Toast.show(
        "Please complete your verification to access feature",
        toastStyleFailure
      );
    }
  };

  const UserActivatedAssets = (uid) => {
    for (let i = 0; i < userAssets.length; i++) {
      if (userAssets.includes(uid)) {
        return true;
      }
    }
    return false;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={[styles.headerText, { fontFamily: "Ubuntu_700Bold" }]}>
          {"Wallets"}
        </Text>
        {/* <View style={styles.imageContainer}> */}
        {/* <Icon
              name="notification"
              type="entypo"
              size={17}
              color="#022141"
              iconStyle={styles.headerImage2}
            /> */}
        <Pressable onPress={handleProfile}>
          <Image
            style={styles.headerImage3}
            source={require("../../assets/profileAvatar.png")}
          />
        </Pressable>
        {/* </View> */}
      </View>

      <ScrollView style={styles.marginx2}>
        {assets.errMess !== null ? (
          <Text
            style={[
              styles.error,
              {
                marginTop: 100,
                marginLeft: 80,
                fontFamily: "Ubuntu_400Regular",
              },
            ]}
          >
            {"Failed to load wallets!!!"}
          </Text>
        ) : (
          assets.assets.map((item) => (
            <View key={item.uid} style={styles.dataContainer}>
              <View style={styles.leftContainer}>
                <Image
                  style={styles.imageCurrency}
                  source={HandleImage(item)}
                />
                <View>
                  <Text
                    style={[styles.currency, { fontFamily: "Ubuntu_700Bold" }]}
                  >
                    {item.label}
                  </Text>
                  <Text
                    style={[
                      styles.changeText,
                      { fontFamily: "Ubuntu_400Regular" },
                    ]}
                  >
                    {item.balance.balance} {item.assetType.toLowerCase()}
                  </Text>
                </View>
              </View>
              {!UserActivatedAssets(item.uid) ? (
                <View style={[styles.imageContainer, { margin: 10 }]}>
                  <TouchableOpacity
                    style={[styles.activateContainer]}
                    onPress={() => handleActivate(item.assetType)}
                  >
                    <Text
                      style={[
                        styles.activate,
                        { fontFamily: "Ubuntu_700Bold" },
                      ]}
                    >
                      {"Activate"}
                    </Text>
                  </TouchableOpacity>
                </View>
              ) : (
                <View style={{ margin: 5 }}>
                  <Text
                    style={[styles.price, { fontFamily: "Ubuntu_700Bold" }]}
                  >
                    {"     "}
                    {`$${item.balance.balance}`}
                  </Text>
                  <View style={styles.changeContainer}>
                    <Icon
                      name="arrow-upward"
                      type="material"
                      color="green"
                      size={10}
                    />
                    <Text
                      style={[
                        styles.change,
                        { fontFamily: "Ubuntu_400Regular" },
                      ]}
                    >
                      {" "}
                      {item.balance.pending}
                    </Text>
                  </View>
                </View>
              )}
            </View>
          ))
        )}
        {/* {initialData.map((item) => (
            <View key={item.id} style={styles.dataContainer}>
              <View style={styles.leftContainer}>
                <Image style={styles.imageCurrency} source={item.image} />
                <View>
                  <Text style={styles.currency}>{item.curency}</Text>
                  <Text style={styles.changeText}>{item.changeText}</Text>
                </View>
              </View>
              {!item.activated ? (
                <TouchableOpacity
                  style={styles.imageContainer}
                  onPress={() => handleActivate(item.id)}
                >
                  <Text style={styles.activate}>{"Activate"}</Text>
                </TouchableOpacity>
              ) : (
                <View style={{ margin: 5 }}>
                  <Text style={styles.price}>
                    {"     "}
                    {item.price}
                  </Text>
                  <View style={styles.changeContainer}>
                    <Icon
                      name="arrow-upward"
                      type="material"
                      color="green"
                      size={10}
                    />
                    <Text style={styles.change}> {item.change}</Text>
                  </View>
                </View>
              )}
            </View>
          ))} */}
      </ScrollView>
    </SafeAreaView>
  );
}
