import React from "react";
import { Image, SafeAreaView, Text } from "react-native";
import styles from "./style";
import { ThreeBarLevel3 } from "../../components/progressBar";
import { Layout } from "../../components/layout";

export default function VerifyEmail() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={[styles.header, { fontFamily: "Ubuntu_700Bold" }]}>{"Verify Email"}</Text>
      <ThreeBarLevel3 margin={10} />
      <Layout margin={100} />
      <Image
        style={styles.emailUnread}
        source={require("../../assets/emailUnread.png")}
      />
      <Text style={[styles.subHeader, { fontFamily: "Ubuntu_700Bold" }]}>{"Verify email address"}</Text>
      <Text style={[styles.subText, { fontFamily: "Ubuntu_400Regular" }]}>
        {"We sent you a verification link to your\nemail"}
      </Text>
    </SafeAreaView>
  );
}
