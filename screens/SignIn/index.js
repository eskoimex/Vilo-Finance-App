import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { styles } from "./style";
import { Icon } from "react-native-elements";
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "../../redux/actions/loginUser";
import Toast from "react-native-root-toast";
import { toastStyleFailure } from "../../components/toast";

export default function SignIn({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [focused, setFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const creds = { email, password };

  const handleLogin = () => {
    if (email.length > 1 && password.length > 1) {
      dispatch(loginUser(creds));
    } else {
      Toast.show("Credentials cannot be empty", toastStyleFailure);
    }
  };

  const handleForgotPassword = () => {
    navigation.navigate("ForgotPassword");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../../assets/viloBlack.png")}
        />
      </View>
      <View style={styles.bodyContainer}>
        <Text style={[styles.welcome, { fontFamily: "Ubuntu_700Bold" }]}>
          {"Welcome back"}
        </Text>
        <Text style={[styles.subheading, { fontFamily: "Ubuntu_400Regular" }]}>
          {"Log into your account to have access"}
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
              style={
                email.length > 20 ? styles.emailInput1 : styles.emailInput
              }
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
          <Text style={[styles.passwordText, { fontFamily: "Ubuntu_700Bold" }]}>
            {"Password"}
          </Text>
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
              onChangeText={(password) => setPassword(password)}
              placeholder={"• • • • • • • •"}
              placeholderTextColor="#8C8CA1"
            />
          </View>
          <View style={styles.forgottenPasswordContainer}>
            <View />
            <TouchableOpacity onPress={handleForgotPassword}>
              <Text
                style={[
                  styles.forgottenPassword,
                  { fontFamily: "Ubuntu_400Regular" },
                ]}
              >
                {"Forgotten password"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.padding}>
          <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
            {auth.isLoading ? (
              <ActivityIndicator size="large" color="#4682B4" />
            ) : (
              <Text
                style={[styles.loginText, { fontFamily: "Ubuntu_700Bold" }]}
              >
                {"Log in"}
              </Text>
            )}
          </TouchableOpacity>
        </View>

        {/* <View style={styles.padding}>
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

        <TouchableOpacity
          onPress={() => navigation.navigate("SignUp")}
          style={{ marginTop: 10 }}
        >
          <Text
            style={[styles.createAccount, { fontFamily: "Ubuntu_700Bold" }]}
          >
            {"Create an account"}
          </Text>
        </TouchableOpacity>
      </View>

      {/* <View style={styles.fingerprintContainer}>
        <Image
          style={styles.fingerprintImage}
          source={require("../../assets/fingerprint.png")}
        />
      </View> */}
    </SafeAreaView>
  );
}
