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

function PrimeMember({ navigation }) {
  const backIcon = (
    <Icon style={styles.backIcon} name="chevron-left" size={15} color={colors.GREY} solid />
  )

  return (
    <SafeAreaView behavior="position" style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.backBlock} onPress={() => navigation.goBack()}>
          {backIcon}
          <Text style={styles.back}>Back</Text>
        </TouchableOpacity>
        <Image style={styles.solarLogo} source={images.default.solarLogo} />
      </View>
      <View style={styles.amountContainer}>
        <Text style={styles.dollar}>$97</Text>
      </View>
      <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>Prime Membership</Text>
      </View>
      <View style={styles.bulletPointContainer}>
        <Text style={styles.bulletPoint}>1. Complete details of user</Text>
        <Text style={styles.bulletPoint}>2. Secured payment gateway</Text>
        <Text style={styles.bulletPoint}>3. Unlimited user date</Text>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.buyBtn} onPress={() => navigation.navigate('Payment')}>
          <Text style={styles.buyFont}>Buy</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('LeadDetails')}>
          <Text style={styles.skipForNow}>Skip for Now</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default PrimeMember

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: '100%',
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

  amountContainer: {
    width: '100%',
    height: '25%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  dollar: {
    fontSize: 80,
    fontFamily: fonts.Poppins,
    fontWeight: 'bold',
    color: colors.PRIMARY_RED,
  },

  subtitleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  subtitle: {
    fontSize: 28,
    fontFamily: fonts.Poppins,
    fontWeight: 'bold',
    marginHorizontal: 15,
    color: colors.PRIMARY_RED,
  },

  bulletPointContainer: {
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingHorizontal: '10%',
    paddingVertical: '8%',
  },
  bulletPoint: {
    fontSize: 15,
    color: '#4F4F4F',
    fontFamily: fonts.Poppins,
    fontWeight: '700',
    padding: 5,
  },

  btnContainer: {
    width: '100%',
    aspectRatio: 7 / 3,
    top: 20,
  },

  buyBtn: {
    backgroundColor: colors.PRIMARY_RED,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '40%',
  },

  buyFont: {
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
    paddingTop: 35,
  },
})
