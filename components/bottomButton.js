import { Text, TouchableOpacity, ActivityIndicator } from "react-native";
import React from "react";

export default function BottomButton({ navigation, styles, name, isLoading }) {
  return (
    <TouchableOpacity style={styles.button} onPress={navigation}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#4682B4" />
      ) : (
        <Text style={[styles.buttonText, {fontFamily: "Ubuntu_700Bold"}]}>{name}</Text>
      )}
    </TouchableOpacity>
  );
}
