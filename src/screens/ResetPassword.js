import React, { useState } from "react";
import {
  StyleSheet,
  KeyboardAvoidingView,
  Text,
  Image,
  View,
  TextInput,
  TouchableOpacity, Alert,
} from "react-native";

import * as colors from '../../constants/color'
import * as images from '../../constants/images'
import * as fonts from '../../constants/font'
import auth from  '@react-native-firebase/auth'
import Icon from 'react-native-vector-icons/FontAwesome'
import sizes from '../../constants/sizes'

function ResetPassword({navigation}) {
  const [email,setEmail]=useState(null)
  const backIcon = (
    <Icon style={styles.backIcon} name="chevron-left" size={15} color={colors.GREY} solid />
  )
  const sendResetPassLink=()=>{
    auth().sendPasswordResetEmail(email).then(()=>
    Alert.alert("A password reset link send to your email")
    )
  }

  return (
    <KeyboardAvoidingView behavior="height" style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBlock}>
          {backIcon}
          <Text style={styles.back}>Back</Text>
        </TouchableOpacity>
        <Image style={styles.solarLogo} source={images.default.solarLogo} />
      </View>

      <View style={styles.resetBlock}>
        <Image style={styles.locked} source={images.default.locked} />
        <Text style={styles.resetTxt}>Reset Password</Text>
      </View>

      <View style={styles.inputContainer}>
        <View>
          <Text style={styles.text}>E-mail</Text>
          <TextInput
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={styles.input}/>
        </View>
      </View>

      <View style={styles.containerFour}>
        <TouchableOpacity onPress={sendResetPassLink} style={styles.sendBtn}>
          <Text style={styles.sendEmailFont}>Send Email</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.newUser}>New user? Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

export default ResetPassword

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
    paddingTop: 15,
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

  newUser: {
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
