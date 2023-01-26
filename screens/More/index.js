import {
  SafeAreaView,
  Text,
  View,
  Image,
  Pressable,
  Alert,
} from "react-native";
import React from "react";
import { Icon } from "react-native-elements";
import styles from "./style";
import { useSelector } from "react-redux";
import Toast from "react-native-root-toast";
import { toastStyleFailure, toastStyleMessage } from "../../components/toast";

export default function More({ navigation }) {
  const auth = useSelector((state) => state.auth);
  const user = useSelector((state) => state.user);
  const Name = `${user?.user[0]?.personal_info.firstName} ${user?.user[0]?.personal_info.lastName}`;
  const handleActivate = () => {
    if (user?.user[0]?.isDocumentVerified) {
      navigation.navigate("ProfileAndSettings");
    } else {
      Toast.show("Please complete your verification to access feature", toastStyleFailure);
    }
  };

  const handleTransaction = () => {
    if (user?.user[0]?.isDocumentVerified) {
      navigation.navigate("Transactions");
    } else {
      Toast.show("Please complete your verification to access feature", toastStyleFailure);
    }
  };

  return (
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
          <Text style={[styles.headerText, { fontFamily: "Ubuntu_700Bold" }]}>
            {"More"}
          </Text>
        </View>
        <View />
      </View>

      <View style={{ margin: 10 }}>
        <Pressable onPress={handleActivate}>
          <View style={styles.section1}>
            <View style={styles.sectionHeader}>
              <Image
                style={styles.profile}
                source={require("../../assets/profileAvatar.png")}
              />
              <View style={{ marginTop: 5 }}>
                {user?.user[0]?.personal_info.firstName ? (
                  <Text
                    style={[
                      styles.section1Text,
                      { fontFamily: "Ubuntu_700Bold" },
                    ]}
                  >
                    {Name.length > 25 ? `${Name.substring(0, 25)}...` : Name}
                  </Text>
                ) : (
                  <Text style={styles.section1Text}>{""}</Text>
                )}
                <Text
                  style={[
                    styles.section1SubText,
                    { fontFamily: "Ubuntu_400Regular" },
                  ]}
                >{`${user?.user[0]?.email}`}</Text>
              </View>
              <Icon
                name="arrow-forward-ios"
                type="material"
                color="#333333"
                size={20}
                iconStyle={{ paddingTop: 15 }}
              />
            </View>
          </View>
        </Pressable>

        <View style={styles.section2}>
          <Pressable style={styles.section2Details} onPress={handleTransaction}>
            <View style={styles.imageContainer}>
              {/* <Icon
              name="arrow-forward-ios"
              type="material"
              color="#0000FF"
              size={20}
              iconStyle={{ paddingRight: 15 }}
            /> */}
              <Image
                source={require("../../assets/grid.png")}
                style={{ marginRight: 10 }}
              />

              <View>
                <Text
                  style={[
                    styles.section1Text,
                    { fontFamily: "Ubuntu_700Bold" },
                  ]}
                >
                  {"Transactions"}
                </Text>
                <Text
                  style={[
                    styles.section1SubText,
                    { fontFamily: "Ubuntu_400Regular" },
                  ]}
                >
                  {"View and manage transactions"}
                </Text>
              </View>
            </View>
            <Icon
              name="arrow-forward-ios"
              type="material"
              color="#000000"
              size={20}
              iconStyle={{ paddingTop: 15 }}
            />
          </Pressable>
          <View style={styles.verticalSepperatorLine} />
          <Pressable
            style={styles.section2Details}
            onPress={() => navigation.navigate("CardTracker")}
          >
            <View style={styles.imageContainer}>
              <Icon
                name="compass"
                type="font-awesome"
                color="#000000"
                size={25}
                iconStyle={{ paddingRight: 15 }}
              />
              <View>
                <Text
                  style={[
                    styles.section1Text,
                    { fontFamily: "Ubuntu_700Bold" },
                  ]}
                >
                  {"Card Tracker"}
                </Text>
                <Text
                  style={[
                    styles.section1SubText,
                    { fontFamily: "Ubuntu_400Regular" },
                  ]}
                >
                  {"View ordered cards progress"}
                </Text>
              </View>
            </View>
            <Icon
              name="arrow-forward-ios"
              type="material"
              color="#000000"
              size={20}
              iconStyle={{ paddingTop: 15 }}
            />
          </Pressable>
          <View style={styles.verticalSepperatorLine} />
          <Pressable style={styles.section2Details} onPress={handleActivate}>
            <View />
            <View>
              <Text
                style={[styles.section1Text, { fontFamily: "Ubuntu_700Bold" }]}
              >
                {"Know Your Customer (KYC)"}
              </Text>
              <Text
                style={[
                  styles.section1SubText,
                  { fontFamily: "Ubuntu_400Regular" },
                ]}
              >
                {"View and update your customer\n details as required"}
              </Text>
            </View>
            <Icon
              name="arrow-forward-ios"
              type="material"
              color="#000000"
              size={20}
              iconStyle={{ paddingTop: 15 }}
            />
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
