import {
  SafeAreaView,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Icon } from "react-native-elements";
import styles from "./style";
import { Token } from "../../assets/data/token";
import { useSelector, useDispatch } from "react-redux";
import { Loading } from "../../components/loading";
import { HandleImage } from "../../utils/handleImage";
import ComingSoon from "../../components/comingSoon";

export default function SelectToken({ navigation }) {
  const [selected, setSelected] = useState(0);
  const assets = useSelector((state) => state.assets);

  return (
    <>
      <SafeAreaView style={styles.container}>
        {/* <View style={styles.topHeader}>
          <Text style={styles.features}>{"Select Token"}</Text>
          <Icon
            name="x"
            type="feather"
            color="gray"
            size={25}
            iconStyle={{ marginTop: 20, marginRight: 20 }}
            onPress={() => navigation.goBack()}
          />
        </View>
        <Text style={[styles.bottomText, { marginLeft: 30 }]}>
          {"Choose token of choice"}
        </Text>

        <View style={styles.search}>
          <TextInput
            style={{ marginLeft: 50 }}
            placeholder={"Search token"}
            // onChangeText={(e) => setLastname(e)}
          />
        </View>

        <ScrollView>
          {assets.isLoading ? (
            <Loading />
          ) : assets.errMess !== null ? (
            <Text style={[styles.searchTokenText, { margin: 100 }]}>
              {"Failed to load tokens!!!"}
            </Text>
          ) : (
            assets.assets.map((item, index) => (
              <TouchableOpacity
                style={
                  selected === index ? styles.tokenName1 : styles.tokenName2
                }
                key={index}
                onPress={() => {
                  setSelected(index);
                  navigation.navigate("SelectBuyMethod");
                }}
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginLeft: 10,
                  }}
                >
                  <Image
                    style={{ width: 35, height: 35 }}
                    source={HandleImage(item)}
                  />
                  <View style={{ marginLeft: 5 }}>
                    <Text style={styles.tokenNameText}>{item.assetType}</Text>
                    <Text style={styles.tokenNameSubText}>{item.label}</Text>
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
            ))
          )}
        </ScrollView> */}

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
            <Text style={[styles.headerText, {fontFamily: "Ubuntu_700Bold"}]}>{"Buy assets with cards"}</Text>
          </View>
          <View />
        </View>
        <ComingSoon />
      </SafeAreaView>
    </>
  );
}
