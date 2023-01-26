import { SafeAreaView, Text, View, Image, Switch, TouchableOpacity } from "react-native";
import React from "react";
import { Icon } from "react-native-elements";
import { useSelector } from "react-redux";
import styles from "./style";

export default function ProfileAndSettings({ navigation }) {
  const user = useSelector((state) => state.user);
  const [isEnabled, setIsEnabled] = React.useState(true);
  const [isTransactionEnabled, setIsTransactionEnabled] = React.useState(true);

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const toggleTransactionSwitch = () =>
    setIsTransactionEnabled((previousState) => !previousState);

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
          <Text style={styles.headerText}>{"Profile and Settings"}</Text>
        </View>
        <View />
      </View>

      <View style={styles.profileContainer}>
        <Image
          style={{ width: 50, height: 50 }}
          source={require("../../assets/profileAvatar.png")}
        />
        {user?.user[0]?.firstname ? (
          <Text
            style={styles.nameText}
          >{`${user?.user[0]?.firstname} ${user?.user[0]?.lastname}`}</Text>
        ) : (
          <Text style={styles.nameText}>{""}</Text>
        )}
      </View>

      <View>
        <Text style={styles.security}>{"Security settings"}</Text>

        <View style={styles.profileSection2}>
          <View style={styles.section2Details}>
            <View style={styles.imageContainer}>
              <Icon
                name="pending"
                type="material"
                //   color="blue"
                size={20}
                iconStyle={{ padding: 5 }}
              />
              <TouchableOpacity
                onPress={() => navigation.navigate("ForgotPassword")}
              >
                <Text style={styles.profileText}>{"Password reset"}</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.verticalSepperatorLine}></View>
          <View style={styles.section2Details}>
            <View style={styles.imageContainer}>
              <Icon
                name="lock-outline"
                type="material"
                color="#333333"
                size={20}
                iconStyle={{ padding: 5 }}
              />
              <Text style={styles.profileText}>{"PIN reset"}</Text>
            </View>
          </View>
          {/* <View style={styles.verticalSepperatorLine}></View>
          <View style={styles.section2Details}>
            <View style={styles.imageContainer}>
              <Icon
                name="fingerprint"
                type="material"
                color="#333333"
                size={20}
                iconStyle={{ padding: 5 }}
              />
              <Text style={styles.profileText}>{"Biometric lock"}</Text>
            </View>
            <Switch
              trackColor={{ false: "#767577", true: "#000000" }}
              thumbColor={"#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
          <View style={styles.verticalSepperatorLine}></View>
          <View style={styles.section2Details}>
            <View style={styles.imageContainer}>
              <Icon
                name="fingerprint"
                type="material"
                //   color="blue"
                size={20}
                iconStyle={{ padding: 5 }}
              />
              <Text style={styles.profileText}>{"Biometric transaction"}</Text>
            </View>
            <Switch
              trackColor={{ false: "#767577", true: "#000000" }}
              thumbColor={"#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleTransactionSwitch}
              value={isTransactionEnabled}
            />
          </View> */}
        </View>
      </View>
    </SafeAreaView>
  );
}
