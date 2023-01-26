import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Icon } from "react-native-elements";
import styles from './style'

export default function Confirm({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.previewHeader}>
        <Icon
          name="arrow-back-ios"
          type="material"
          color="gray"
          size={20}
          iconStyle={{ paddingRight: 10 }}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.text1}>{'Card request'}</Text>
      </View>
    
      <View style={styles.previewDashboard}>
        <Text style={styles.cardPreview}>{'Choose delivery options'}</Text>
        <View style={styles.deliveryOptions}>
          <View style={styles.spaceBetween}>
            <Text style={styles.confirmText1}>{"Standard Shipping"}</Text>
            <Icon name="check" type="material" color="#0000FF" size={20} iconStyle={{ paddingTop: 10 }}/>
          </View>
          <Text style={styles.confirmText}>{"Delivery fee: 50 USD"}</Text>
          <Text style={styles.confirmText}>{"Duration: 4-12 weeks (location based)"}</Text>
        </View>
        <View style={styles.billingAddress}>
          <Text style={styles.confirmText2}>{"Express Shipping"}</Text>
          <Text style={styles.confirmText}>{"Delivery fee: 150 USD"}</Text>
          <Text style={styles.confirmText}>{"Duration: 1-7 working days (location based)"}</Text>
        </View>
      </View>

      <View style={{ margin: 30 }}>
        <Text style={styles.cardPreview}>{"Billing address"}</Text>
        <View style={styles.billingAddress}>
          <Text style={styles.confirmText2}>{"My Address"}</Text>
          <Text style={styles.confirmText}>{"7, Second avenue, First Generation\nestate, Lokogoma, Abuja"}</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Success")}>
        <Text style={styles.buttonText}>{"Continue"}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}