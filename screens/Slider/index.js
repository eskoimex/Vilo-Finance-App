import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useLayoutEffect } from 'react';
import { View, Image, Text } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { Icon } from "react-native-elements";
import styles from './style';

const slides = [
  {
    key: 1,
    image: require('../../assets/slider1.png')
  },
  {
    key: 2,
    image: require('../../assets/slider2.png')
  },
  {
    key: 3,
    image: require('../../assets/slider3.png')
  },
];

export default function Slider({ navigation }) {

  useLayoutEffect(() => {
    const ConfirmAccessToken = async() => {
      const token = await AsyncStorage.getItem("accessToken");
      
      if(token) navigation.navigate("SignIn");

      return;
    } 

    ConfirmAccessToken();
  }, [])

  const _renderItem = ({ item }) => {
    return (
      <View style={styles.container}>
        <Image style={styles.containerImage} source={item.image} />
      </View>
    );
  }

  const _renderNextButton = () => {
    return (
      <View style={styles.icon}>
        <Icon
          name="arrow-forward-ios"
          type="material"
          color="#fff"
          size={20}
        />
      </View>
    );
  };

  const _renderDoneButton = () => {
    return (
      <View style={styles.icon}>
        <Icon
          name="arrow-forward-ios"
          type="material"
          color="#fff"
          size={20}
        />
      </View>
    );
  };

  const _renderSkipButton = () => {
    return (
      <View>
        <Text style={styles.skipButton}>{'skip'}</Text>
      </View>
    );
  };

  const _onDone = () => {
    navigation.navigate('SignIn');
  };

  return (
    <AppIntroSlider
      keyExtractor={(item, index) => index.toString()}
      showSkipButton={true}
      dotStyle={{ backgroundColor: 'white' }}
      renderItem={_renderItem}
      data={slides}
      onDone={_onDone}
      renderDoneButton={_renderDoneButton}
      renderNextButton={_renderNextButton}
      renderSkipButton={_renderSkipButton}
    />
  );
}