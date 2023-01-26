import { StyleSheet, Platform } from 'react-native';

const fontFamily = Platform.OS === 'android' ? 'sans-serif-condensed' : 'Avenir Next';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    imageContainer: {
        display: 'flex',
        // flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 20,
        marginTop: Platform.OS === 'android' ? 50 : 30,
        marginRight: 20,
        marginBottom: 30
    },
    headerText: {
        fontSize: 18,
        //fontWeight: 'bold',
        color: '#022141',
        paddingTop: 5,
        //fontFamily
    },
    headerImage2: {
        width: 20,
        height: 20,
        marginRight: 20
    },
    headerImage3: {
        width: 30,
        height: 30
    },
    marginx2: {
        margin: 20
    },
    dataContainer: {
        width: Platform.OS === 'android' ? "100%" : 366,
        height: 62,
        borderRadius: 7,
        borderColor: 'gray',
        borderWidth: 0.2,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    leftContainer: {
        display: 'flex',
        flexDirection: 'row',
        margin: 10
    },
    image: {
        width: 10,
        height: 24,
        marginRight: 20
    },
    imageCurrency: {
        width: 30,
        height: 30,
        // borderRadius: 50,
        marginLeft: 5,
        marginRight: 10,
        marginTop: 5,
        marginBottom: 5
    },
    currency: {
        fontSize: 15,
        //fontWeight: 'bold',
        color: '#022141',
        //fontFamily
    },
    changeText: {
        fontSize: 12,
        color: '#022141',
        paddingTop: 5,
        //fontFamily
    },
    error: {
        fontSize: 17,
        color: '#022141',
        paddingTop: 5,
        //fontFamily
    },
    changeContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 5
    },
    change: {
        fontSize: 12,
        color: 'green',
        //fontFamily
    },
    price: {
        fontSize: 15,
        //fontWeight: 'bold',
        color: '#022141',
        //fontFamily
    },
    activate: {
        fontSize: 14,
        //fontWeight: 'bold',
        color: '#FFFFFF',
        textAlign: "center",
        paddingRight: 10,
        //fontFamily
    },
    activateContainer: {
        backgroundColor: "#000000",
        width: 100,
        height: 20,
        borderRadius: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
});

export default styles;
