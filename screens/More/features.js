import {
  SafeAreaView,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  Platform,
} from "react-native";
import React from "react";
import { Icon } from "react-native-elements";
import styles from "./style";

export default function Features({ navigation }) {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.topHeader}>
          <Text
            style={[
              styles.headerText,
              { paddingLeft: 20, fontFamily: "Ubuntu_700Bold" },
            ]}
          >
            {"Features"}
          </Text>
          {/* <Icon
            name="x"
            type="feather"
            color="gray"
            size={20}
            iconStyle={{ marginTop: 20 }}
            onPress={() => navigation.goBack()}
          /> */}
        </View>

        <View style={{ margin: 10 }}>
          <TouchableOpacity onPress={() => navigation.navigate("Transfer")}>
            <View style={styles.bodyContainer}>
              <View style={styles.icon}>
                <Icon name="send" type="feather" color="#FFFFFF" size={27} />
              </View>
              <View>
                <Text style={[styles.text1, { fontFamily: "Ubuntu_700Bold" }]}>
                  {"Transfer Assets"}
                </Text>
                <Text
                  style={[styles.text2, { fontFamily: "Ubuntu_400Regular" }]}
                >
                  {"Top ups and withdrawals"}
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("Borrow")}>
            <View style={styles.bodyContainer}>
              <View style={styles.icon}>
                <Icon
                  name="dollar"
                  type="font-awesome"
                  color="#FFFFFF"
                  size={27}
                />
              </View>
              <View>
                <Text style={[styles.text1, { fontFamily: "Ubuntu_700Bold" }]}>
                  {"Borrow"}
                </Text>
                <Text
                  style={[styles.text2, { fontFamily: "Ubuntu_400Regular" }]}
                >
                  {"Cash or Stablecoins"}
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("Exchange")}>
            <View style={styles.bodyContainer}>
              <View style={styles.icon}>
                <Image
                  source={require("../../assets/exchange.png")}
                  style={{ width: 35, height: 35 }}
                />
              </View>
              <View>
                <Text style={[styles.text1, { fontFamily: "Ubuntu_700Bold" }]}>
                  {"Exchange"}
                </Text>
                <Text
                  style={[styles.text2, { fontFamily: "Ubuntu_400Regular" }]}
                >
                  {"Buy, sell and swap"}
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("Yield")}>
            <View style={styles.bodyContainer}>
              <View style={styles.icon}>
                <Image
                  source={require("../../assets/yield.png")}
                  style={{ width: 35, height: 35 }}
                />
              </View>
              <View>
                <Text style={[styles.text1, { fontFamily: "Ubuntu_700Bold" }]}>
                  {"Yield/Interest"}
                </Text>
                <Text
                  style={[styles.text2, { fontFamily: "Ubuntu_400Regular" }]}
                >
                  {"Interests on idle assets"}
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("SelectToken")}>
            <View style={styles.bodyContainer}>
              <View style={styles.icon}>
                <Icon
                  name={"card-outline"}
                  color="#FFFFFF"
                  size={27}
                  type="ionicon"
                />
              </View>
              <View>
                <Text style={[styles.text1, { fontFamily: "Ubuntu_700Bold" }]}>
                  {"Buy assets with card"}
                </Text>
                <Text
                  style={[styles.text2, { fontFamily: "Ubuntu_400Regular" }]}
                >
                  {"Buy with any Visa or Mastercard"}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
}
