import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  KeyboardAvoidingView,
  Text,
  Image,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native'

import * as colors from '../../constants/color'
import * as images from '../../constants/images'
import * as fonts from '../../constants/font'

import Icon from 'react-native-vector-icons/FontAwesome'
import sizes from '../../constants/sizes'
import PayPal from "react-native-paypal-wrapper";
import auth from "@react-native-firebase/auth";
import Snackbar from "react-native-snackbar";
import firestore from "@react-native-firebase/firestore";

 function MakePayment({ navigation }) {
  const [payerName,setPayerName]=useState(null)
   const[email,setEmail]=useState(null)
   useEffect(()=>{
     const email=auth().currentUser.email
      setEmail(email)
   },[email])
  const payUsingPayPal = async () => {

    PayPal.initialize(PayPal.NO_NETWORK, "Adg5qqM4C6MzhZSkKt3hktnIW5DW8IwTDKB1DaMFWoGn5I7knG6Yq-IzG8MwDiAZ9U542N3fSZoYq9n6");
    PayPal.pay({
      price: '0.5',
      currency: 'USD',
      description: payerName + ' is Paying for Solar Lead'
    }).
    then((confirm )=>{
        const isApprove=confirm.response.state;
        if(isApprove==="approved"){
          saveToDB()
        }
    }
    )
      .catch(error =>
        Snackbar.show({
          text:"You cancelled the payment",
          textColor:'white',
          backgroundColor:'red'
        })
      );

  }
const saveToDB=()=>{
    if(!payerName || !email){
      Snackbar.show({
        text: 'Please fill all details',
        textColor: 'white',
        backgroundColor: 'red'
      })
    }
    else{
      firestore().collection("Users").doc(email).update({
        isPayment:true,
        payment:"99 USD"
      })
        .then(() =>
          console.log('Payment success')
        )
        .catch((err) => console.log(err))
        .finally(()=> {
          navigation.navigate('Lead')
        })
    }
}
  const backIcon = (
    <Icon style={styles.backIcon} name="chevron-left" size={15} color={colors.GREY} solid />
  )

  return (
    <KeyboardAvoidingView behavior="height" style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.backBlock}>
          {backIcon}
          <Text style={styles.back}>Back</Text>
        </TouchableOpacity>
        <Image style={styles.solarLogo} source={images.default.solarLogo} />
      </View>

      <View style={styles.resetBlock}>
        <Image style={styles.locked} source={images.default.locked} />
        <Text style={styles.resetTxt}>Make Payment</Text>
      </View>

      <View style={styles.inputContainer}>
        <View>
          <TextInput style={styles.input}
          placeholder="Your Name"
          value={payerName}
          onChangeText={text => setPayerName(text)}
          />
        </View>
      </View>

      <View style={styles.containerFour}>
        <TouchableOpacity
          style={styles.makePayBtn}
          onPress={() => payUsingPayPal()}
        >
          <Text style={styles.makePaymentFont}>Make Payment</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.cancelPayment}>Cancel Payment</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

export default MakePayment

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 20,
    paddingVertical: 25,
    backgroundColor: colors.WHITE
  },

  headerContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  solarLogo: {
    width: '20%',
    aspectRatio: 5 / 4,
  },

  backBlock: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  back: {
    fontFamily: fonts.Poppins,
    fontSize: 12,
    fontWeight: 'bold',
    color: colors.GREY,
    textTransform: 'uppercase',
  },

  backIcon: {
    paddingRight: 5,
  },

  resetBlock: {
    flexDirection: 'row',
    paddingHorizontal: 5,
    alignItems: 'center',
    paddingVertical: 8,
  },

  resetTxt: {
    fontSize: 25,
    fontWeight: 'bold',
    color: colors.PRIMARY_RED,
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },

  userIcon: {
    paddingRight: 10,
  },

  inputContainer: {
    flexDirection: 'column',
    width: '100%',
    aspectRatio: 10 / 4,
    alignSelf: 'center',
    paddingTop: 50,
  },

  container: {
    width: '100%',
    height: '20%',
    paddingVertical: -10,
  },

  input: {
    width: '100%',
    height: 50,
    borderWidth: 2,
    borderColor: colors.BLACK,
  },

  text: {
    fontSize: 15,
    fontFamily: fonts.Poppins,
    fontWeight: 'bold',
    color: colors.BLACK,
    paddingVertical: 10,
  },

  containerFour: {
    width: '100%',
    height: '30%', //Contain Send Button
    paddingTop: 12,
  },

  makePayBtn: {
    backgroundColor: colors.PRIMARY_RED,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: sizes.BTN_HEIGHT,
  },

  makePaymentFont: {
    fontFamily: fonts.Poppins,
    fontWeight: '700',
    fontSize: 15,
    color: colors.WHITE,
    textTransform: 'uppercase',
  },

  cancelPayment: {
    fontFamily: fonts.Poppins,
    fontWeight: '700',
    fontSize: 15,
    color: colors.BLACK,
    alignSelf: 'center',
    paddingTop: 30,
  },
  locked: {
    width: 21,
    height: 28,
  },
})
