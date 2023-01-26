import {
  Image,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Icon } from "react-native-elements";
import styles from "./style";

export default function SuccessfulPayment({ navigation }) {
  const { firstTokenName, price, walletAddress } = route.params;

  const handleSubmit = () => {
    navigation.navigate("Features");
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.rowCenterHeader}>
        <Text style={styles.headerText}>{"Buy with Credit/Debit Cards"}</Text>
      </View>

      <View style={styles.checkDashboard}>
        <Icon name="check-circle" type="material" color="#32CD32" size={70} />
      </View>

      <View style={styles.checkDashboard}>
        <View style={styles.center}>
          <Image
            style={{ width: 30, height: 30 }}
            source={{ uri: "https://i.ibb.co/WWQymTQ/bitcoin.png" }}
          />
          <Text style={styles.addresssLargeText}>{`${price} ${firstTokenName}`}</Text>
          <Text style={styles.addresssSubText}>
            {`has been sent to wallet ${walletAddress}`}
          </Text>
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>{"Done"}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
