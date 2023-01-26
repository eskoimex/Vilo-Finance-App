import React from "react";
import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: 230,
    height: 72,
    backgroundColor: "#B9D9EB",
  },
});

export const Layout = ({ margin }) => {
  return <View style={[styles.container, { marginTop: margin }]} />;
};
