import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native'
import * as colors from '../../constants/color'
import * as fonts from '../../constants/font'

const Landing = () => {
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
        <TouchableOpacity style={styles.registerBtn}>
          <Text style={styles.registerFont}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginFont}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.skipForNow}>Skip for Now</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 20,
    paddingVertical: 35,
  },
  heading: {
    fontSize: 33,
    fontFamily: fonts.Oswald,
    fontWeight: '300',
    lineHeight: 35,
    color: colors.PRIMARY_RED,
    paddingTop: 5,
  },
  headingContainer: {
    width: '100%',
    height: '25%',
    justifyContent: 'center',
  },

  containerSecond: {
    width: '100%',
    height: '25%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  heading2: {
    fontSize: 15,
  },
  dollar: {
    fontSize: 80,
    fontFamily: fonts.Poppins,
    fontWeight: 'bold',
    color: colors.PRIMARY_RED,
  },
  subtitle: {
    fontSize: 20,
    fontFamily: fonts.Poppins,
    fontWeight: 'bold',
    marginHorizontal: 15,
    color: colors.PRIMARY_RED,
  },
  containerThree: {
    width: '100%',
    height: '20%',
  },
  heading3: {
    fontFamily: fonts.Poppins,
    fontWeight: '500',
    lineHeight: 28,
    fontSize: 20,
    top: 20,
  },
  containerFour: {
    flex: 0,
    top: 10,
    justifyContent: 'center',
  },

  registerBtn: {
    backgroundColor: colors.PRIMARY_RED,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '20%',
  },
  loginBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '20%',
    borderColor: colors.PRIMARY_RED,
    borderWidth: 2,
    color: colors.PRIMARY_RED,
    marginVertical: 20,
  },

  loginFont: {
    fontFamily: fonts.Poppins,
    fontWeight: '700',
    fontSize: 15,
    color: colors.BLACK,
    textTransform: 'uppercase',
  },

  registerFont: {
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
})

export default Landing
