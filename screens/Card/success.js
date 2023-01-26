import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Icon } from "react-native-elements";
import styles from './style'
import { useDispatch } from "react-redux";
import { requestCard } from "../../redux/actions/requestCard";

export default function Success({ navigation }) {
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(requestCard());
    navigation.navigate("Card");
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.successContainer}>
        <Text style={styles.text1}>{'Card request'}</Text>
      </View>
    
      <View style={styles.previewDashboard}>
        <Icon name="check-circle" type="material" color="#32CD32" size={70} />
      </View>

      <View style={styles.previewDashboard}>
        <Text style={styles.successText1}>{"Your card request is successful Timeframe is 4-12 weeks"}</Text>
        <Text style={styles.successText2}>{"You can also track your card"}</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>{"Done"}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}