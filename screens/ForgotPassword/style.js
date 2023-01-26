import { StyleSheet, Platform } from "react-native";

const fontFamily =
  Platform.OS === "android" ? "sans-serif-condensed" : "Avenir Next";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  input: {
    height: 50,
    width: "100%",
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: "gray",
  },
  centeredView: {
    flex: 1,
    // justifyContent: "center",
    paddingLeft: 35,
    paddingRight: 35,
    paddingBottom: 5,
    alignItems: "center",
    elevation: 5,
  },
  emailInputContainer: {
    flexDirection: "row",
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "gray",
    alignItems: "center",
    paddingHorizontal: 2,
    margin: 10,
    borderRadius: 10,
  },
  inputContainer: {
    flexDirection: "row",
    // width: "100%",
    // height: 50,
    // borderWidth: 0.8,
    // borderColor: "gray",
    alignItems: "center",
    paddingHorizontal: 2,
    margin: 10,
    // borderRadius: 10,
    // textwr
  },
  emailInput: {
    width: "100%",
    height: "100%",
    marginLeft: 10,
  },
  textHeader: {
    marginTop: 30,
    fontSize: 30,
    fontWeight: "bold",
    fontFamily,
  },
  textHeader1: {
    margin: 10,
    fontSize: 17,
    textAlign: "center",
    fontFamily,
  },
  textStyle: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 15,
  },
  button: {
    backgroundColor: "#000000",
    width: "80%",
    height: 60,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    padding: 10,
    elevation: 2,
    margin: 10,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    marginTop: Platform.OS === "android" ? 50 : 30,
    marginBottom: 20,
  },
  passwordInput: {
    width: Platform.OS === "android" ? 250 : 330,
    height: "100%",
    marginLeft: 5,
    marginTop: Platform.OS === "android" ? 0 : 10,
    marginBottom: Platform.OS === "android" ? 0 : 8,
  },
});
