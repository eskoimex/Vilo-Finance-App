import React from "react";
import { View, Text, Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { Icon } from "react-native-elements";
import {
  OverviewScreenNavigator,
  WalletScreenNavigator,
  FeatureScreenNavigator,
  CardScreenNavigator,
  MoreScreenNavigator,
} from "./StackNavigator";
import UserInactivity from "react-native-user-inactivity";
import { logoutUser } from "../redux/actions/logoutUser";
import { useDispatch } from "react-redux";

const Tab = createBottomTabNavigator();
const fontFamily =
  Platform.OS === "android" ? "sans-serif-condensed" : "Avenir Next";

// used to hide bottom tab for all Home screens except Home
const setTabBarVisible = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? "Home";
  if (routeName === "Home") {
    return true;
  } else {
    return false;
  }
};

// used to hide bottom tab for card screen
const setCardTabBarVisible = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? "Card";
  if (
    routeName == "Card"
    // ||
    // routeName == "CardPreview" ||
    // routeName == "Confirm"
  ) {
    return true;
  } else {
    return false;
  }
};

// used to hide bottom tab for features screen
const setFeaturesTabBarVisible = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? "Features";
  if (routeName == "Features") {
    return true;
  } else {
    return false;
  }
};

// used to hide bottom tab for features screen
const setWalletTabBarVisible = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? "Features";
  if (routeName == "Features") {
    return true;
  } else {
    return false;
  }
};
 
export const BottomTabNavigator = () => {
  const [active, setActive] = React.useState(true);
  const [timer, setTimer] = React.useState(500000);
  const dispatch = useDispatch();

  React.useEffect(() => {
    // logout User when session times out
    if (active === false) {
      dispatch(logoutUser("Session timed out\nPlease login again"));
    }
  }, [active])

  return (
    <UserInactivity
      isActive={active}
      timeForInactivity={timer}
      onAction={(isActive) => {
        setActive(isActive);
      }}
      style={{ flex: 1 }}
    >
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === "Home") {
              return (
                <Icon
                  name={focused ? "home" : "home-outline"}
                  size={size}
                  color={color}
                  type="ionicon"
                />
              );
            }
            if (route.name === "Wallet") {
              return (
                <Icon
                  name={focused ? "wallet" : "wallet-outline"}
                  size={size}
                  color={color}
                  type="ionicon"
                />
              );
            }
            if (route.name === "Features") {
              return (
                // <View style={{ backgroundColor: 'blue', position: 'absolute', bottom: Platform.OS === 'ios' ? -8 : -14, borderRadius: 50 }}>
                //     <Icon name={"add"} size={40} color={'white'} type="material" iconStyle={{}} />
                // </View>
                <Icon
                  name={focused ? "add-circle" : "add-circle-outline"}
                  size={size}
                  color={color}
                  type="ionicon"
                />
              );
            }
            if (route.name === "Cards") {
              return (
                <Icon
                  name={focused ? "card" : "card-outline"}
                  size={size}
                  color={color}
                  type="ionicon"
                />
              );
            }
            if (route.name === "More") {
              return (
                <Icon
                  name={focused ? "grid" : "grid-outline"}
                  size={size}
                  color={color}
                  type="ionicon"
                />
              );
            }
          },
        })}
        tabBarOptions={{
          labelStyle: { fontSize: 15, fontWeight: "bold", fontFamily },
          activeTintColor: "#000000",
          inactiveTintColor: "#8C8CA1",
          // showLabel: false
        }}
      >
        <Tab.Screen
          name="Home"
          component={OverviewScreenNavigator}
          options={({ route }) => ({
            tabBarVisible: setTabBarVisible(route, 0),
          })}
        />
        <Tab.Screen name="Wallet" component={WalletScreenNavigator} />
        {/* <Tab.Screen
        name="Add"
        component={AddScreenNavigator}
        options={() => ({
          title: "",
        })}
      /> */}
        <Tab.Screen
          name="Features"
          component={FeatureScreenNavigator}
          options={({ route }) => ({
            tabBarVisible: setFeaturesTabBarVisible(route, 0),
          })}
        />
        <Tab.Screen
          name="Cards"
          component={CardScreenNavigator}
          options={({ route }) => ({
            tabBarVisible: setCardTabBarVisible(route, 0),
          })}
        />
        <Tab.Screen name="More" component={MoreScreenNavigator} />
      </Tab.Navigator>
    </UserInactivity>
  );
};
