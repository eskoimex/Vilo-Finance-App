import { StyleSheet, Platform } from "react-native";

const fontFamily =
  Platform.OS === "android" ? "sans-serif-condensed" : "Avenir Next";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 16,
    //fontWeight: "bold",
    color: "#022141",
    marginTop: 50,
    //fontFamily,
  },
  progress: {
    width: 264,
    height: 5,
    marginTop: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginTop: -40,
  },
  subHeader: {
    fontSize: 18,
    //fontWeight: "bold",
    color: "#022141",
    marginBottom: 20,
    //fontFamily,
  },
  button: {
    backgroundColor: "#000000",
    margin: 10,
    height: 60,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    position: "absolute",
    bottom: Platform.OS === "ios" ? 90 : 40,
    left: 10,
    right: 10,
  },
  buttonText: {
    color: "white",
    //fontWeight: "bold",
    fontSize: 16,
    //fontFamily,
  },
  layout: {
    width: 230,
    height: 72,
    marginTop: 100,
  },
  avatar: {
    width: 125,
    height: 114.29,
    marginTop: -60,
    marginBottom: 50,
  },
  subText: {
    color: "#3E5670",
    fontSize: 16,
    textAlign: "center",
    margin: 10,
    //fontFamily,
  },
  emailUnread: {
    width: 100,
    height: 100,
    marginTop: -50,
    marginBottom: 50,
  },
  setupButton: {
    backgroundColor: "#000000",
    width: "80%",
    height: 60,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    marginTop: 50,
  },
  setupText: {
    color: "white",
    //fontWeight: "bold",
    fontSize: 16,
    //fontFamily,
  },
  showRemoveButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    backgroundColor: "rgba(209, 213, 219, 0.5)",
    width: Platform.OS === "android" ? 50 : 60,
    height: Platform.OS === "android" ? 50 : 60,
    marginTop: Platform.OS === "android" ? 0 : 5,
  },
});

export default styles;
