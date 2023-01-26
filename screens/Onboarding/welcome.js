import React from "react";
import { Image, SafeAreaView, Text, TouchableOpacity } from "react-native";
import { ThreeBarLevel1 } from "../../components/progressBar";
import { Layout } from "../../components/layout";
import styles from "./style";

export default function Welcome({ navigation, route }) {
  const { email, password } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <Text style={[styles.header, { fontFamily: "Ubuntu_700Bold" }]}>{"Welcome to Vilo"}</Text>
      <ThreeBarLevel1 margin={10} />
      <Layout margin={100} />
      <Image
        style={styles.avatar}
        source={require("../../assets/avatar.png")}
      />
      <Text style={[styles.subHeader, { fontFamily: "Ubuntu_700Bold" }]}>{"Welcome to Vilo"}</Text>
      <Text style={[styles.subText, { fontFamily: "Ubuntu_400Regular" }]}>
        {
          "We are happy you are here.\nSetting up a 4-digit PIN is required to keep\nyour funds safe."
        }
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("SetPin", { email, password })}
        style={styles.setupButton}
      >
        <Text style={[styles.setupText, { fontFamily: "Ubuntu_700Bold" }]}>{"Set up PIN"}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
