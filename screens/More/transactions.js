import { SafeAreaView, View, Text, Image, ScrollView } from "react-native";
import React, { useState } from "react";
import { Icon } from "react-native-elements";
import styles from "./style";

export default function Transactions({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.top}>
          <Icon
            name="arrow-back-ios"
            type="material"
            color="gray"
            size={25}
            iconStyle={{ paddingRight: 10 }}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.headerText}>{"Transactions"}</Text>
        </View>
        <View style={styles.imageContainer}>
          {/* <Icon
            name="notification"
            type="entypo"
            size={17}
            color="#022141"
            iconStyle={styles.headerImage2}
          />
          <Image
            style={styles.headerImage3}
            source={require("../../assets/profileAvatar.png")}
          /> */}
        </View>
      </View>

      <View style={styles.subContainer}>
        {/* <View style={styles.tranxContainer}>
          <Text style={styles.date}>{"02 May,2022 - Monday"}</Text>
          <ScrollView>
            <View style={styles.cardDetails}>
              <Image
                source={{ uri: "https://i.ibb.co/4SPdkNY/netflix-1-1.png" }}
                style={{ width: 30, height: 30 }}
              />
              <Text style={styles.text1}>{"Netflix - Payment for March"}</Text>
              <Text style={styles.price}>{"500USDT"}</Text>
            </View>
            <View style={styles.verticalSepperatorLine}></View>

            <View style={styles.cardDetails}>
              <Image
                source={{ uri: "https://i.ibb.co/4SPdkNY/netflix-1-1.png" }}
                style={{ width: 30, height: 30 }}
              />
              <Text style={styles.text1}>{"Netflix - Payment for March"}</Text>
              <Text style={styles.price}>{"500USDT"}</Text>
            </View>
            <View style={styles.verticalSepperatorLine}></View>

            <View style={styles.cardDetails}>
              <Image
                source={{ uri: "https://i.ibb.co/4SPdkNY/netflix-1-1.png" }}
                style={{ width: 30, height: 30 }}
              />
              <Text style={styles.text1}>{"Netflix - Payment for March"}</Text>
              <Text style={styles.price}>{"500USDT"}</Text>
            </View>
          </ScrollView>
        </View> */}
      </View>
    </SafeAreaView>
  );
}
