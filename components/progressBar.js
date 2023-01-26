import React from "react";
import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  parent: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  black: {
    width: 70,
    height: 5,
    backgroundColor: "#000000",
    borderRadius: 20,
    margin: 10,
  },
  white: {
    width: 70,
    height: 5,
    backgroundColor: "#D1D5DB",
    borderRadius: 20,
    margin: 10,
  },
  gray: {
    width: 70,
    height: 5,
    backgroundColor: "rgba(62, 86, 112, 0.4)",
    borderRadius: 20,
    margin: 10,
  },
});

export const TwoBarLevel1 = ({ margin }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.parent, { marginTop: margin }]}>
        <View style={styles.black} />
        <View style={styles.gray} />
      </View>
    </View>
  );
};

export const TwoBarLevel2 = ({ margin }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.parent, { marginTop: margin }]}>
        <View style={styles.black} />
        <View style={styles.black} />
      </View>
    </View>
  );
};

export const ThreeBarLevel1 = ({ margin }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.parent, { marginTop: margin }]}>
        <View style={styles.black} />
        <View style={styles.white} />
        <View style={styles.white} />
      </View>
    </View>
  );
};

export const ThreeBarLevel2 = ({ margin }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.parent, { marginTop: margin }]}>
        <View style={styles.white} />
        <View style={styles.black} />
        <View style={styles.white} />
      </View>
    </View>
  );
};

export const ThreeBarLevel3 = ({ margin }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.parent, { marginTop: margin }]}>
        <View style={styles.white} />
        <View style={styles.white} />
        <View style={styles.black} />
      </View>
    </View>
  );
};

export const FourBarLevel1 = ({ margin }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.parent, { marginTop: margin }]}>
        <View style={styles.black} />
        <View style={styles.gray} />
        <View style={styles.gray} />
        <View style={styles.gray} />
      </View>
    </View>
  );
};
export const FourBarLevel2 = ({ margin }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.parent, { marginTop: margin }]}>
        <View style={styles.gray} />
        <View style={styles.black} />
        <View style={styles.gray} />
        <View style={styles.gray} />
      </View>
    </View>
  );
};
export const FourBarLevel3 = ({ margin }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.parent, { marginTop: margin }]}>
        <View style={styles.gray} />
        <View style={styles.gray} />
        <View style={styles.black} />
        <View style={styles.gray} />
      </View>
    </View>
  );
};
export const FourBarLevel4 = ({ margin }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.parent, { marginTop: margin }]}>
        <View style={styles.gray} />
        <View style={styles.gray} />
        <View style={styles.gray} />
        <View style={styles.black} />
      </View>
    </View>
  );
};
