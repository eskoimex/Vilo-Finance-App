import {
  Image,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { Icon } from "react-native-elements";
import styles from "./style";
import { BuyMethod } from "../../assets/data/token";

export default function SelectBuyMethod({ navigation }) {
  const [selected, setSelected] = useState(0);

  const handleClick = (index) => {
    setSelected(index);
    if (index === 0) {
      navigation.navigate("SelectCard");
    } else {
      Alert.alert("Coming soon");
    }
  };

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
            <Text style={styles.headerText}>{"Select payment method"}</Text>
          </View>
          <View />
        </View>
        <Text style={[styles.bottomText, { marginLeft: 50 }]}>
          {"Select choice of payment method"}
        </Text>

        {BuyMethod.map((item, index) => (
          <TouchableOpacity
            style={
              selected === index ? styles.paymentMethod : styles.paymentMethod1
            }
            key={index}
            onPress={() => handleClick(index)}
          >
            <View
              style={{ display: "flex", flexDirection: "row", marginLeft: 10 }}
            >
              <Image style={{ width: 30, height: 30 }} source={item.image} />
              <View style={{ marginLeft: 10 }}>
                <Text style={styles.tokenNameSubText}>{item.text}</Text>
                <Text style={styles.tokenNameText}>{item.subText}</Text>
              </View>
            </View>
            {selected === index ? (
              <Icon
                name="check"
                type="material"
                color="#0000FF"
                size={15}
                iconStyle={{ paddingRight: 10 }}
              />
            ) : (
              <View></View>
            )}
          </TouchableOpacity>
        ))}
      </SafeAreaView>
    </>
  );
}
