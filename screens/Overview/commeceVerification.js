import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Image,
  Pressable,
} from "react-native";
import React from "react";
import { Icon } from "react-native-elements";
import styles from "./style";
import { useSelector } from "react-redux";

export default function CommenceVerification({ navigation }) {
  const auth = useSelector((state) => state.auth);
  const user = useSelector((state) => state.user);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.top}>
          <Icon
            name="arrow-back-ios"
            type="material"
            color="gray"
            size={20}
            iconStyle={{ marginTop: 20 }}
            onPress={() => navigation.goBack()}
          />
          <Text style={[styles.identity, {fontFamily: "Ubuntu_700Bold"}]}>{"Identity Verification"}</Text>
        </View>

        <View style={styles.VerificationContainer}>
          <View style={{margin: 20}}>
            <Text style={[styles.identityText1, {fontFamily: "Ubuntu_700Bold"}]}>{"Identity Verification"}</Text>
            <Text style={[styles.identityText2, {fontFamily: "Ubuntu_400Regular"}]}>
              {"Complete identity verification to\nunlock all features"}
            </Text>
          </View>
          <Image
            source={
              user?.user[0]?.isPhoneVerified
                ? require("../../assets/70.png")
                : require("../../assets/25.png")
            }
            style={{ marginTop: 30, width: 35, height: 35 }}
          />      
          </View>
        <View style={styles.verify}>
          <View style={styles.verifyContainer}>
            <Icon
              name="ios-mail-unread-outline"
              type="ionicon"
              color="#000000"
              size={25}
              iconStyle={{ marginTop: 30, marginRight: 15 }}
            />
            <View style={{marginTop: 20}}>
              <Text style={[styles.identityText1, {fontFamily: "Ubuntu_700Bold"}]}>{"Verify Email address"}</Text>
              <Text style={[styles.identityText2, {fontFamily: "Ubuntu_400Regular"}]}>
                {"You have verified your email\naddress already"}
              </Text>
            </View>
          </View>

          <Icon
            name="check-circle"
            type="material"
            color="#32CD32"
            size={20}
            iconStyle={{ marginTop: 40 }}
          />
        </View>

        <TouchableOpacity
          style={styles.verify}
          onPress={() =>
            !user?.user[0]?.isPhoneVerified && navigation.navigate("LegalName")
          }
        >
          <View style={styles.verifyContainer}>
            <Icon
              name="perm-identity"
              type="material"
              color="gray"
              size={27}
              iconStyle={{ marginTop: 30, marginRight: 15 }}
            />
            <View style={{marginTop: 20}}>
              <Text style={[styles.identityText1, {fontFamily: "Ubuntu_700Bold"}]}>{"Personal Information"}</Text>
              {user?.user[0]?.isPhoneVerified ? (
                <Text style={[styles.identityText2, {fontFamily: "Ubuntu_400Regular"}]}>
                  {"You have verified your personal information already"}
                </Text>
              ) : (
                <Text style={[styles.identityText2, {fontFamily: "Ubuntu_400Regular"}]}>
                  {"You have verified your email\naddress already"}
                </Text>
              )}
            </View>
          </View>
          <Icon
            name="check-circle"
            type="material"
            color={user?.user[0]?.isPhoneVerified ? "#32CD32" : "#C4C4C4"}
            size={20}
            iconStyle={{ marginTop: 40 }}
          />
        </TouchableOpacity>

        <Pressable
          style={styles.verify}
          onPress={() =>
            user?.user[0]?.isPhoneVerified &&
            !user?.user[0]?.isDocumentVerified &&
            navigation.navigate("Identity")
          }
        >
          <View style={styles.verifyContainer}>
            <Icon
              name="account-box-outline"
              type="material-community"
              color="gray"
              size={25}
              iconStyle={{ marginTop: 30, marginRight: 15 }}
            />
            <View style={{marginTop: 20}}>
              <Text style={[styles.identityText1, {fontFamily: "Ubuntu_700Bold"}]}>
                {"Identity Verification"}
              </Text>
              <Text style={[styles.identityText2, {fontFamily: "Ubuntu_400Regular"}]}>
                {"You have verified your email\naddress already"}
              </Text>
            </View>
          </View>
          <Icon
            name="check-circle"
            type="material"
            color={user?.user[0]?.isDocumentVerified ? "#32CD32" : "#C4C4C4"}
            size={20}
            iconStyle={{ marginTop: 40 }}
          />
        </Pressable>
      </SafeAreaView>
      {/* <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LegalName')}>
        <Text style={styles.buttonText}>{'Start Verification'}</Text >
      </TouchableOpacity > */}
    </>
  );
}
