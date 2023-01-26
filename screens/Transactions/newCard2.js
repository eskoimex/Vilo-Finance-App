import { SafeAreaView, Text, View, TextInput } from "react-native";
import React, { useState } from "react";
import { Icon } from "react-native-elements";
import styles from "./style";
import BottomButton from "../../components/bottomButton";

export default function NewCard2({ navigation }) {
  const [selected, setSelected] = useState(false);

  const handleSubmit = () => {
    navigation.navigate("SelectCard");
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
            <Text style={styles.headerText}>{"Add new card"}</Text>
          </View>
          <View />
        </View>

        <View style={styles.fillInfo}>
          <Icon
            name="info"
            type="material"
            color="#C0AE7E"
            size={20}
            iconStyle={{ paddingLeft: 20 }}
          />
          <Text style={styles.filInfoText}>
            {"Please fill in the following information"}
          </Text>
        </View>

        <View style={{ margin: 10 }}>
          <View>
            <Text style={[styles.tokenNameSubText, { marginTop: 20 }]}>
              {"Billing Information"}
            </Text>
            <View style={[styles.billingAddress, { marginTop: 30 }]}>
              <Text style={styles.addressText}>{"My Address"}</Text>
              <Text style={styles.addresssSubText}>
                {"7, Second avenue, First Generation\nestate, Lokogoma, Abuja"}
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.selectAddress}>
          {selected ? (
            <Icon
              name="check-box"
              type="material"
              color="#E63946"
              size={20}
              onPress={() => setSelected(!selected)}
              iconStyle={{ paddingRight: 10 }}
            />
          ) : (
            <Icon
              name="check-box-outline-blank"
              type="material"
              //   color="#C0AE7E"
              size={20}
              onPress={() => setSelected(!selected)}
              iconStyle={{ paddingRight: 10 }}
            />
          )}
          <Text style={styles.tokenNameSubText}>
            {"Select home address as billing address"}
          </Text>
        </View>

        <View style={styles.container}>
          <BottomButton
            navigation={handleSubmit}
            styles={styles}
            name={"Continue"}
          />
        </View>
      </SafeAreaView>
    </>
  );
}
