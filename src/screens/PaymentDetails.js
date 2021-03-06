import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  KeyboardAvoidingView,
  Text,
  Image,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native'

import * as colors from '../../constants/color'
import * as images from '../../constants/images'
import * as fonts from '../../constants/font'

import Icon from 'react-native-vector-icons/FontAwesome'
import sizes from '../../constants/sizes'
import Snackbar from "react-native-snackbar";
import firestore from "@react-native-firebase/firestore";
import auth from "@react-native-firebase/auth";

function PaymentDetails({ navigation }) {
  const [nameOnCard, setNameOnCard] = useState('')
  const [cardNum, setCardNum] = useState('')
  const [expiryDate, setExpiryDate] = useState('')
  const [cvv, setCvv] = useState('')
  const [billingDetails, setBillingDetails] = useState('')
  const [email,setEmail]=useState(null);
  useEffect(()=>{
    const email=auth().currentUser.email
    setEmail(email)
  },[email])
  const backIcon = (
    <Icon style={styles.backIcon} name="chevron-left" size={15} color={colors.GREY} solid />
  )

  // function


  const saveDataToDB = () => {
    if (!nameOnCard || !cardNum || !expiryDate || !cvv || !billingDetails) {
      Snackbar.show({
        text: 'Please fill all details',
        textColor: 'white',
        backgroundColor: 'red'
      })
    }else {
    firestore()
    .collection('Users').doc(email)
    .update({
      nameoncard: nameOnCard,
      cardNumber: cardNum,
      expirydate: expiryDate,
      CVV: cvv,
      billingDetails: billingDetails

    })
    .then(() =>
    console.log('Payment details saved set success')

    )
    .catch((err) => console.log(err))
    .finally(()=> {
      navigation.navigate('PrimeMember')
    })
      }
    }

  return (
    <SafeAreaView  style={styles.mainContainer}>
      <KeyboardAvoidingView behavior="position">
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.backBlock} onPress={() => navigation.goBack()}>
          {backIcon}
          <Text style={styles.back}>Back</Text>
        </TouchableOpacity>
        <Image style={styles.solarLogo} source={images.default.solarLogo} />
      </View>

      <View style={styles.detailsBlock}>
        <Image style={styles.locked} source={images.default.locked} />
        <Text style={styles.resetTxt}>Payment Details</Text>
      </View>

      <View style={styles.inputContainer}>
        <View>
          <Text style={styles.text}>Name on Card</Text>
          <TextInput
            style={styles.input}
            value={nameOnCard}
            onChangeText={(text) => setNameOnCard(text)}>

            </TextInput>
        </View>
        <View>
          <Text style={styles.text}>Card Number</Text>
          <TextInput
  keyboardType={"number-pad"}
  style={styles.input}
  value={cardNum}
  onChangeText={(text) => setCardNum(text)}/>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.expiryDateText}>Expiry Date</Text>
          <Text style={styles.text}>CVV</Text>
        </View>
        <View style={styles.expiryRowContainer}>
          <TextInput
  style={styles.expiryDate}
  value={expiryDate}
  onChangeText={(text) => setExpiryDate(text)}/>
          <TextInput
  style={styles.cvv}
  value={cvv}
  onChangeText={(text) => setCvv(text)}/>
        </View>

        <View>
          <Text style={styles.text}>Billing Details</Text>
          <TextInput style={styles.input}
                     value={billingDetails}
                     onChangeText={(text) => setBillingDetails(text)}
          />
        </View>
      </View>
      </KeyboardAvoidingView>
      <View style={styles.containerFour}>
        <TouchableOpacity style={styles.sendBtn} onPress={() => saveDataToDB()}>
          <Text style={styles.sendEmailFont}>Save Details</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.skipForNow}>Skip for Now</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
export default PaymentDetails

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 25,
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
    color: 'grey',
    textTransform: 'uppercase',
  },

  backIcon: {
    paddingRight: 5,
  },

  detailsBlock: {
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
    aspectRatio: 4 / 5,
    alignSelf: 'center',
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

  expiryRowContainer: {
    flexDirection: 'row',
    paddingVertical: 5,
    justifyContent: 'space-between',
  },

  expiryDate: {
    width: '50%',
    height: 50,
    borderWidth: 2,
    borderColor: colors.BLACK,
  },

  cvv: {
    width: '40%',
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

  expiryDateText: {
    fontSize: 15,
    fontFamily: fonts.Poppins,
    fontWeight: 'bold',
    color: colors.BLACK,
    paddingVertical: 10,
    paddingRight: 108,
  },

  containerFour: {
    width: '100%',
    height: '30%', //Contain Send   Button
    paddingTop: 15,
  },

  sendBtn: {
    backgroundColor: colors.PRIMARY_RED,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: sizes.BTN_HEIGHT,
  },

  sendEmailFont: {
    fontFamily: fonts.Poppins,
    fontWeight: '700',
    fontSize: 15,
    color: colors.WHITE,
    textTransform: 'uppercase',
  },

  skipForNow: {
    fontFamily: fonts.Poppins,
    fontWeight: '700',
    fontSize: 15,
    color: colors.BLACK,
    alignSelf: 'center',
    paddingTop: 10,
  },
  locked: {
    width: 21,
    height: 28,
  },
})
