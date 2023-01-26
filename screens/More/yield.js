import { SafeAreaView, Text, View, Image } from 'react-native'
import React from 'react'
import { Icon } from "react-native-elements";
import styles from './style'
import ComingSoon from '../../components/comingSoon';

export default function Yield({ navigation }) {
    return(
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <View style={styles.top}>
            <Icon
              name="arrow-back-ios"
              type="material"
              color="gray"
              size={25}
              iconStyle={{ paddingRight: 10 }}
              onPress={() => navigation.goBack()}
            />
            <Text style={[styles.headerText, {fontFamily: "Ubuntu_700Bold"}]}>{'Yield/Interest'}</Text>
          </View>
          {/* <View style={styles.imageContainer}>
            <Icon name="notification" type="entypo" size={17} color='#022141' iconStyle={styles.headerImage2} />
            <Image style={styles.headerImage3} source={require('../../assets/profileAvatar.png')} />
          </View> */}
        </View>
    
        <ComingSoon />
      </SafeAreaView>
    );
}