import { Image, SafeAreaView, Text, View } from "react-native";
import React from "react";
import { Icon } from "react-native-elements";
import styles from "./style";
import BottomButton from "../../components/bottomButton";
import ComingSoon from "../../components/comingSoon";

export default function Borrow({ navigation }) {
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
            <Text style={[styles.headerText, {fontFamily: "Ubuntu_700Bold"}]}>{"Borrow"}</Text>
          </View>
          <View />
        </View>

        <ComingSoon />
        {/* <Text style={[styles.bottomText, { marginLeft: 50 }]}>
          {"Get Stablecoins against Crypto"}
        </Text>

        <View style={styles.borrowContainer}>
          <Text style={styles.bottomText}>{"USDT Loan Amount"}</Text>
          <Text style={styles.tokenAmount}>{"4000.000 USDT"}</Text>
        </View>

        <View style={styles.borrowSubContainer}>
          <Text style={[styles.bottomText, { textAlign: "center" }]}>
            {"Crypto"}
          </Text>
          <View style={styles.child}>
            <View style={styles.token}>
              <Image
                style={{ width: 30, height: 30, marginLeft: 10 }}
                source={{uri: "https://i.ibb.co/WWQymTQ/bitcoin.png"}}
              />
              <Text>{"BTC"}</Text>
              <Icon
                name="expand-more"
                type="material"
                color="#022141"
                size={15}
                iconStyle={{ paddingRight: 10 }}
              />
            </View>
            <View style={styles.borrowInnerContainer}>  
              <View style={styles.row}>
                <Text style={styles.borrowBottomText}>{"1.08"}</Text>
                <Image
                  style={{ width: 30, height: 30, marginTop: 5 }}
                  source={{uri: "https://i.ibb.co/WWQymTQ/bitcoin.png"}}
                />
              </View>
              <Text style={styles.child1Text}>{"Collateral Needed"}</Text>
            </View>
          </View>
        </View>

        <View style={styles.container}>
          <BottomButton
            navigation={handleSubmit}
            styles={styles}
            name={"Preview Transaction"}
          />
        </View> */}
      </SafeAreaView>
    </>
  );
}