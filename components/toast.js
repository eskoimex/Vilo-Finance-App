import Toast from "react-native-root-toast";

export const toastStyleFailure = {
  duration: Toast.durations.LONG,
  position: -120,
  shadow: true,
  animation: true,
  hideOnPress: true,
  delay: 0,
  backgroundColor: "red",
  textColor: "white",
};

export const toastStyleSuccess = {
  duration: Toast.durations.LONG,
  position: -120,
  shadow: true,
  animation: true,
  hideOnPress: true,
  delay: 0,
  backgroundColor: "green",
  textColor: "white",
};

export const toastStyleMessage = {
  duration: Toast.durations.LONG,
  position: 0,
  shadow: true,
  animation: true,
  hideOnPress: true,
  delay: 0,
  backgroundColor: "black",
  textColor: "white",
};
