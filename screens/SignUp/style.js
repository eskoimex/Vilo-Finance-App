import { StyleSheet, Platform } from "react-native";

const fontFamily =
  Platform.OS === "android" ? "sans-serif-condensed" : "Avenir Next";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    marginTop:  Platform.OS === "android" ? 50 : 30,
    marginBottom: 20,
  },
  image: {
    width: 56.26,
    height: 30,
  },
  bodyContainer: {
    margin: 20,
  },
  createAccount: {
    color: "#000000",
    fontSize: 20,
    //fontWeight: "bold",
    // fontFamily,
  },
  subheading: {
    color: "#022141",
    fontSize: 16,
    paddingTop: 10,
    paddingBottom: 5,
    // fontFamily,
  },
  emailContainer: {
    paddingTop: 10,
    paddingBottom: 5,
  },
  emailText: {
    color: "#022141",
    fontSize: 16,
    //fontWeight: "bold",
    //fontFamily,
  },
  emailInputContainer: {
    flexDirection: "row",
    width: "100%",
    height: Platform.OS === "ios" ? 50 : 45,
    borderRadius: 10,
    borderWidth: 0.9,
    borderColor: "gray",
    alignItems: "center",
    paddingHorizontal: 2,
    marginTop: 10,
    marginBottom: 10,
    },
  emailInput: {
    width: 250,
    height: "100%",
    marginLeft: 10,
    marginTop: Platform.OS === "android" ? 0 : 15,

  },
  emailInput1: {
    width: Platform.OS === "android" ? 250 : 300,
    height: "100%",
    marginLeft: 10,
    marginTop: Platform.OS === "android" ? 0 : 10,
    marginBottom: Platform.OS === "android" ? 0 : 8,
  },
  passwordContainer: {
    paddingTop: 10,
    paddingBottom: 5,
  },
  passwordText: {
    color: "#022141",
    fontSize: 16,
    //fontWeight: "bold",
    //fontFamily,
  },
  passwordInputContainer: {
    flexDirection: "row",
    width: "100%",
    height: Platform.OS === "ios" ? 50 : 45,
    borderRadius: 10,
    borderWidth: 0.9,
    borderColor: "gray",
    alignItems: "center",
    paddingHorizontal: 2,
    marginTop: 10,
    marginBottom: 10,
  },
  passwordInput: {
    width: 250,
    height: '100%', 
    marginLeft: 10,
},
  agree: {
    color: "#000000",
    fontSize: 14,
    paddingTop: 10,
    paddingBottom: 5,
    textAlign: "center",
    //fontFamily,
  },
  agreeNested: {
    color: "#0000FF",
    //fontWeight: "bold",
    //fontFamily,
  },
  padding: {
    paddingTop: 10,
    paddingBottom: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  signupButton: {
    backgroundColor: "#000000",
    width: "80%",
    height: 60,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
  signupText: {
    color: "white",
    //fontWeight: "bold",
    fontSize: 17,
    //fontFamily,
  },
  googleContainer: {
    paddingTop: 10,
    paddingBottom: 15,
  },
  googleButton: {
    width: "100%",
    height: 60,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    borderWidth: 0.5,
  },
  googleImage: {
    width: 40,
    height: 50,
    borderRadius: 10,
  },
  googleText: {
    color: "#000000",
    fontSize: 15,
    //fontFamily,
  },
  haveAccount: {
    color: "#000000",
    fontSize: 16,
    textAlign: "center",
  },
  haveAccountNested: {
    color: "#0000FF",
    //fontWeight: "bold",
    fontSize: 16,
    // fontFamily,
  },
});

export default styles;
