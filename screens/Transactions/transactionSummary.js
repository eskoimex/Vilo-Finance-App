import { SafeAreaView, Text, View, Image } from "react-native";
import React, { useEffect } from "react";
import { Icon } from "react-native-elements";
import styles from "./style";
import BottomButton from "../../components/bottomButton";
import { useSendCrypto } from "../../hooks/useSendCrypto";

export default function TransactionSummary({ navigation, route }) {
  const {
    firstToken,
    firstTokenName,
    tokenAmountUsd,
    price,
    feeUsd,
    walletAddress,
  } = route.params;
  const total = tokenAmountUsd + feeUsd;
  const { isLoading, handleSendCrypto, transactionSuccessul } = useSendCrypto();

  useEffect(() => {
    if (transactionSuccessul)
      navigation.navigate("SuccessfulPayment", {
        firstTokenName,
        price,
        walletAddress,
      });
  }, [transactionSuccessul]);

  const handleSubmit = () => {
    handleSendCrypto(firstTokenName, price, walletAddress);
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.topHeader}>
          <Text style={styles.features}>{"Confirm order"}</Text>
          <Icon
            name="x"
            type="feather"
            color="gray"
            size={25}
            iconStyle={{ marginTop: 20, marginRight: 20 }}
            onPress={() => navigation.goBack()}
          />
        </View>

        <View style={{ marginTop: 40, marginLeft: 10, marginRight: 10 }}>
          <View style={[styles.spaceBetween, { margin: 10 }]}>
            <Text style={styles.tranxSummaryText}>{"USD Amount"}</Text>
            <Text style={styles.tranxSummaryText}>{"Token Amount"}</Text>
          </View>

          <View style={[styles.spaceBetween, { margin: 10 }]}>
            <View style={styles.rowCenter}>
              <Image
                style={{ width: 30, height: 30, marginRight: 5 }}
                source={{ uri: "https://i.ibb.co/WsWVJzV/euro.png" }}
              />
              <Text style={[styles.tokenNameSubText]}>{total}</Text>
            </View>
            <View style={styles.rowCenter}>
              <Text
                style={styles.tokenNameSubText}
              >{`${price} ${firstTokenName}`}</Text>
              <Image
                style={{ width: 30, height: 30, marginLeft: 5 }}
                source={{ uri: "https://i.ibb.co/WWQymTQ/bitcoin.png" }}
              />
            </View>
          </View>

          <View style={[styles.spaceBetween, { margin: 10 }]}>
            <Text style={styles.tranxSummaryText}>{"Price"}</Text>
            <Text
              style={styles.tokenName}
            >{`1 ${firstTokenName} = ${tokenAmountUsd} USD`}</Text>
          </View>

          <View style={[styles.spaceBetween, { margin: 10 }]}>
            <Text style={styles.tranxSummaryText}>{"Transaction fee"}</Text>
            <Text style={styles.tokenName}>{`${feeUsd} USD`}</Text>
          </View>

          <View style={[styles.spaceBetween, { margin: 10 }]}>
            <Text style={styles.tranxSummaryText}>{"Total"}</Text>
            <Text style={styles.tokenName}>{total}</Text>
          </View>
        </View>

        <View style={styles.container}>
          <BottomButton
            navigation={handleSubmit}
            styles={styles}
            name={"Confirm Order"}
            isLoading={isLoading}
          />
        </View>
      </SafeAreaView>
    </>
  );
}
