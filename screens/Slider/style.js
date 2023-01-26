import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        flexWrap: 'nowrap',
        height: '100%',
        width: '100%',
    },
    containerImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    skipButton: {
        textAlign: 'center',
        fontSize: 16,
        color: '#4D4D5B',
        marginTop: 20
    },
    icon: {
        width: Platform.OS === 'ios' ? 60 : 55,
        height: Platform.OS === 'ios' ? 60 : 55,
        backgroundColor: '#000000',
        borderRadius: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default styles;
