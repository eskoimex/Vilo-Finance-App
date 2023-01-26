import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Slider from "../screens/Slider";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
import Welcome from "../screens/Onboarding/welcome";
import VerifyEmail from "../screens/Onboarding/verifyEmail";
import SetPin from "../screens/Onboarding/setPin";
import Overview from "../screens/Overview";
import CommenceVerification from "../screens/Overview/commeceVerification";
import LegalName from "../screens/Overview/legalName";
import Residential from "../screens/Overview/residential";
import Employment from "../screens/Overview/employment";
import PhoneNumber from "../screens/Overview/phoneNumber";
import VerifyPhoneNumber from "../screens/Overview/verifyPhoneNumber";
import Identity from "../screens/Overview/identity";
import Selfie from "../screens/Overview/selfie";
import Wallet from "../screens/Wallet";
import Card from "../screens/Card";
import More from "../screens/More";
import Yield from "../screens/More/yield";
import CardTracker from "../screens/More/cardTracker";
import CardPreview from "../screens/Card/cardPreview";
import Confirm from "../screens/Card/confirm";
import Success from "../screens/Card/success";
import ProfileAndSettings from "../screens/More/profileAndSettings";
import Features from "../screens/More/features";
import Transactions from "../screens/More/transactions";
import Transfer from "../screens/Transactions/transfer";
import Exchange from "../screens/Transactions/exchange";
import Borrow from "../screens/Transactions/borrow";
import TransactionSummary from "../screens/Transactions/transactionSummary";
import SuccessfulPayment from "../screens/Transactions/successfulPayment";
import SelectToken from "../screens/Transactions/selectToken";
import SelectBuyMethod from "../screens/Transactions/selectBuyMethod";
import SelectCard from "../screens/Transactions/selectCard";
import CardPayment from "../screens/Transactions/cardPayment";
import NewCard from "../screens/Transactions/newCard";
import NewCard2 from "../screens/Transactions/newCard2";
import MetaMap from "../screens/Overview/metaMap";
import ForgotPassword from "../screens/ForgotPassword";

const Stack = createStackNavigator();

const screenOptionStyle = {
  gestureEnabled: true,
  headerShown: false,
};

const AuthenticationScreenNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Slider" component={Slider} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="SetPin" component={SetPin} />
      <Stack.Screen name="VerifyEmail" component={VerifyEmail} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    </Stack.Navigator>
  );
};

const OverviewScreenNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={Overview} />
      <Stack.Screen
        name="CommenceVerification"
        component={CommenceVerification}
      />
      <Stack.Screen name="LegalName" component={LegalName} />
      <Stack.Screen name="Residential" component={Residential} />
      <Stack.Screen name="Employment" component={Employment} />
      <Stack.Screen name="PhoneNumber" component={PhoneNumber} />
      <Stack.Screen name="VerifyPhoneNumber" component={VerifyPhoneNumber} />
      <Stack.Screen name="Identity" component={Identity} />
      <Stack.Screen name="Selfie" component={Selfie} />
      <Stack.Screen name="MetaMap" component={MetaMap} />
      <Stack.Screen name="ProfileAndSettings" component={ProfileAndSettings} />
    </Stack.Navigator>
  );
};

const WalletScreenNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Wallet" component={Wallet} />
      <Stack.Screen name="ProfileAndSettings" component={ProfileAndSettings} />
    </Stack.Navigator>
  );
};

const FeatureScreenNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Features" component={Features} />
      <Stack.Screen name="Yield" component={Yield} />
      <Stack.Screen name="Transfer" component={Transfer} />
      <Stack.Screen name="Exchange" component={Exchange} />
      <Stack.Screen name="Borrow" component={Borrow} />
      <Stack.Screen name="TransactionSummary" component={TransactionSummary} />
      <Stack.Screen name="SuccessfulPayment" component={SuccessfulPayment} />
      <Stack.Screen name="SelectToken" component={SelectToken} />
      <Stack.Screen name="SelectBuyMethod" component={SelectBuyMethod} />
      <Stack.Screen name="SelectCard" component={SelectCard} />
      <Stack.Screen name="CardPayment" component={CardPayment} />
      <Stack.Screen name="NewCard" component={NewCard} />
      <Stack.Screen name="NewCard2" component={NewCard2} />
      <Stack.Screen
        name="CommenceVerification"
        component={CommenceVerification}
      />
    </Stack.Navigator>
  );
};

const CardScreenNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Card" component={Card} />
      <Stack.Screen name="CardPreview" component={CardPreview} />
      <Stack.Screen name="Confirm" component={Confirm} />
      <Stack.Screen name="Success" component={Success} />
      <Stack.Screen
        name="CommenceVerification"
        component={CommenceVerification}
      />
    </Stack.Navigator>
  );
};

const MoreScreenNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="More" component={More} />
      <Stack.Screen name="ProfileAndSettings" component={ProfileAndSettings} />
      <Stack.Screen name="Transactions" component={Transactions} />
      <Stack.Screen name="CardTracker" component={CardTracker} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    </Stack.Navigator>
  );
};

export {
  AuthenticationScreenNavigator,
  OverviewScreenNavigator,
  WalletScreenNavigator,
  CardScreenNavigator,
  MoreScreenNavigator,
  FeatureScreenNavigator,
};
