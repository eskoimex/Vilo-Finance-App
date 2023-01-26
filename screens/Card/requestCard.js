import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Icon } from "react-native-elements";
import styles from "./style";
import ComingSoon from "../../components/comingSoon";
import { UseFonts } from "../../components/useFonts";

export default function RequestCard({ navigation }) {
  const [virtual, setVirtual] = useState(true);
  // const { Ubuntu_700Bold } = UseFonts();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={[styles.headerText, { paddingLeft: 10, fontFamily: "Ubuntu_700Bold" }]}>{"Cards"}</Text>
        {/* <View style={styles.imageContainer}>
          <Icon name="notification" type="entypo" size={17} color='#022141' iconStyle={styles.headerImage2} /> */}
        {/* <Image
          style={styles.headerImage3}
          source={require("../../assets/profileAvatar.png")}
        /> */}
        {/* </View> */}
      </View>

      {/* <View style={styles.pills}>
        {virtual ? (
          <>
            <TouchableOpacity
              style={styles.pillsContainer}
              onPress={() => setVirtual(true)}
            >
              <Text style={styles.pillsText}>{"Virtual"}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.pillsContainer1}
              onPress={() => setVirtual(false)}
            >
              <Text style={styles.pillsText1}>{"Physical"}</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <TouchableOpacity
              style={styles.pillsContainer1}
              onPress={() => setVirtual(true)}
            >
              <Text style={styles.pillsText1}>{"Virtual"}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.pillsContainer}
              onPress={() => setVirtual(false)}
            >
              <Text style={styles.pillsText}>{"Physical"}</Text>
            </TouchableOpacity>
          </>
        )}
      </View>

      <View style={styles.dashboard}>
        <Image source={require("../../assets/requestCard.png")} />
        {virtual ? (
          <Text style={styles.physicalCard}>
            {"No virtual card linked to account"}
          </Text>
        ) : (
          <Text style={styles.physicalCard}>
            {"No physical card linked to account"}
          </Text>
        )}
      </View>

      <TouchableOpacity
        style={styles.requestCard}
        onPress={() => navigation.navigate("CardPreview", {virtual})}
      >
        <Icon
          name="add"
          type="material"
          color="#000000"
          size={25}
          iconStyle={{ paddingRight: 5 }}
        />
        {virtual ? (
          <Text style={styles.requestCardText}>{"Create new card"}</Text>
        ) : (
          <Text style={styles.requestCardText}>{"Request new card"}</Text>
        )}
      </TouchableOpacity> */}
      <ComingSoon />
    </SafeAreaView>
  );
}
