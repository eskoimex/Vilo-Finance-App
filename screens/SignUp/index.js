import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import styles from "./style";
import { Icon } from "react-native-elements";
import * as Linking from "expo-linking";
import Toast from "react-native-root-toast";
import { toastStyleFailure } from "../../components/toast";

export default function SignUp({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [focused, setFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  const handleSignUp = () => {
    if (email.length > 1 && password.length > 1) {
      navigation.navigate("Welcome", { email, password });
    } else {
      Toast.show("Please enter a valid email and password", toastStyleFailure);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/VILO-NEW-LOGO-01.png")}
          style={{ width: 57, height: 30 }}
        />
      </View>
      <View style={styles.bodyContainer}>
        <Text style={[styles.createAccount, { fontFamily: "Ubuntu_700Bold" }]}>
          {"Create an account"}
        </Text>
        <Text style={[styles.subheading, { fontFamily: "Ubuntu_400Regular" }]}>
          {"Create an account today with us now"}
        </Text>
        {/* Email Input */}
        <View style={styles.emailContainer}>
          <Text style={[styles.emailText, { fontFamily: "Ubuntu_700Bold" }]}>
            {"Email address"}
          </Text>
          <View style={[styles.emailInputContainer, focused && {borderColor: "blue"}]}>
            <Icon
              name="mail"
              type="feather"
              color="#8C8CA1"
              size={15}
              iconStyle={{ margin: 5 }}
            />
            <TextInput
              style={email.length > 20 ? styles.emailInput1 : styles.emailInput}
              onChangeText={(email) => setEmail(email)}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              multiline={true}
              placeholder={"e.g Johndoe@email.com"}
              placeholderTextColor="#8C8CA1"
            />
          </View>
        </View>
        {/* Password Input */}
        <View style={styles.passwordContainer}>
          <Text style={[styles.passwordText, { fontFamily: "Ubuntu_700Bold" }]}>{"Password"}</Text>
        <View style={[styles.passwordInputContainer, passwordFocused && {borderColor: "blue"}]}>
            <Icon
              name="lock"
              type="feather"
              color="#8C8CA1"
              size={15}
              iconStyle={{ margin: 5 }}
            />
            <TextInput
              style={styles.passwordInput}
              secureTextEntry={true}
              onFocus={() => setPasswordFocused(true)}
              onBlur={() => setPasswordFocused(false)}
              placeholder={"• • • • • • • •"}
              placeholderTextColor="#8C8CA1"
              onChangeText={(e) => setPassword(e)}
            />
          </View>
          <TouchableOpacity
            onPress={() => Linking.openURL("https://vilofinance.com/")}
          >
            <Text style={[styles.agree, { fontFamily: "Ubuntu_400Regular" }]}>
              {"By clicking on Sign Up, I agree to the"}
              <Text
                style={[
                  styles.agreeNested,
                  { fontFamily: "Ubuntu_700Bold" },
                ]}
              >
                {" Terms of Use and Privacy Policies"}
              </Text>
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.padding}>
          <TouchableOpacity onPress={handleSignUp} style={styles.signupButton}>
            <Text style={[styles.signupText, { fontFamily: "Ubuntu_700Bold" }]}>{"Sign up"}</Text>
          </TouchableOpacity>
        </View>
        {/* <View style={styles.googleContainer}>
          <TouchableOpacity
            onPress={() => console.log("Press Enter")}
            style={styles.googleButton}
          >
            <Image
              style={styles.googleImage}
              source={require("../../assets/google.png")}
            />
            <Text style={styles.googleText}>{"Continue with Google"}</Text>
          </TouchableOpacity>
        </View> */}
        <Text style={[styles.haveAccount, { marginTop: 10,fontFamily: "Ubuntu_400Regular"}]}>
          {"I have an account?"}
          <Text
            style={[styles.haveAccountNested, { fontFamily: "Ubuntu_700Bold" }]}
            onPress={() => navigation.navigate("SignIn")}
          >
            {" Log in"}
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
}
