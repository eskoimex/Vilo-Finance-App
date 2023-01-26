import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  ImageBackground
} from "react-native";
import React, { useState } from "react";
import { styles } from "./style";
import { Icon } from "react-native-elements";
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "../../redux/actions/loginUser";

export default function NewSignIn({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const creds = { email, password };

  const handleLogin = () => {
    if (email.length > 1 && password.length > 1) {
      dispatch(loginUser(creds));
    } else {
      Alert.alert("Credentials cannot be empty");
    }
  };

  return (
    <ImageBackground
      style={{ flex: 1 }}
      source={require("../../assets/loginBackground.png")}
    >
      <View style={styles.imageContainer}>
        <Image
          style={styles.logo}
          source={require("../../assets/viloLogoNew.png")}
        />
      </View>
      <View style={styles.body}>
        <View style={styles.bodyContainer}>
          <Text style={styles.welcome}>{"Welcome back"}</Text>
          <Text style={styles.subheading}>
            {"Log into your account"}
          </Text>

          {/* Email Input */}
          <View style={styles.emailContainer}>
            <Text style={styles.emailText}>{"Email address"}</Text>
            <View style={styles.emailInputContainer}>
              <Icon
                name="mail"
                type="feather"
                color="gray"
                size={15}
                iconStyle={{ margin: 5 }}
              />
              <TextInput
                style={styles.emailInput}
                onChangeText={(email) => setEmail(email)}
              />
            </View>
          </View>

          {/* Password Input */}
          <View style={styles.passwordContainer}>
            <Text style={styles.passwordText}>{"Password"}</Text>
            <View style={styles.passwordInputContainer}>
              <Icon
                name="lock"
                type="feather"
                color="gray"
                size={15}
                iconStyle={{ margin: 5 }}
              />
              <TextInput
                style={styles.passwordInput}
                secureTextEntry={true}
                onChangeText={(password) => setPassword(password)}
              />
            </View>
            <Text style={styles.forgottenPassword}>{"Forgotten password"}</Text>
          </View>

          <View style={styles.padding}>
            <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
              {auth.isLoading ? (
                <ActivityIndicator size="large" color="#4682B4" />
              ) : (
                <Text style={styles.loginText}>{"Log in"}</Text>
              )}
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text style={styles.createAccount}>{"Create an account"}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}
