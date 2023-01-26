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

export default function TokenSelect({
  navigation,
  setTokenPage,
  first,
  setFirstToken,
  setFirstTokenName,
  setSecondToken,
  setSecondTokenName,
}) {
  const [selected, setSelected] = useState(-1);
  const assets = useSelector((state) => state.assets);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.topHeader}>
          <Text style={styles.features}>{"Select Token"}</Text>
          <Icon
            name="x"
            type="feather"
            color="gray"
            size={25}
            iconStyle={{ marginTop: 20, marginRight: 20 }}
            // onPress={() => navigation.goBack()}
            onPress={() => setTokenPage(false)}
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
                onPress={
                  first
                    ? () => {
                        setSelected(index);
                        setFirstToken(HandleImage(item));
                        setFirstTokenName(item.assetType);
                        setTokenPage(false);
                      }
                    : () => {
                        setSelected(index);
                        setSecondToken(HandleImage(item));
                        setSecondTokenName(item.assetType);
                        setTokenPage(false);
                      }
                }
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
                  {/* {item.name ? ( */}
                  <View style={{ marginLeft: 5 }}>
                    <Text style={styles.tokenNameText}>{item.assetType}</Text>
                    <Text style={styles.tokenNameSubText}>{item.label}</Text>
                  </View>
                  {/* ) : (
                  <View style={{ marginLeft: 5, marginTop: 5 }}>
                    <Text style={styles.tokenNameSubText}>{item.curency}</Text>
                  </View>
                )} */}
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
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
