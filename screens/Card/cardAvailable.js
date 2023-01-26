import {
  SafeAreaView,
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  Switch,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { Icon } from "react-native-elements";
import styles from "./style";

export default function CardAvailable({ navigation }) {
  const [virtual, setVirtual] = useState(true);
  const [blockCard, setBlockCard] = React.useState(true);
  const toggleSwitch = () => setBlockCard((previousState) => !previousState);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{"Cards"}</Text>
        {/* <View style={styles.imageContainer}>
          <Icon
            name="notification"
            type="entypo"
            size={17}
            color="#022141"
            iconStyle={styles.headerImage2}
          /> */}
        <Image
          style={styles.headerImage3}
          source={require("../../assets/profileAvatar.png")}
        />
        {/* </View> */}
      </View>

      <View style={styles.pills}>
        {virtual ? (
          <>
            <TouchableOpacity
              style={styles.pillsContainer}
              onPress={() => setVirtual(true)}
            >
              <Text style={styles.pillsText}>{"Virtual"}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.pillsContainer1}
              onPress={() => setVirtual(false)}
            >
              <Text style={styles.pillsText1}>{"Physical"}</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <TouchableOpacity
              style={styles.pillsContainer1}
              onPress={() => setVirtual(true)}
            >
              <Text style={styles.pillsText1}>{"Virtual"}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.pillsContainer}
              onPress={() => setVirtual(false)}
            >
              <Text style={styles.pillsText}>{"Physical"}</Text>
            </TouchableOpacity>
          </>
        )}
      </View>

      {virtual ? (
        <View style={styles.dashboard}>
          {/* <View style={styles.dashboard}> */}
          {Platform.OS === "android" ? (
            <View style={styles.dashboardImage}>
              <ImageBackground
                // style={styles.dashboardImage}
                source={require("../../assets/overlay.png")}
              >
                <View style={styles.headerContainer}>
                  <Text>{""}</Text>
                  <Image source={require("../../assets/cardMenu.png")} />
                </View>
                <Text style={styles.cardHeader}>
                  {"12,980 "}
                  <Text style={styles.innerCardHeader}>{"USDT"}</Text>
                </Text>
                <Text style={styles.cardNumber}>
                  {"1234  2345  3456  4567"}
                </Text>
                <View style={styles.headerContainer}>
                  <Text>{""}</Text>
                  <Text style={styles.virtual}>{"Virtual"}</Text>
                </View>
                <View style={styles.bottomContainer}>
                  <Text style={styles.virtual}>{"08/25"}</Text>
                  <Image source={require("../../assets/mastercard.png")} />
                </View>
              </ImageBackground>
            </View>
          ) : (
            <ImageBackground
              style={styles.dashboardImage}
              source={require("../../assets/overlay.png")}
            >
              <View style={styles.headerContainer}>
                <Text>{""}</Text>
                <Image source={require("../../assets/cardMenu.png")} />
              </View>
              <Text style={styles.cardHeader}>
                {"12,980 "}
                <Text style={styles.innerCardHeader}>{"USDT"}</Text>
              </Text>
              <Text style={styles.cardNumber}>{"1234  2345  3456  4567"}</Text>
              <View style={styles.headerContainer}>
                <Text>{""}</Text>
                <Text style={styles.virtual}>{"Virtual"}</Text>
              </View>
              <View style={styles.bottomContainer}>
                <Text style={styles.virtual}>{"08/25"}</Text>
                <Image source={require("../../assets/mastercard.png")} />
              </View>
            </ImageBackground>
          )}
          <Image
            style={styles.card}
            source={require("../../assets/cardIcon.png")}
          />
          {/* </View> */}
        </View>
      ) : (
        <View style={styles.dashboard}>
          {Platform.OS === "android" ? (
            <View style={styles.dashboardImage}>
              <ImageBackground
                // style={styles.dashboardImage}
                source={require("../../assets/viloOverlay.png")}
              >
                <View style={styles.headerContainer}>
                  <Text>{""}</Text>
                  <Image source={require("../../assets/cardMenu.png")} />
                </View>
                <Text style={styles.cardHeader}>
                  {"12,980 "}
                  <Text style={styles.innerCardHeader}>{"USDT"}</Text>
                </Text>
                <Text style={styles.cardNumber}>
                  {"1234  2345  3456  4567"}
                </Text>
                <View style={styles.headerContainer}>
                  <Text>{""}</Text>
                  <Text style={styles.virtual}>{"Physical"}</Text>
                </View>
                <View style={styles.bottomContainer}>
                  <Text style={styles.virtual}>{"08/25"}</Text>
                  <Image source={require("../../assets/mastercard.png")} />
                </View>
              </ImageBackground>
            </View>
          ) : (
            <ImageBackground
              style={styles.dashboardImage}
              source={require("../../assets/viloOverlay.png")}
            >
              <View style={styles.headerContainer}>
                <Text>{""}</Text>
                <Image source={require("../../assets/cardMenu.png")} />
              </View>
              <Text style={styles.cardHeader}>
                {"12,980 "}
                <Text style={styles.innerCardHeader}>{"USDT"}</Text>
              </Text>
              <Text style={styles.cardNumber}>{"1234  2345  3456  4567"}</Text>
              <View style={styles.headerContainer}>
                <Text>{""}</Text>
                <Text style={styles.virtual}>{"Physical"}</Text>
              </View>
              <View style={styles.bottomContainer}>
                <Text style={styles.virtual}>{"08/25"}</Text>
                <Image source={require("../../assets/mastercard.png")} />
              </View>
            </ImageBackground>
          )}

          <Image
            style={styles.card}
            source={require("../../assets/cardIcon2.png")}
          />
        </View>
      )}

      <View style={{ marginTop: 10 }}>
        <View style={styles.cardDetails}>
          <View style={styles.imageContainer}>
            <Icon
              name="margin"
              type="material"
              color="#000000"
              size={20}
              iconStyle={{ paddingRight: 10 }}
            />
            <Text style={styles.cardDetailsText}>{"Card details"}</Text>
          </View>
          <Icon
            name="arrow-forward-ios"
            type="material"
            color="#000000"
            size={20}
            iconStyle={{ paddingRight: 10 }}
          />
        </View>
        <View style={styles.verticalSepperatorLine} />

        <View style={styles.cardDetails}>
          <View style={styles.imageContainer}>
            {/* <Icon
              name="view-agenda"
              // name="view-stream"
              type="typicons"
              color="#0000FF"
              size={20}
              iconStyle={{ paddingRight: 10 }}
            /> */}
            <Image
              source={require("../../assets/grid.png")}
              style={{ marginRight: 5 }}
            />
            <Text style={styles.cardDetailsText}>{"Transactions"}</Text>
          </View>
          <Icon
            name="arrow-forward-ios"
            type="material"
            color="#000000"
            size={20}
            iconStyle={{ paddingRight: 10 }}
          />
        </View>
        <View style={styles.verticalSepperatorLine} />

        <View style={styles.cardDetails}>
          <View style={styles.imageContainer}>
            <Icon
              name="block"
              type="material"
              color="#000000"
              size={20}
              iconStyle={{ paddingRight: 10 }}
            />
            <Text style={styles.cardDetailsText}>{"Block card"}</Text>
          </View>
          <Switch
            trackColor={{ false: "#767577", true: "#000000" }}
            thumbColor={"#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={blockCard}
          />
        </View>
        <View style={styles.verticalSepperatorLine} />

        <View style={styles.cardDetails}>
          <View style={styles.imageContainer}>
            <Icon
              name="ios-trash"
              type="ionicon"
              color="#E63946"
              size={20}
              iconStyle={{ paddingRight: 10 }}
            />
            <Text style={styles.removeCard}>{"Remove Card"}</Text>
          </View>
          <View />
        </View>
      </View>
    </SafeAreaView>
  );
}
