import React from 'react'
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
import * as sizes from '../../constants/sizes'

import Icon from 'react-native-vector-icons/FontAwesome'

function LeadDetails({ navigation }) {

 let leadName = 'Terrance Brown';
 let address = '180 Central Ave St. Petersburg FL 33701 United States'

  return (
    <View style={styles.mainContainer}>
        <View style={styles.leadContainer}>
            <View style={{width: '85%'}}>
                <Text style={styles.leadName}>{leadName}</Text>
                <Text style={styles.leadAddress}>{address}</Text>
            </View>
            <TouchableOpacity onPress={()=> navigation.navigate('Lead')}>
                <Image  style={styles.learnMore} source={images.default.learnMore}/>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default LeadDetails;

const styles = StyleSheet.create({
    mainContainer:{
        flex: 1,
        backgroundColor: colors.WHITE

    },
    leadContainer: {
      flexDirection: 'row',
      width: '100%',
      height: '25%',
      borderBottomWidth: 1,
      borderBottomColor: colors.GREY,
      alignItems: 'center',
      justifyContent: 'center'
    },
    leadName: {
        fontSize: sizes.LEAD_NAME,
        fontFamily: fonts.default.Poppins,
        fontWeight: '600',
        paddingTop: 5,
        paddingBottom: 2,
        paddingLeft: 8
    },
    leadAddress: {
        paddingLeft: 8,
        paddingBottom: 5,
        maxWidth: '90%',
        fontSize: sizes.LEAD_ADDRESS,
        fontFamily: fonts.Poppins
    },
    learnMore: {
        width: 30,
        height: 30
    }
})
