import React, { useEffect, useRef, useState } from "react";
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Alert,
  Platform,
  View,
  ActivityIndicator,
} from "react-native";
import ReactNativePinView from "react-native-pin-view";
import { Icon } from "react-native-elements";
import { ThreeBarLevel2 } from "../../components/progressBar";
import styles from "./style";
import { useSelector, useDispatch } from "react-redux";
import { signUpUser } from "../../redux/actions/signupUser";
import { Layout } from "../../components/layout";
import Toast from "react-native-root-toast";
import { toastStyleFailure } from "../../components/toast";

export default function SetPin({ navigation, route }) {
  const { email, password } = route.params;
  const pinView = useRef(null);
  const [showRemoveButton, setShowRemoveButton] = useState(false);
  const [enteredPin, setEnteredPin] = useState("");
  const [showCompletedButton, setShowCompletedButton] = useState(false);
  const creds = { email, password, pin: enteredPin };
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (enteredPin.length > 0) {
      setShowRemoveButton(true);
    } else {
      setShowRemoveButton(false);
    }
    if (enteredPin.length === 4) {
      setShowCompletedButton(true);
    } else {
      setShowCompletedButton(false);
    }
  }, [enteredPin]);

  useEffect(() => {
    if (auth.isAccountCreated) {
      navigation.navigate("VerifyEmail");
    }
  }, [auth.isAccountCreated]);

  const handleSignUp = () => {
    if (showCompletedButton) {
      dispatch(signUpUser(creds));
    } else {
      Toast.show("Input field is required!", toastStyleFailure);
    }
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text style={[styles.header, { fontFamily: "Ubuntu_700Bold" }]}>{"Set PIN"}</Text>
        <ThreeBarLevel2 margin={10} />
        <Layout margin={20} />
        <Image style={styles.image} source={require("../../assets/lock.png")} />
        <Text style={[styles.subHeader, { fontFamily: "Ubuntu_700Bold" }]}>{"Enter new PIN"}</Text>
        <ReactNativePinView
          inputSize={Platform.OS === "ios" ? 20 : 15}
          ref={pinView}
          pinLength={4}
          buttonSize={Platform.OS === "ios" ? 60 : 50}
          onValueChange={(value) => setEnteredPin(value)}
          buttonAreaStyle={{
            marginLeft: 50,
            marginRight: 50,
          }}
          inputAreaStyle={{
            marginBottom: 24,
          }}
          inputViewEmptyStyle={{
            backgroundColor: "#C4C4C4",
            // borderWidth: 1,
            // borderColor: "#FFF",
          }}
          inputViewFilledStyle={{
            backgroundColor: "#000000",
          }}
          buttonViewStyle={{
            // borderWidth: 1,
            backgroundColor: "rgba(209, 213, 219, 0.5)",
            // borderColor: "#FFF",
          }}
          buttonTextStyle={{
            color: "#022141",
          }}
          onButtonPress={(key) => {
            if (key === "custom_right") {
              pinView.current.clear();
            }
          }}
          customRightButton={
            showRemoveButton && (
              <View style={styles.showRemoveButton}>
                <Icon
                  name={"backspace-outline"}
                  size={27}
                  color={"#022141"}
                  type="ionicon"
                />
              </View>
            )
          }
          customLeftButton={
            showCompletedButton && (
              <View style={styles.showRemoveButton}>
                <Icon
                  name={"lock-closed-outline"}
                  size={27}
                  type="ionicon"
                  color={"#022141"}
                />
              </View>
            )
          }
        />
      </SafeAreaView>
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        {auth.isLoading ? (
          <ActivityIndicator size="large" color="#4682B4" />
        ) : (
          <Text style={[styles.buttonText, { fontFamily: "Ubuntu_700Bold" }]}>{"Set up PIN"}</Text>
        )}
      </TouchableOpacity>
    </>
  );
}
