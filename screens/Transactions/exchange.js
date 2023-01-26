import {
  Image,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React, { useState } from "react";
import { Icon, Input } from "react-native-elements";
import styles from "./style";
import BottomButton from "../../components/bottomButton";
import TokenSelect from "./tokenSelect";
import ComingSoon from "../../components/comingSoon";

export default function Exchange({ navigation }) {
  const [tokenPage, setTokenPage] = useState(false);
  const [first, setFirst] = useState(false);
  const [firstToken, setFirstToken] = useState({
    uri: "https://i.ibb.co/WWQymTQ/bitcoin.png",
  });
  const [firstTokenName, setFirstTokenName] = useState("BTC");
  const [secondToken, setSecondToken] = useState({
    uri: "https://i.ibb.co/VDkWnw9/ether.png",
  });
  const [secondTokenName, setSecondTokenName] = useState("ETH");
  const [tokenAmount, setTokenAmount] = useState("");
  const [tokenAmountUsd, setTokenAmountUsd] = useState("0.000000");
  const [fee, setFee] = useState("");
  const [feeUsd, setFeeUsd] = useState("0.000000");

  const handleSubmit = () => {
    navigation.navigate("TransactionSummary");
  };

  const handleChange = () => {
    setTokenPage(true);
    setFirst(true);
  };

  const handleChange1 = () => {
    setTokenPage(true);
    setFirst(false);
  };

  const myDebounce = (cb, d) => {
    let timer;
    return function (...args) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        cb(...args);
      }, d);
    };
  };

  const updateToken = myDebounce((e) => {
    console.log(firstTokenName.toLowerCase());
    // console.log(e);
    let token = firstTokenName.toLowerCase();
    if (e !== "") {
      return fetch(
        `https://api.coinconvert.net/convert/${token}/usd?amount=${e}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setTokenAmountUsd(data.USD);
          setTokenAmount(e);
        });
    } else {
      setTokenAmountUsd("");
    }
  }, 1000);

  const updateFee = myDebounce((e) => {
    console.log(firstTokenName.toLowerCase());
    // console.log(e);
    let token = firstTokenName.toLowerCase();
    if (e !== "") {
      return fetch(
        `https://api.coinconvert.net/convert/${token}/usd?amount=${e}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setFeeUsd(data.USD);
          setFee(e);
        });
    } else {
      setTokenAmountUsd("");
    }
  }, 1000);

  return (
    <>
      {tokenPage ? (
        <TokenSelect
          setTokenPage={setTokenPage}
          first={first}
          setFirstToken={setFirstToken}
          setFirstTokenName={setFirstTokenName}
          setSecondToken={setSecondToken}
          setSecondTokenName={setSecondTokenName}
        />
      ) : (
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
              <Text style={[styles.headerText, {fontFamily: "Ubuntu_700Bold"}]}>{"Exchange"}</Text>
            </View>
            <View />
          </View>

          {/* <Text style={[styles.bottomText, { marginLeft: 30 }]}>
            {"Swap crpto assets"}
          </Text>

          {Platform.OS === "android" ? (
            <View style={styles.dashboardContainerImage}>
              <ImageBackground
                source={require("../../assets/transferBackground.png")}
                // style={styles.section1}
                imageStyle={{ borderRadius: 20, height: 110 }}
              >
                <View
                  style={[
                    styles.child,
                    {
                      marginLeft: 30,
                      marginTop: 30,
                      marginRight: 30,
                      marginBottom: 10,
                    },
                  ]}
                >
                  <Text style={styles.child1Text}>
                    {"Available balance in BTC"}
                  </Text>
                  <Text style={styles.child1Text}>{"Value in USD"}</Text>
                </View>
                <View
                  style={[styles.child, { marginLeft: 30, marginRight: 30 }]}
                >
                  <Text style={styles.child1Text1}>{"0.064321865 BTC"}</Text>
                  <Text style={styles.child1Text1}>{"$25,987.00"}</Text>
                </View>
              </ImageBackground>
            </View>
          ) : (
            <ImageBackground
              source={require("../../assets/transferBackground.png")}
              style={styles.section1}
            >
              <View
                style={[
                  styles.child,
                  {
                    marginLeft: 30,
                    marginTop: 30,
                    marginRight: 30,
                    marginBottom: 10,
                  },
                ]}
              >
                <Text style={styles.child1Text}>
                  {"Available balance in BTC"}
                </Text>
                <Text style={styles.child1Text}>{"Value in USD"}</Text>
              </View>
              <View style={[styles.child, { marginLeft: 30, marginRight: 30 }]}>
                <Text style={styles.child1Text1}>{"0.064321865 BTC"}</Text>
                <Text style={styles.child1Text1}>{"$25,987.00"}</Text>
              </View>
            </ImageBackground>
          )}

          <View style={styles.section2}>
            <View style={styles.child}>
              <Text style={styles.bottomText}>{"Select Token to swap"}</Text>
              <Text style={styles.bottomText}>{"Amount"}</Text>
            </View>
            <View style={styles.child}>
              <TouchableOpacity onPress={handleChange}>
                <View style={styles.token}>
                  <Image
                    style={{ width: 30, height: 30, marginLeft: 10 }}
                    source={firstToken}
                  />
                  <Text>{firstTokenName}</Text>
                  <Icon
                    name="expand-more"
                    type="material"
                    color="#022141"
                    size={15}
                    iconStyle={{ paddingRight: 10 }}
                  />
                </View>
              </TouchableOpacity>
              <Text style={styles.tokenAmount}>{"0.054300"}</Text>
            </View>
            <View style={styles.child}>
              <View></View>
              <Text style={styles.bottomText}>{"Value:  $4,000"}</Text>
            </View>
          </View>

          <View style={styles.section2}>
            <Text style={styles.bottomText}>{"Select desired Token"}</Text>
            <View style={styles.child}>
              <TouchableOpacity onPress={handleChange1}>
                <View style={styles.token}>
                  <Image
                    style={{ width: 30, height: 30, marginLeft: 10 }}
                    source={secondToken}
                  />
                  <Text>{secondTokenName}</Text>
                  <Icon
                    name="expand-more"
                    type="material"
                    color="#022141"
                    size={15}
                    iconStyle={{ paddingRight: 10 }}
                    onPress={() => navigation.goBack()}
                  />
                </View>
              </TouchableOpacity>
              <Text style={styles.tokenAmount}>{"0.000010"}</Text>
            </View>
            <View style={styles.child}>
              <View></View>
              <Text style={styles.bottomText}>{"Value:  $1.25"}</Text>
            </View>
          </View>

          <View style={styles.container}>
            <BottomButton
              navigation={handleSubmit}
              styles={styles}
              name={"Preview Transaction"}
            />
          </View> */}
          <ComingSoon />
        </SafeAreaView>
      )}
    </>
  );
}
