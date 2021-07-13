import React from 'react'
import {
  StyleSheet,
  KeyboardAvoidingView,
  Text,
  Image,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native'

import * as colors from '../../constants/color'
import * as images from '../../constants/images'
import * as fonts from '../../constants/font'

import Icon from 'react-native-vector-icons/FontAwesome'
import LocationIcon from 'react-native-vector-icons/Entypo'
import sizes from '../../constants/sizes'

function PaymentSuccessful({ navigation }) {
  const backIcon = (
    <Icon style={styles.backIcon} name="chevron-left" size={15} color={colors.GREY} solid />
  )

  return (
    <SafeAreaView behavior="position" style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.backBlock}>
          {backIcon}
          <Text style={styles.back}>Back</Text>
        </TouchableOpacity>
        <Image style={styles.solarLogo} source={images.default.solarLogo} />
      </View>
      <View style={styles.checkContainer}>
        <Image style={styles.checkIcon} source={images.default.check} />
        <Text style={styles.subtitle}>Payment Successful</Text>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.loginAgain} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginAgain}>Login Again</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default PaymentSuccessful

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 20,
    paddingVertical: 25,
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

  checkContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 50,
  },
  checkIcon: {
    width: 150,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },

  subtitleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  subtitle: {
    fontSize: 20,
    fontFamily: fonts.Poppins,
    fontWeight: 'bold',
    marginHorizontal: 15,
    marginVertical: 25,
    color: colors.PRIMARY_RED,
  },

  btnContainer: {
    width: '100%',
    aspectRatio: 7 / 3,
  },

  loginAgain: {
    backgroundColor: colors.PRIMARY_RED,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: sizes.BTN_HEIGHT,
  },

  loginAgain: {
    fontFamily: fonts.Poppins,
    fontWeight: '700',
    fontSize: 15,
    color: colors.WHITE,
    textTransform: 'uppercase',
  },
})
