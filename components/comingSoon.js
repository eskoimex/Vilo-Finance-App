import { Text, View, Image, StyleSheet, Platform } from "react-native";
import React from "react";

export default function ComingSoon() {
  return (
    <View style={styles.dashboard}>
      <View style={styles.header}>
        <Image style={styles.rocket} source={require("../assets/rocket.png")} />
      </View>
      <Text style={[styles.comingSoon, {fontFamily: "Ubuntu_700Bold"}]}>{"Coming Soon"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  dashboard: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: 70,
  },
  header: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 126,
    height: 126,
    backgroundColor: "#B9D9EB",
    borderRadius: 20,
  },
  comingSoon: {
    fontSize: 35,
    // fontWeight: "bold",
    color: "#333333",
    marginTop: 20,
    // fontFamily:
    //   Platform.OS === "android" ? "sans-serif-condensed" : "Avenir Next",
  },
  rocket: {
    width: 70,
    height: 70,
  },
});
