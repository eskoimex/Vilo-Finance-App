import { StyleSheet, Platform } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp, heightPercentageToDP} from 'react-native-responsive-screen';

const fontFamily =
  Platform.OS === "android" ? "sans-serif-condensed" : "Avenir Next";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  verifyContainer: {
    display: "flex",
    flexDirection: "row",
    // justifyContent: "center",
    // alignItems: "center",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 20,
    marginTop: Platform.OS === "android" ? 50 : 30,
    marginRight: 20,
  },
  headerTop: {
    width: "100%",
    height: 139,
    backgroundColor: "#B9D9EB",
  },
  top: {
    display: "flex",
    flexDirection: "row",
    // justifyContent: 'space-between',
    marginLeft: 20,
    marginTop: Platform.OS === "android" ? 40 : 20,
    // marginRight: 20
  },
  headerImage1: {
    width: 16,
    height: 16,
    marginTop: 5,
  },
  headerImage2: {
    width: 20,
    height: 20,
    marginRight: 20,
  },
  headerImage3: {
    width: 30,
    height: 30,
  },
  dashboard: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    marginBottom: 20
  },
  dashboardImage: {
    width: 350,
    height: 150,
    borderRadius: 20,
    marginRight: Platform.OS === "android" ? 0 : 10,
  },
  dashboardContainerImage: {
    width: Platform.OS === "ios" ? 350 : 325,
    height: 150,
    borderRadius: 20,
    // borderWidth: 1,
    marginRight: 20,
    marginLeft: Platform.OS === "android" ? 20 : 10,
  },
  dashboardContainerImage1: {
    width: wp("90%"),
    // width: Platform.OS === "ios" ? 350 : 325,
    height: 150,
    borderRadius: 20,
    // borderWidth: 1,
    // marginRight: 20,
    // marginLeft: Platform.OS === "android" ? 20 : 10,
  },
  dashboardContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
  },
  // backgroundImage: {
  //   // width: 320,
  //   height: 150,
  //   borderRadius: 20,
  // },
  margin: {
    margin: 10,
  },
  margin: {
    margin: 10,
  },
  marginTop: {
    marginTop: 10,
  },
  dashboardText1: {
    fontSize: 13,
    //fontWeight: "bold",
    color: "#FFFFFF",
    //fontFamily,
  },
  dashboardText2: {
    fontSize: 20,
    //fontWeight: "bold",
    color: "#FFFFFF",
    marginTop: 10,
    //fontFamily,
  },
  dashboardText3Container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },
  dashboardText3: {
    fontSize: 16,
    color: "#FFFFFF",
    //fontFamily,
  },
  // bottomImage: {
  //   width: 100,
  //   height: 80,
  //   marginBottom: 40,
  //   marginRight: 10,
  //   marginTop:0
  // },
  bottomImage: {
    width: 126,
    height: 90,
    marginRight: 10,
    marginTop: 10,
    marginLeft: 10,
    marginBottom: 10,
  },
  card: {
    width: 24,
    height: 4,
    marginTop: 10,
  },
  assets: {
    width: 47,
    height: 24,
    marginRight: 20,
    marginBottom: 50,
  },
  identityContainer: {
    // width: Platform.OS === "ios" ? 345 : 320, 
    width: wp("90%"), 
    height: 100,
    borderRadius: 15,
    borderColor: "#B9D9EB",
    borderWidth: 0.5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    // marginRight: Platform.OS === "android" ? 20 : 30,
    // marginLeft: Platform.OS === "android" ? 20 : 30,
  },
  identityText1: {
    fontSize: 16,
    //fontWeight: "bold",
    color: "#022141",
    //fontFamily:
      //Platform.OS === "android" ? "sans-serif-condensed" : "Avenir Next",
  },
  percent: {
    position: "absolute",
    right: Platform.OS === "android" ? 60 : 55,
    top: 35,
    //fontWeight: "bold",
    fontSize: 13,
    color: "#000000",
    //fontFamily:
      //Platform.OS === "android" ? "sans-serif-condensed" : "Avenir Next",
  },
  percentOverview: {
    position: "absolute",
    right: Platform.OS === "android" ? 29 : 25,
    top: 35,
    //fontWeight: "bold",
    fontSize: 13,
    color: "#000000",
    //fontFamily:
      //Platform.OS === "android" ? "sans-serif-condensed" : "Avenir Next",
  },
  identityText2: {
    fontSize: 13,
    color: "#022141",
    paddingTop: 5,
    //fontFamily,
  },
  marginx2: {
    margin: 20,
  },
  dataContainer: {
    width: Platform.OS === "android" ? 310 : 340,
    height: 62,
    borderRadius: 10,
    borderColor: "#022141",
    borderWidth: 0.2,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
  },
  leftContainer: {
    display: "flex",
    flexDirection: "row",
    margin: 10,
  },
  image: {
    width: 10,
    height: 24,
    marginRight: 20,
  },
  imageCurrency: {
    // width: '25%',
    // height: '60%',
    // borderRadius: 50,
    marginLeft: 5,
    marginRight: 10,
    marginTop: 5,
    marginBottom: 5,
  },
  currency: {
    fontSize: 15,
    //fontWeight: "bold",
    color: "#022141",
    //fontFamily,
  },
  changeText: {
    fontSize: 12,
    color: "#022141",
    paddingTop: 5,
    //fontFamily,
  },
  changeContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 5,
  },
  change: {
    fontSize: 12,
    color: "green",
    //fontFamily,
  },
  price: {
    fontSize: 15,
    //fontWeight: "bold",
    color: "#022141",
    //fontFamily,
  },
  identity: {
    fontSize: 17,
    //fontWeight: "bold",
    color: "#022141",
    textAlign: "center",
    marginLeft: 50,
    marginTop: 20,
    //fontFamily,
  },
  VerificationContainer: {
    // width: Platform.OS === "ios" ? 340 : 310,
    width: wp("85%"),
    height: 100,
    borderRadius: 10,
    backgroundColor: "#B9D9EB",
    // borderColor: '#022141',
    // borderWidth: 0.2,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    // margin: 20,
    marginTop: 50,
    marginRight: 20,
    marginBottom: 20,
    marginLeft: 30,
  },
  verify: {
    // width: Platform.OS === "ios" ? 340 : 310,
    width: wp("85%"),
    height: 100,
    borderRadius: 10,
    borderColor: "#022141",
    borderWidth: 0.2,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginRight: 30,
    marginTop: 15,
    marginLeft: 30,
  },
  button: {
    backgroundColor: "#000000",
    margin: 10,
    height: 48,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    position: "absolute",
    bottom: 10,
    left: 10,
    right: 10,
  },
  commenceVerification: {
    backgroundColor: "#000000",
    height: 48,
    width: "80%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
  buttonText: {
    color: "white",
    //fontWeight: "bold",
    //fontFamily,
  },
  bodyContainer: {
    // flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  legalName: {
    color: "#022141",
    fontSize: 16,
    //fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
    //fontFamily,
  },
  noActive: {
    color: "#333333",
    fontSize: 17,
    textAlign: "center",
    marginBottom: 30,
    //fontFamily,
  },
  noActiveWallet: {
    color: "#333333",
    fontSize: 17,
    textAlign: "center",
    marginLeft: 20,
    marginRight: 20,
    //fontFamily,
  },
  inputContainer: {
    paddingTop: 10,
    paddingBottom: 5,
  },
  inputText: {
    color: "#022141",
    fontSize: 16,
    //fontWeight: "bold",
    marginBottom: 10,
    //fontFamily,
  },
  inputInputContainer: {
    flexDirection: "row",
    width: "100%",
    height: 45,
    borderRadius: 10,
    borderWidth: 0.8,
    borderColor: "gray",
    alignItems: "center",
    paddingHorizontal: 2,
    margin: 2,
  },
  onPressContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: 45,
    borderRadius: 10,
    borderWidth: 0.8,
    borderColor: "gray",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 2,
    margin: 2,
  },
  // onCountryPressContainer: {
  //     display: 'flex',
  //     flexDirection: 'row',
  //     width: '100%',
  //     height: 45,
  //     borderRadius: 10,
  //     borderWidth: 0.5,
  //     borderColor: 'gray',
  //     justifyContent: 'space-around',
  //     alignItems: 'center',
  //     paddingHorizontal: 2,
  //     margin: 2,
  // },
  inputInput: {
    width: Platform.OS === "android" ? 250 : 350,
    height: "100%",
    marginLeft: 10,
    marginTop: Platform.OS === "android" ? 0 : heightPercentageToDP(2),
    marginBottom: Platform.OS === "android" ? 0 : heightPercentageToDP(1.5),
  },
  countryInput: {
    width: "100%",
    height: "100%",
    marginLeft: 30,
  },
  topImage: {
    width: 320,
    height: 5,
    // margin: 20,
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
  },
  topImageIdentity: {
    width: 170,
    height: 5,
    // margin: 20,
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
  },
  subText: {
    color: "#022141",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 40,
    marginTop: 10,
  },
  selfie: {
    backgroundColor: "#B9D9EB",
    width: 100,
    height: 35,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  selfieText: {
    color: "blue",
    fontSize: 12,
    //fontWeight: "bold",
    textAlign: "center",
  },
  innerCamera: {
    position: "absolute",
    left: 25,
    right: 20,
    height: 180,
    width: 250,
    bottom: 5,
    top: 25,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
  modalView: {
    width: "50%",
    height: "60%",
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    paddingTop: 35,
    paddingLeft: 35,
    paddingRight: 35,
    paddingBottom: 5,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textStyle: {
    color: "#fff",
    //fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  countryText: {
    fontSize: 18,
    //fontFamily,
  },
  upward: {
    marginTop: 10,
  },
  metamapContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "powderblue",
  },
  resend: {
    textAlign: "right",
    marginTop: 10,
    //fontFamily,
    fontSize: 15,
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
});

export default styles;
