import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Modal,
  Alert,
  SafeAreaView
} from "react-native";
import React, { useState } from "react";
import styles from "./style";
import { Icon } from "react-native-elements";
import TopHeader from "../../components/topHeader";
import BottomButton from "../../components/bottomButton";
import {
  EmploymentStatus,
  NatureOfBusiness,
  SourceOfCrypto,
  SourceOfFunds,
} from "../../assets/data/personalInfo";
import Toast from "react-native-root-toast";
import { toastStyleFailure } from "../../components/toast";

export default function Employment({ navigation, route }) {
  const { firstName, lastName, address, postalCode, city, country } =
    route.params;
  const [employmentStatus, setEmploymentStatus] = useState("Choose Option");
  const [natureOfBusiness, setNatureOfBusiness] = useState("Choose Option");
  const [sourceOfFunds, setSourceOfFunds] = useState("Choose Option");
  const [sourceOfCrypto, setSourceOfCrypto] = useState("Choose Option");
  const [modalVisible, setModalVisible] = useState(false);
  const [modalState, setModalState] = useState("");

  const modalData = () => {
    if (modalState === "employmentStatus") return EmploymentStatus;
    else if (modalState === "natureOfBusiness") return NatureOfBusiness;
    else if (modalState === "sourceOfFunds") return SourceOfFunds;
    else if (modalState === "sourceOfCrypto") return SourceOfCrypto;
  };

  const onItemSelected = (value) => {
    setModalVisible(false);
    if (modalState === "employmentStatus") setEmploymentStatus(value);
    else if (modalState === "natureOfBusiness") setNatureOfBusiness(value);
    else if (modalState === "sourceOfFunds") setSourceOfFunds(value);
    else if (modalState === "sourceOfCrypto") setSourceOfCrypto(value);
    setModalState("");
  };

  const handleSubmit = () => {
    if (
      employmentStatus !== "Choose Option" &&
      natureOfBusiness !== "Choose Option" &&
      sourceOfFunds !== "Choose Option" &&
      sourceOfCrypto !== "Choose Option"
    ) {
      navigation.navigate("PhoneNumber", {
        firstName,
        lastName,
        address,
        postalCode,
        city,
        country,
        employmentStatus,
        natureOfBusiness,
        sourceOfFunds,
        sourceOfCrypto,
      });
    } else {
      Toast.show("Input field is required!", toastStyleFailure);
    }
  };

  return (
    <>
      <SafeAreaView style={{ backgroundColor: "#B9D9EB" }}>
        <TopHeader
          component={"employment"}
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
              Toast.show("Modal has been closed.", toastStyleFailure);
              setModalVisible(false);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <FlatList
                  data={modalData()}
                  renderItem={({ item, index }) => (
                    <TouchableOpacity
                      onPress={() => onItemSelected(item?.name)}
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
            <Text style={[styles.legalName, {fontFamily: "Ubuntu_700Bold"}]}>{"Employment Details"}</Text>
            <View style={styles.inputContainer}>
              <Text style={[styles.inputText, {fontFamily: "Ubuntu_700Bold"}]}>{"Employment Status"}</Text>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(!modalVisible);
                  setModalState("employmentStatus");
                }}
              >
                <View style={styles.onPressContainer}>
                  <Text style={{ marginLeft: 15, color: "gray" }}>
                    {employmentStatus}
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
            <View style={styles.inputContainer}>
              <Text style={[styles.inputText, {fontFamily: "Ubuntu_700Bold"}]}>{"Nature of Business"}</Text>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(!modalVisible);
                  setModalState("natureOfBusiness");
                }}
              >
                <View style={styles.onPressContainer}>
                  <Text style={{ marginLeft: 15, color: "gray" }}>
                    {natureOfBusiness}
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
            <View style={styles.inputContainer}>
              <Text style={[styles.inputText, {fontFamily: "Ubuntu_700Bold"}]}>{"Source of Funds"}</Text>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(!modalVisible);
                  setModalState("sourceOfFunds");
                }}
              >
                <View style={styles.onPressContainer}>
                  <Text style={{ marginLeft: 15, color: "gray" }}>
                    {sourceOfFunds}
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
            <View style={styles.inputContainer}>
              <Text style={[styles.inputText, {fontFamily: "Ubuntu_700Bold"}]}>{"Source of Crypto"}</Text>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(!modalVisible);
                  setModalState("sourceOfCrypto");
                }}
              >
                <View style={styles.onPressContainer}>
                  <Text style={{ marginLeft: 15, color: "gray" }}>
                    {sourceOfCrypto}
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
