import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Modal,
  Alert,
  SafeAreaView,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import styles from "./style";
import { Icon } from "react-native-elements";
import BottomButton from "../../components/bottomButton";
import TopHeader from "../../components/topHeader";
import { Countries } from "../../assets/data/countryList";
import Toast from "react-native-root-toast";
import { toastStyleFailure, toastStyleMessage } from "../../components/toast";

export default function Residential({ navigation, route }) {
  const { firstName, lastName } = route.params;
  const [modalVisible, setModalVisible] = useState(false);
  const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("Choose Option");
  const [filterCountryList, setFilterCountryList] = useState(Countries);
  const [focused, setFocused] = useState(false);
  const [zipFocused, setZipFocused] = useState(false);
  const [cityFocused, setCityFocused] = useState(false);

  const filterCountries = (value) => {
    let filterData =
      Countries && Countries?.length > 0
        ? Countries?.filter((data) =>
            data?.name?.toLowerCase()?.startsWith(value?.toLowerCase())
          )
        : [];

    setFilterCountryList([...filterData]);
    // setModalVisible(true);
  };

  const onCountrySelected = (value) => {
    setModalVisible(false);
    setCountry(value);
    // setFilterCountryList([]);
  };

  const handleSubmit = () => {
    if (
      address.length > 0 &&
      postalCode.length > 0 &&
      city.length > 0 &&
      country !== "Choose Option"
    ) {
      navigation.navigate("Employment", {
        firstName,
        lastName,
        address,
        postalCode,
        city,
        country,
      });
    } else {
      Toast.show("Input field is required!", toastStyleFailure);
    }
  };

  return (
    <>
      <SafeAreaView style={{ backgroundColor: "#B9D9EB" }}>
        <TopHeader
          component={"residential"}
          goBack={() => navigation.goBack()}
          styles={styles}
          name={"Personal Information"}
        />

        <View style={styles.bodyContainer}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Toast.show("Modal has been closed.", toastStyleMessage);
              setModalVisible(false);
            }}
          >
            {/* <KeyboardAvoidingView style={styles.centeredView} behavior={Platform.OS === "ios" ? "padding" : "height"}> */}
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <TextInput
                  style={{ marginBottom: 20 }}
                  placeholder={"Choose option"}
                  onChangeText={filterCountries}
                />
                <FlatList
                  data={filterCountryList}
                  renderItem={({ item, index }) => (
                    <TouchableOpacity
                      onPress={() => onCountrySelected(item?.name)}
                    >
                      <View style={styles.centeredView}>
                        <Text style={styles.countryText}>
                          {item?.name || ""}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  )}
                  keyExtractor={(item) => item.name}
                />
                <TouchableOpacity
                  style={{
                    backgroundColor: "#000000",
                    height: 40,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 10,
                    padding: 10,
                    elevation: 2,
                  }}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.textStyle}>Close</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>

          <View style={styles.marginx2}>
            <Text style={[styles.legalName, { fontFamily: "Ubuntu_700Bold" }]}>
              {"Residential Address"}
            </Text>
            <View style={styles.inputContainer}>
              <Text
                style={[styles.inputText, { fontFamily: "Ubuntu_700Bold" }]}
              >
                {"Address Line 1"}
              </Text>
              <View
                style={[
                  styles.inputInputContainer,
                  focused && { borderColor: "blue" },
                ]}
              >
                <TextInput
                  style={styles.inputInput}
                  placeholder={"Address"}
                  multiline={true}
                  onFocus={() => setFocused(true)}
                  onBlur={() => setFocused(false)}
                  onChangeText={(e) => setAddress(e)}
                />
              </View>
            </View>
            <View style={styles.inputContainer}>
              <Text
                style={[styles.inputText, { fontFamily: "Ubuntu_700Bold" }]}
              >
                {"Postal Code / ZIP"}
              </Text>
              <View
                style={[
                  styles.inputInputContainer,
                  zipFocused && { borderColor: "blue" },
                ]}
              >
                <TextInput
                  style={styles.inputInput}
                  placeholder={"Enter your postal or zip code"}
                  multiline={true}
                  onFocus={() => setZipFocused(true)}
                  onBlur={() => setZipFocused(false)}
                  onChangeText={(e) => setPostalCode(e)}
                />
              </View>
            </View>
            <View style={styles.inputContainer}>
              <Text
                style={[styles.inputText, { fontFamily: "Ubuntu_700Bold" }]}
              >
                {"City"}
              </Text>
              <View
                style={[
                  styles.inputInputContainer,
                  cityFocused && { borderColor: "blue" },
                ]}
              >
                <TextInput
                  style={styles.inputInput}
                  placeholder={"Enter your city"}
                  multiline={true}
                  onFocus={() => setCityFocused(true)}
                  onBlur={() => setCityFocused(false)}
                  onChangeText={(e) => setCity(e)}
                />
              </View>
            </View>
            <View style={styles.inputContainer}>
              <Text
                style={[styles.inputText, { fontFamily: "Ubuntu_700Bold" }]}
              >
                {"Country"}
              </Text>
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <View style={styles.onPressContainer}>
                  {/* <TextInput
                    style={styles.countryInput}
                    placeholder={'Choose option'}
                    value={country}
                    editable={false}
                    selectTextOnFocus={false}
                  // onChangeText={}
                  /> */}
                  <Text style={{ marginLeft: 15, color: "gray" }}>
                    {country}
                  </Text>
                  <Icon
                    name="arrow-forward-ios"
                    type="material"
                    color="gray"
                    size={20}
                    iconStyle={{ marginRight: 15 }}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>

      <View style={styles.container}>
        <BottomButton
          navigation={handleSubmit}
          styles={styles}
          name={"Continue"}
        />
      </View>
    </>
  );
}
