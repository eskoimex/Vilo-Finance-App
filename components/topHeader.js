import { View, Text, Image } from "react-native";
import React from "react";
import { Icon } from "react-native-elements";
import {
  FourBarLevel1,
  FourBarLevel2,
  FourBarLevel3,
  FourBarLevel4,
  TwoBarLevel1,
  TwoBarLevel2,
} from "./progressBar";

export default function TopHeader({
  component,
  goBack,
  styles,
  name,
  identity,
}) {
  return (
    <View style={styles.headerTop}>
      <View style={styles.top}>
        <Icon
          name="arrow-back-ios"
          type="material"
          color="gray"
          size={20}
          iconStyle={{ marginTop: 20 }}
          onPress={goBack}
        />
        <Text style={[styles.identity, {fontFamily: "Ubuntu_700Bold"}]}>{name}</Text>
      </View>
      <View style={styles.center}>
        {component === "name" && <FourBarLevel1 margin={20} />}
        {component === "residential" && <FourBarLevel2 margin={20} />}
        {component === "employment" && <FourBarLevel3 margin={20} />}
        {component === "phone" && <FourBarLevel4 margin={20} />}
        {component === "verify" && <FourBarLevel4 margin={20} />}
        {component === "identity" && <TwoBarLevel1 margin={20} />}
        {component === "selfie" && <TwoBarLevel2 margin={20} />}
      </View>
    </View>
  );
}
