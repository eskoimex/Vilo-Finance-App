import { SafeAreaView, Text, View, TextInput } from "react-native";
import React, { useState } from "react";
import { Icon } from "react-native-elements";
import styles from "./style";
import BottomButton from "../../components/bottomButton";

export default function NewCard({ navigation }) {
  const handleSubmit = () => {
    navigation.navigate("NewCard2");
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

        <View style={{ margin: 20 }}>
          <Text style={[styles.tokenNameSubText, { marginTop: 20 }]}>
            {"Card Information"}
          </Text>

          <View style={[styles.spaceBetween, { marginTop: 20 }]}>
            <View>
              <Text style={styles.tokenNameSubText}>{"First name"}</Text>
              <View style={[styles.firstName, { marginTop: 10 }]}>
                <TextInput
                  style={{ marginLeft: 10 }}
                  placeholder={"e.g John"}
                  // onChangeText={(e) => setLastname(e)}
                />
              </View>
            </View>
            <View>
              <Text style={styles.tokenNameSubText}>{"Last name"}</Text>
              <View style={[styles.firstName, { marginTop: 10 }]}>
                <TextInput
                  style={{ marginLeft: 10 }}
                  placeholder={"e.g John"}
                  // onChangeText={(e) => setLastname(e)}
                />
              </View>
            </View>
          </View>

          <View style={{ marginTop: 20 }}>
            <Text style={styles.tokenNameSubText}>{"Card number"}</Text>
            <View style={[styles.cardNumber, { marginTop: 10 }]}>
              <TextInput
                style={{ marginLeft: 10 }}
                placeholder={"e.g 1234 5678 9010"}
                // onChangeText={(e) => setLastname(e)}
              />
            </View>
          </View>

          <View style={[styles.spaceBetween, { marginTop: 20 }]}>
            <View>
              <Text style={styles.tokenNameSubText}>{"CVV"}</Text>
              <View style={[styles.firstName, { marginTop: 10 }]}>
                <TextInput
                  style={{ marginLeft: 10 }}
                  placeholder={"e.g 123"}
                  // onChangeText={(e) => setLastname(e)}
                />
              </View>
            </View>
            <View>
              <Text style={styles.tokenNameSubText}>{"Expiration date"}</Text>
              <View style={[styles.firstName, { marginTop: 10 }]}>
                <TextInput
                  style={{ marginLeft: 10 }}
                  placeholder={"e.g 123"}
                  // onChangeText={(e) => setLastname(e)}
                />
              </View>
            </View>
          </View>
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
