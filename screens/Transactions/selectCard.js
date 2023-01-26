import {
  Image,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Icon } from "react-native-elements";
import styles from "./style";

export default function SelectCard({ navigation }) {
  return (
    <>
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
            <Text style={styles.headerText}>{"Buy with Credit/Debit Cards"}</Text>
          </View>
          <View />
        </View>

        <>
          <Text style={[styles.tokenNameSubText, { marginLeft: 20, marginTop: 50}]}>{"Saved Cards"}</Text>
          <TouchableOpacity onPress={() => navigation.navigate("CardPayment")} style={styles.selectCardContainer}>
            <Icon
              name="cc-visa"
              type="font-awesome"
              color="#0000FF"
              size={10}
              iconStyle={{ paddingLeft: 10 }}
            />
            <Text style={{ fontSize: 12 }}>
              {"1234 **** **** **** JOHN C. BUYAN 01/95"}
            </Text>
            <Icon
              name="check"
              type="material"
              color="#0000FF"
              size={15}
              iconStyle={{ paddingRight: 10 }}
            />
          </TouchableOpacity>
        </>

        <View style={styles.container}>
          <TouchableOpacity style={styles.newCardButton} onPress={() => navigation.navigate("NewCard")}>
            <Icon
              name="add"
              type="material"
              color="#0000FF"
              size={20}
              iconStyle={{ paddingRight: 5 }}
            />
            <Text style={styles.newCardText}>{"New Card"}</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
}
