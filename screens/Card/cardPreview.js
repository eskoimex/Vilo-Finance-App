import {
  SafeAreaView,
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  Platform,
} from "react-native";
import React from "react";
import { Icon } from "react-native-elements";
import styles from "./style";

export default function CardPreview({ navigation, route }) {
  const { virtual } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.previewHeader}>
        <Icon
          name="arrow-back-ios"
          type="material"
          color="gray"
          size={20}
          iconStyle={{ paddingRight: 10 }}
          onPress={() => navigation.goBack()}
        />
        {virtual ? (
          <Text style={styles.text1}>{"Create new card"}</Text>
        ) : (
          <Text style={styles.text1}>{"Request new card"}</Text>
        )}
      </View>

      <View style={styles.previewDashboard}>
        <Text style={styles.cardPreview}>{"Card preview"}</Text>
        {Platform.OS === "android" ? (
          <View style={styles.dashboardImage}>
            <ImageBackground
              // style={styles.dashboardImage}
              source={require("../../assets/viloOverlay.png")}
            >
              <View style={styles.headerContainer}>
                <Text>{""}</Text>
                <Image source={require("../../assets/cardMenu.png")} />
              </View>
              <Text style={styles.cardHeader}>
                {"12,980 "}
                <Text style={styles.innerCardHeader}>{"USDT"}</Text>
              </Text>
              <Text style={styles.cardNumber}>{"1234  2345  3456  4567"}</Text>
              <View style={styles.headerContainer}>
                <Text>{""}</Text>
                <Text style={styles.virtual}>{"Physical"}</Text>
              </View>
              <View style={styles.bottomContainer}>
                <Text style={styles.virtual}>{"08/25"}</Text>
                <Image source={require("../../assets/mastercard.png")} />
              </View>
            </ImageBackground>
          </View>
        ) : (
          <ImageBackground
            style={styles.dashboardImage}
            source={require("../../assets/viloOverlay.png")}
          >
            <View style={styles.headerContainer}>
              <Text>{""}</Text>
              <Image source={require("../../assets/cardMenu.png")} />
            </View>
            <Text style={styles.cardHeader}>
              {"12,980 "}
              <Text style={styles.innerCardHeader}>{"USDT"}</Text>
            </Text>
            <Text style={styles.cardNumber}>{"1234  2345  3456  4567"}</Text>
            <View style={styles.headerContainer}>
              <Text>{""}</Text>
              <Text style={styles.virtual}>{"Physical"}</Text>
            </View>
            <View style={styles.bottomContainer}>
              <Text style={styles.virtual}>{"08/25"}</Text>
              <Image source={require("../../assets/mastercard.png")} />
            </View>
          </ImageBackground>
        )}
      </View>

      <View style={styles.cardFeeContainer}>
        <Text style={styles.cardPreview}>{"Card fee"}</Text>
        <View style={styles.cardFee}>
          <Text style={styles.cardFeeText}>{"2 USD"}</Text>
        </View>
      </View>

      <View style={styles.cardFeatureContainer}>
        <Text style={styles.cardPreview}>{"Card features"}</Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Confirm")}
      >
        <Text style={styles.buttonText}>{"Continue"}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
