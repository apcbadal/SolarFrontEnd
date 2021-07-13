import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import color from '../../constants/color'
import * as images from '../../constants/images'

const Splash = () => {
  return (
    <View style={styles.splashContainer}>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Image source={images.default.solarLogo} style={styles.solarLogo} />
      </View>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
  splashContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    backgroundColor: color.WHITE
  },

  solarLogo: {
    width: 250,
    height: 200,
  },
})
