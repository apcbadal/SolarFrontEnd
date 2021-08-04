import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native'
import * as colors from '../../constants/color'
import * as fonts from '../../constants/font'
import * as sizes from '../../constants/sizes'

const Landing = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>{'Get Direct \nAccess to Solar \nLeads Today'}</Text>
      </View>

      <View style={styles.containerSecond}>
        <Text style={styles.dollar}>$97</Text>
        <Text style={styles.subtitle}>{'Only to \nget start \na month'}</Text>
      </View>

      <View style={styles.containerThree}>
        <Text style={styles.heading3}>{'We handle the marketing\nYou handle the leads'}</Text>
      </View>

      <View style={styles.containerFour}>
        <TouchableOpacity
          style={styles.registerBtn}
          onPress={() => navigation.navigate('Register')}
        >
          <Text style={styles.registerFont}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginFont}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate("PrimeMember")}>

        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 35,
    backgroundColor: colors.WHITE
  },
  heading: {
    fontSize: 40,
    fontFamily: fonts.Oswald,
    fontWeight: '300',
    lineHeight: 45,
    color: colors.PRIMARY_RED,
    paddingTop: 5,
  },
  headingContainer: {
    // width: '100%',
    // height: '25%',
    // flex: 0.3,
    justifyContent: 'center',
    // backgroundColor: 'darkgrey'
  },

  containerSecond: {
    // width: '100%',
    // height: '25%',
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'darkgrey'

  },
  heading2: {
    fontSize: 15,
  },
  dollar: {
    fontSize: sizes.DOLLAR_FONT,
    fontFamily: fonts.Poppins,
    fontWeight: 'bold',
    color: colors.PRIMARY_RED,
  },
  subtitle: {
    fontSize: sizes.SUBTITLE_FONT,
    fontFamily: fonts.Poppins,
    fontWeight: 'bold',
    marginHorizontal: 15,
    color: colors.PRIMARY_RED,
  },
  containerThree: {
    // width: '100%',
    // height: '20%',
  },
  heading3: {
    fontFamily: fonts.Poppins,
    fontWeight: '500',
    lineHeight: 28,
    fontSize: sizes.HEADING3,
    // top: 20,
  },
  containerFour: {
    // flex: 0,
    paddingVertical: 50,
    // justifyContent: '',
    // backgroundColor: 'grey'
  },

  registerBtn: {
    backgroundColor: colors.PRIMARY_RED,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: sizes.BTN_HEIGHT,
  },
  loginBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: sizes.BTN_HEIGHT,
    borderColor: colors.PRIMARY_RED,
    borderWidth: 2,
    color: colors.PRIMARY_RED,
    marginVertical: 20,
  },

  loginFont: {
    fontFamily: fonts.Poppins,
    fontWeight: '700',
    fontSize: sizes.LABEL_FONT,
    color: colors.BLACK,
    textTransform: 'uppercase',
  },

  registerFont: {
    fontFamily: fonts.Poppins,
    fontWeight: '700',
    fontSize: sizes.LABEL_FONT,
    color: colors.WHITE,
    textTransform: 'uppercase',
  },
  skipForNow: {
    fontFamily: fonts.Poppins,
    fontWeight: '700',
    fontSize: sizes.LABEL_FONT,
    color: colors.BLACK,
    alignSelf: 'center',
    // marginTop: 5
  },
})

export default Landing
