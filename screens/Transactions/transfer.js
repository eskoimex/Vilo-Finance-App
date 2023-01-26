import {
  Image,
  SafeAreaView,
  Text,
  View,
  Pressable,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  Platform,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { Icon, Input } from "react-native-elements";
import styles from "./style";
import BottomButton from "../../components/bottomButton";
import TokenSelect from "./tokenSelect";
import { useSelector } from "react-redux";
import Toast from "react-native-root-toast";
import { toastStyleFailure } from "../../components/toast";

export default function Transfer({ navigation }) {
  const user = useSelector((state) => state.user);
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
  const [price, setPrice] = useState("");
  const [tokenAmountUsd, setTokenAmountUsd] = useState("0.000000");
  const [fee, setFee] = useState("0.000000");
  const [feeUsd, setFeeUsd] = useState("0.000000");
  const [walletAddress, setWalletAddress] = useState("");

  const handleSubmit = () => {
    // if (user?.user[0]?.isPhoneVerified && user?.user[0]?.isDocumentVerified) {
    if (user?.user[0]?.isDocumentVerified) {
    navigation.navigate("TransactionSummary", {
      firstToken,
      firstTokenName,
      tokenAmountUsd,
      price,
      feeUsd,
      walletAddress,
    });
    } else {
      Toast.show("Please complete your verification to iniatiate transfer", toastStyleFailure);
    }
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
          setPrice(e);
          setTokenAmountUsd(data.USD);
          updateFee(data.USD);
        });
    } else {
      setTokenAmountUsd("");
    }
  }, 1000);

  const updateFee = (price) => {
    let fee = price * 0.02;
    setFeeUsd(fee);
    let token = secondTokenName.toLowerCase();
    return fetch(
      `https://api.coinconvert.net/convert/usd/${token}?amount=${fee}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log({ data });
        setFee(data[`${secondTokenName.toUpperCase()}`]);
      });
  };

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
              <Text
                style={[styles.headerText, { fontFamily: "Ubuntu_700Bold" }]}
              >
                {"Transfer"}
              </Text>
            </View>
            <View />
          </View>
          <Text
            style={[
              styles.bottomText,
              { marginLeft: 50, fontFamily: "Ubuntu_400Regular" },
            ]}
          >
            {"Send crypto to any address"}
          </Text>

          <View style={{ margin: 10 }}>
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
                    <Text
                      style={[
                        styles.child1Text,
                        { fontFamily: "Ubuntu_400Regular" },
                      ]}
                    >
                      {"Available balance in BTC"}
                    </Text>
                    <Text
                      style={[
                        styles.child1Text,
                        { fontFamily: "Ubuntu_400Regular" },
                      ]}
                    >
                      {"Value in USD"}
                    </Text>
                  </View>
                  <View
                    style={[styles.child, { marginLeft: 30, marginRight: 30 }]}
                  >
                    <Text
                      style={[
                        styles.child1Text1,
                        { fontFamily: "Ubuntu_700Bold" },
                      ]}
                    >
                      {"0.00000000 BTC"}
                    </Text>
                    <Text
                      style={[
                        styles.child1Text1,
                        { fontFamily: "Ubuntu_700Bold" },
                      ]}
                    >
                      {"$0.00000000"}
                    </Text>
                  </View>
                </ImageBackground>
              </View>
            ) : (
              <ImageBackground
                source={require("../../assets/transferBackground.png")}
                style={styles.section1}
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
                  <Text
                    style={[
                      styles.child1Text,
                      { fontFamily: "Ubuntu_400Regular" },
                    ]}
                  >
                    {"Available balance in BTC"}
                  </Text>
                  <Text
                    style={[
                      styles.child1Text,
                      { fontFamily: "Ubuntu_400Regular" },
                    ]}
                  >
                    {"Value in USD"}
                  </Text>
                </View>
                <View
                  style={[styles.child, { marginLeft: 30, marginRight: 30 }]}
                >
                  <Text
                    style={[
                      styles.child1Text1,
                      { fontFamily: "Ubuntu_700Bold" },
                    ]}
                  >
                    {"0.00000000 BTC"}
                  </Text>
                  <Text
                    style={[
                      styles.child1Text1,
                      { fontFamily: "Ubuntu_700Bold" },
                    ]}
                  >
                    {"$0.00000000"}
                  </Text>
                </View>
              </ImageBackground>
            )}

            <Text
              style={[
                styles.bottomText1,
                {
                  marginLeft: 20,
                  marginTop: Platform.OS === "ios" ? 10 : 20,
                  fontFamily: "Ubuntu_500Medium",
                },
              ]}
            >
              {"Enter recipient’s wallet address"}
            </Text>
            <View style={styles.section3}>
              <TextInput
                style={styles.inputAddress}
                placeholder={"Wallet Address"}
                multiline={true}
                onChangeText={(e) => setWalletAddress(e)}
              />
              {/* <Text style={styles.walletAddress}>{"Wallet Address"}</Text> */}
              <Pressable style={styles.paste}>
                <Text
                  style={[styles.pasteText, { fontFamily: "Ubuntu_700Bold" }]}
                >
                  {"Paste"}
                </Text>
              </Pressable>
            </View>

            <View style={styles.section2}>
              <View style={styles.child}>
                <Text
                  style={[
                    styles.bottomText,
                    { fontFamily: "Ubuntu_500Medium" },
                  ]}
                >
                  {"Select Token to send"}
                </Text>
                <Text
                  style={[
                    styles.bottomText,
                    { fontFamily: "Ubuntu_400Regular" },
                  ]}
                >
                  {"Amount"}
                </Text>
              </View>
              <View style={styles.child}>
                <TouchableOpacity onPress={handleChange}>
                  <View style={styles.token}>
                    <Image
                      style={{ width: 30, height: 30, marginLeft: 10 }}
                      source={firstToken}
                    />
                    <Text style={{ fontFamily: "Ubuntu_500Medium" }}>
                      {firstTokenName}
                    </Text>
                    <Icon
                      name="expand-more"
                      type="material"
                      color="#022141"
                      size={15}
                      iconStyle={{ paddingRight: 10 }}
                    />
                  </View>
                </TouchableOpacity>
                <View style={{ width: 150, height: 50 }}>
                  <Input
                    placeholder="0.00000000"
                    inputStyle={{ margin: 0 }}
                    // onChangeText={(value) => setPrice(value)}
                    onChangeText={updateToken}
                  />
                </View>

                {/* <Text style={styles.tokenAmount}>{"0.054300"}</Text> */}
              </View>
              <View style={styles.child}>
                <View></View>
                <Text
                  style={[styles.bottomText, { fontFamily: "Ubuntu_700Bold" }]}
                >{`Value:  $${tokenAmountUsd}`}</Text>
              </View>
            </View>

            {firstTokenName === "ETH" ? (
              <View style={{ marginLeft: 15 }}>
                <>
                  <Text
                    style={[
                      styles.tokenNameSubText,
                      { fontFamily: "Ubuntu_500Medium" },
                    ]}
                  >
                    {"Gas fee"}
                  </Text>
                  <View style={styles.gasFee}>
                    <Text
                      style={[
                        styles.gasText,
                        { fontFamily: "Ubuntu_400Regular" },
                      ]}
                    >
                      {"0.005219"}
                    </Text>
                  </View>
                </>
                <View>
                  <Text
                    style={[
                      styles.tokenNameSubText,
                      { fontFamily: "Ubuntu_500Medium" },
                    ]}
                  >
                    {"Gas limit"}
                  </Text>
                  <View style={styles.gasLimit}>
                    <View style={styles.row}>
                      <Text
                        style={[
                          styles.morePaymentText,
                          { fontFamily: "Ubuntu_400Regular" },
                        ]}
                      >
                        {"Min"}
                      </Text>
                      <View style={styles.horizontalSeperator}></View>
                      <Text
                        style={[
                          styles.gasText,
                          { fontFamily: "Ubuntu_400Regular" },
                        ]}
                      >
                        {"0.005219"}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            ) : (
              <View style={styles.section4}>
                <Text
                  style={[styles.tranxFee, { fontFamily: "Ubuntu_400Regular" }]}
                >
                  {"Transaction fee:"}
                </Text>
                <Text
                  style={[
                    styles.tranxFeeAmount,
                    { fontFamily: "Ubuntu_400Regular" },
                  ]}
                >
                  {fee} {"BTC"}
                </Text>
              </View>
            )}
          </View>

          {/* {firstTokenName === "ETH" && (
            <View style={styles.noteContainer}>
              <Text style={styles.noteText}>
                {"Note that the ethereum is on TERRA network"}
              </Text>
            </View>
          )} */}

          <View style={styles.container}>
            <BottomButton
              navigation={handleSubmit}
              styles={styles}
              name={"Preview Transaction"}
            />
          </View>
        </SafeAreaView>
      )}
    </>
  );
}
