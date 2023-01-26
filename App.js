import { StatusBar } from "expo-status-bar";
import React from "react";
import { Provider, useSelector } from "react-redux";
import { ConfigureStore } from "./redux/configureStore";
import { NavigationContainer } from "@react-navigation/native";
import { AuthenticationScreenNavigator } from "./navigation/StackNavigator";
import { BottomTabNavigator } from "./navigation/BottomTabNavigator";
import { PersistGate } from "redux-persist/es/integration/react";
import { Loading } from "./components/loading";
import {
  useFonts,
  Ubuntu_300Light,
  Ubuntu_300Light_Italic,
  Ubuntu_400Regular,
  Ubuntu_400Regular_Italic,
  Ubuntu_500Medium,
  Ubuntu_500Medium_Italic,
  Ubuntu_700Bold,
  Ubuntu_700Bold_Italic,
} from "@expo-google-fonts/ubuntu";
import { RootSiblingParent } from "react-native-root-siblings";

const { persistor, store } = ConfigureStore();

const AppWrapper = () => {
  return (
    <Provider store={store}>
      {/* <PersistGate loading={<Loading />} persistor={persistor}> */}
      <RootSiblingParent>
        <App />
      </RootSiblingParent>
      {/* </PersistGate> */}
    </Provider>
  );
};

const App = () => {
  const auth = useSelector((state) => state.auth);
  let [fontsLoaded] = useFonts({
    Ubuntu_300Light,
    Ubuntu_300Light_Italic,
    Ubuntu_400Regular,
    Ubuntu_400Regular_Italic,
    Ubuntu_500Medium,
    Ubuntu_500Medium_Italic,
    Ubuntu_700Bold,
    Ubuntu_700Bold_Italic,
  });

  if (!fontsLoaded) {
    return <Loading />;
  } else {
    return (
      <>
        <NavigationContainer>
          {!auth.isAuthenticated ? (
            <>
              <AuthenticationScreenNavigator />
            </>
          ) : (
            <>
              <BottomTabNavigator />
            </>
          )}
        </NavigationContainer>
        <StatusBar style="auto" />
      </>
    );
  }
};

export default AppWrapper;
