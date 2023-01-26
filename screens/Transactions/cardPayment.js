import { Image, SafeAreaView, Text, View, TextInput } from "react-native";
import React from "react";
import { Icon } from "react-native-elements";
import styles from "./style";
import BottomButton from "../../components/bottomButton";

export default function CardPayment({ navigation }) {
  const handleSubmit = () => {
    navigation.navigate("TransactionSummary");
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
            <Text style={styles.headerText}>
              {"Buy with Credit/Debit Cards"}
            </Text>
          </View>
          <View />
        </View>

        <View>
          <Text
            style={[styles.tokenNameSubText, { marginLeft: 20, marginTop: 50 }]}
          >
            {"Base Currency"}
          </Text>

          <View style={styles.conversioncontainer}>
            <View style={styles.row}>
              <View style={[styles.spaceBetween, { margin: 10 }]}>
                <Image
                  style={{ width: 30, height: 30 }}
                  source={{ uri: "https://i.ibb.co/WsWVJzV/euro.png" }}
                />
                <Text
                  style={[
                    styles.tokenNameSubText,
                    { paddingLeft: 10, paddingTop: 5 },
                  ]}
                >
                  {"EUR"}
                </Text>
                <Icon
                  name="expand-more"
                  type="material"
                  color="#022141"
                  size={20}
                  iconStyle={{ padding: 5 }}
                />
              </View>
              <View style={styles.divider} />
              <TextInput
                style={{ marginLeft: 10 }}
                placeholder={"100"}
                placeholderTextColor={"#022141"}
                // onChangeText={(e) => setLastname(e)}
              />
            </View>
          </View>
        </View>

        <View>
          <Text
            style={[styles.tokenNameSubText, { marginLeft: 20, marginTop: 20 }]}
          >
            {"Base Crypto"}
          </Text>

          <View style={styles.conversioncontainer}>
            <View style={styles.row}>
              <View style={[styles.spaceBetween, { margin: 10 }]}>
                <Image
                  style={{ width: 30, height: 30 }}
                  source={{ uri: "https://i.ibb.co/WWQymTQ/bitcoin.png" }}
                />
                <Text
                  style={[
                    styles.tokenNameSubText,
                    { paddingLeft: 10, paddingTop: 5 },
                  ]}
                >
                  {"BTC"}
                </Text>
                <Icon
                  name="expand-more"
                  type="material"
                  color="#022141"
                  size={20}
                  iconStyle={{ padding: 5 }}
                />
              </View>
              <View style={styles.divider} />
              <TextInput
                style={{ marginLeft: 10 }}
                placeholder={"0.005219"}
                placeholderTextColor={"#022141"}
                // onChangeText={(e) => setLastname(e)}
              />
            </View>
          </View>
        </View>

        <View>
          <Text
            style={[styles.tokenNameSubText, { marginLeft: 20, marginTop: 20 }]}
          >
            {"Payment with"}
          </Text>
          <View style={styles.selectCardContainer}>
            <Icon
              name="cc-visa"
              type="font-awesome"
              color="#0000FF"
              size={10}
              iconStyle={{ paddingLeft: 10 }}
            />
            <Text style={{ fontSize: 12 }}>
              {"1234 **** **** **** JOHN C. BUYAN 01/95"}
            </Text>
            <Icon
              name="check"
              type="material"
              color="#0000FF"
              size={15}
              iconStyle={{ paddingRight: 10 }}
            />
          </View>
        </View>

        <View style={{ display: "flex", flexDirection: "row", margin: 30 }}>
          <Text style={styles.morePaymentText}>{"More payment options"}</Text>
          <Icon
            name="info"
            type="material"
            color="#686868"
            size={20}
            iconStyle={{ paddingLeft: 10 }}
          />
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
