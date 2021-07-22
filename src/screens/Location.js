import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  KeyboardAvoidingView,
  Text,
  Image,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native'

import * as colors from '../../constants/color'
import * as images from '../../constants/images'
import * as fonts from '../../constants/font'

import Icon from 'react-native-vector-icons/FontAwesome'
import LocationIcon from 'react-native-vector-icons/Entypo'
import sizes from '../../constants/sizes'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import Snackbar from "react-native-snackbar";
import FirebaseConfig from "../../configuration/config";

function Location({ route, navigation }) {
  const[email,setEmail]=useState(null)
  useEffect(()=>{
    const email =auth().currentUser.email
    setEmail(email)
  },[email])

  const [address1, setAddress1] = useState('')
  const [address2, setAddress2] = useState('')
  const [city, setCity] = useState('')
  const [stateName, setStateName] = useState('')
  const [zipcode, setZipcode] = useState('')

  // console.log(`DOCID: ${JSON.stringify(docId)}`)
  const locatIcon = (
    <LocationIcon style={styles.userIcon} name="location-pin" size={25} color={colors.GREY} />
  )

  const backIcon = (
    <Icon style={styles.backIcon} name="chevron-left" size={15} color={colors.GREY} solid />
  )

    const saveDataToDB = () => {
      if (!address1 || !city || !stateName || !zipcode) {
        Snackbar.show({
          text: 'Please fill all details',
          textColor: 'white',
          backgroundColor: 'red'
        })
      }else {
      firestore()
      .collection('Users').doc(email)
      .update({
        addressLine1: address1,
        addresLine2: address2,
        cityName: city,
        stateName: stateName,
        zipcode: zipcode

      })
      .then(() =>
      console.log('Location data set success')

      )
      .catch((err) => console.log(err))
      .finally(()=> {
        navigation.navigate('PaymentDetail')
      })

      }
    }






  return (
    <KeyboardAvoidingView behavior="position" style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.backBlock} onPress={() => navigation.goBack()}>
          {backIcon}
          <Text style={styles.back}>Back</Text>
        </TouchableOpacity>
        <Image style={styles.solarLogo} source={images.default.solarLogo} />
      </View>

      <View style={styles.locationBlock}>
        {locatIcon}
        <Text style={styles.locationTxt}>Location</Text>
      </View>

      <ScrollView style={styles.inputContainer}>
        <View>
          <Text style={styles.text}>Address Line 1</Text>
          <TextInput
            style={styles.input}
            value={address1}
            onChangeText={(text)=> setAddress1(text)}>
            </TextInput>
        </View>
        <View>
          <Text style={styles.text}>Address Line 2</Text>
          <TextInput
            style={styles.input}
            value={address2}
            onChangeText={(text)=> setAddress2(text)}></TextInput>
        </View>
        <View>
          <Text style={styles.text}>City</Text>
          <TextInput
            style={styles.input}
            value={city}
            onChangeText={(text)=> setCity(text)}></TextInput>
        </View>
        <View>
          <Text style={styles.text}>State</Text>
          <TextInput
            style={styles.input}
            value={stateName}
            onChangeText={(text)=> setStateName(text)}></TextInput>
        </View>
        <View>
          <Text style={styles.text}>Zipcode</Text>
          <TextInput
            style={styles.input}
            value={zipcode}
            onChangeText={(text)=> setZipcode(text)}></TextInput>
        </View>

      </ScrollView>


        <View style={{ paddingTop: 10 }}>
        <TouchableOpacity
            style={styles.locationBtn}
            onPress={() => saveDataToDB()}
          >
            <Text style={styles.locationFont}>Set Location</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('LeadDetails')}>
            <Text style={styles.skip}>Skip for now</Text>
          </TouchableOpacity>
        </View>

    </KeyboardAvoidingView>
  )
}

export default Location

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 25,
    backgroundColor: colors.WHITE,
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

  locationBlock: {
    flexDirection: 'row',
    paddingHorizontal: 5,
    alignItems: 'center',
    paddingVertical: '3%',
  },

  locationTxt: {
    fontSize: 25,
    fontWeight: 'bold',
    color: colors.PRIMARY_RED,
  },

  userIcon: {
    paddingRight: 10,
  },

  inputContainer: {
    flexDirection: 'column',
    width: '100%',
    aspectRatio: 4/5,
    alignSelf: 'center',
  },

  container: {
    width: '100%',
    // height: '20%',
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
    // height: '10%',
    justifyContent: 'center',
    backgroundColor: 'grey',
  },

  locationBtn: {
    backgroundColor: colors.PRIMARY_RED,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: sizes.BTN_HEIGHT,
  },

  locationFont: {
    fontFamily: fonts.Poppins,
    fontWeight: '700',
    fontSize: 15,
    color: colors.WHITE,
    textTransform: 'uppercase',
  },

  skip: {
    fontFamily: fonts.Poppins,
    fontWeight: '700',
    fontSize: 15,
    color: colors.BLACK,
    alignSelf: 'center',
    paddingTop: 8,
  },
})
