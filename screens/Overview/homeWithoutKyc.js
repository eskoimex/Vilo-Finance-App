import {
  SafeAreaView,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  Pressable,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Icon } from "react-native-elements";
import { wallet } from "../../assets/data/wallet";
import styles from "./style";
import { useSelector, useDispatch } from "react-redux";
import { listAllAssets } from "../../redux/actions/listAllAssets";
import { userData } from "../../redux/actions/userData";
import { Loading } from "../../components/loading";
import { HandleImage } from "../../utils/handleImage";
import { LinearGradient } from "expo-linear-gradient";
import Toast from "react-native-root-toast";
import { toastStyleFailure } from "../../components/toast";
// import { assets } from "../../assets/data/assets";

export default function HomeWithoutKyc({ navigation }) {
  const dispatch = useDispatch();
  const assets = useSelector((state) => state.assets);
  const user = useSelector((state) => state.user);
  const userAssets = useSelector((state) => state.userAssets);
  const [activatedAssets, setActivatedAssets] = useState([]);

  useEffect(() => {
    if (assets.assets.length > 0) {
      const newItems = assets.assets.filter((item) =>
        userAssets.includes(item.uid)
      );

      setActivatedAssets(newItems);
    }
  }, [userAssets]);

  useEffect(() => {
    dispatch(listAllAssets());
    dispatch(userData());
  }, []);

  const handleActivate = () => {
    if (user?.user[0]?.isPhoneVerified) {
      navigation.navigate("ProfileAndSettings");
    } else {
      Toast.show("Please complete your verification to access feature", toastStyleFailure);
    }
  };

  const Portfolio = () => {
    return (
      <ScrollView style={{ marginTop: 10, marginBottom: 400 }}>
        {/* {activatedAssets.length > 0 ? (
          activatedAssets.map((item, index) => (
            <View key={item.uid} style={styles.dataContainer}>
              <View style={styles.leftContainer}>
                <Image
                  style={[styles.imageCurrency, { width: 30, height: 30 }]}
                  source={HandleImage(item)}
                />
                <View>
                  <Text style={styles.currency}>{item.label}</Text>
                  <Text style={styles.changeText}>
                    {item.balance.balance} {item.assetType.toLowerCase()}
                  </Text>
                </View>
              </View>
              <View>
                <Image
                  style={styles.upward}
                  source={require("../../assets/upward.png")}
                />
              </View>
              <View style={{ margin: 5 }}>
                <Text style={styles.price}>
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
                  <Text style={styles.change}> {item.balance.pending}</Text>
                </View>
              </View>
            </View>
          ))
        ) : ( */}
        <>
          <Text
            style={[
              styles.noActiveWallet,
              { marginTop: 30, fontFamily: "Ubuntu_400Regular" },
            ]}
          >
            {"No active wallets or assets"}
          </Text>
          <Text
            style={[
              styles.noActiveWallet,
              { marginTop: 10, fontFamily: "Ubuntu_400Regular" },
            ]}
          >
            {"Go to wallet section to activate wallets"}
          </Text>
        </>
        {/* )} */}
      </ScrollView>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View />
        {/* <Image
          style={styles.headerImage1}
          source={require("../../assets/menu.png")}
        /> */}
        <View style={styles.imageContainer} onPress={handleActivate}>
          <Icon
            name="notification"
            type="entypo"
            size={17}
            color="#022141"
            iconStyle={styles.headerImage2}
            // onPress={handleActivate}
          />
          <Pressable onPress={handleActivate}>
            <Image
              style={styles.headerImage3}
              source={require("../../assets/profileAvatar.png")}
            />
          </Pressable>
        </View>
      </View>

      <View style={styles.dashboard}>
        <View style={styles.dashboardContainerImage1}>
          <LinearGradient
            colors={["#000000", "#000000"]}
            // colors={["#F1CA74", "#A64DB6"]}
            style={{ borderRadius: 20, height: "100%" }}
          >
            <View style={styles.dashboardContainer}>
              <View style={styles.margin}>
                <Text
                  style={[
                    styles.dashboardText1,
                    { fontFamily: "Ubuntu_700Bold" },
                  ]}
                >
                  {"Portfolio balance"}
                </Text>
                <Text
                  style={[
                    styles.dashboardText2,
                    { fontFamily: "Ubuntu_700Bold" },
                  ]}
                >
                  {"$0.00000000"}
                </Text>
                <View style={styles.dashboardText3Container}>
                  <Icon
                    name="arrow-upward"
                    type="material"
                    color="#fff"
                    size={20}
                  />
                  <Text
                    style={[
                      styles.dashboardText3,
                      { fontFamily: "Ubuntu_400Regular" },
                    ]}
                  >
                    {"$0.00000000 . 0%"}
                  </Text>
                </View>
              </View>
              {/* <Image
                style={styles.bottomImage}
                source={require("../../assets/assetChart.png")}
              /> */}
            </View>
          </LinearGradient>
          {/* <ImageBackground
            imageStyle={{ borderRadius: 20 }}
            source={require("../../assets/rectangle.png")}
          >
            <View style={styles.dashboardContainer}>
              <View style={styles.margin}>
                <Text style={styles.dashboardText1}>{"Portfolio balance"}</Text>
                <Text style={styles.dashboardText2}>{"$0.00000000"}</Text>
                <View style={styles.dashboardText3Container}>
                  <Icon
                    name="arrow-upward"
                    type="material"
                    color="#fff"
                    size={20}
                  />
                  <Text style={styles.dashboardText3}>
                    {"$0.00000000 . 0%"}
                  </Text>
                </View>
              </View>
              <Image
                style={styles.bottomImage}
                source={require("../../assets/chart.png")}
              />
            </View>
          </ImageBackground> */}
        </View>
        <Image
          style={styles.card}
          source={require("../../assets/cardIcon.png")}
        />

        <TouchableOpacity
          onPress={() => navigation.navigate("CommenceVerification")}
        >
          <View
            style={[styles.identityContainer, { backgroundColor: "#000000" }]}
          >
            <View style={{ marginTop: 20 }}>
              <Text
                style={[
                  styles.identityText1,
                  { color: "#FFFFFF", fontFamily: "Ubuntu_700Bold" },
                ]}
              >
                {"Identity Verification"}
              </Text>
              <Text
                style={[
                  styles.identityText2,
                  { color: "#FFFFFF", fontFamily: "Ubuntu_400Regular" },
                ]}
              >
                {"Complete identity verification to\nunlock all features"}
              </Text>
            </View>
            <Image
              source={
                user?.user[0]?.isPhoneVerified
                  ? require("../../assets/70.png")
                  : require("../../assets/25.png")
              }
              style={{ marginTop: 30, width: 35, height: 35 }}
            />
            <Icon
              name="arrow-forward-ios"
              type="material"
              color="#FFFFFF"
              size={20}
              iconStyle={{ marginTop: 40 }}
            />
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.marginx2}>
        <Text
          style={[
            styles.identityText1,
            { marginRight: 20, fontFamily: "Ubuntu_700Bold" },
          ]}
        >
          {"My portfolio"}
        </Text>
        {assets.isLoading ? (
          <View style={{ marginTop: 50 }}>
            <Loading />
          </View>
        ) : (
          <Portfolio />
        )}
      </View>
    </SafeAreaView>
  );
}
