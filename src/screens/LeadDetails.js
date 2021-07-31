import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  KeyboardAvoidingView,
  Text,
  Image,
  View,
  TextInput,
  TouchableOpacity, FlatList,
} from "react-native";
import * as colors from '../../constants/color'
import * as images from '../../constants/images'
import * as fonts from '../../constants/font'
import * as sizes from '../../constants/sizes'

import Icon from 'react-native-vector-icons/FontAwesome'
import firestore from "@react-native-firebase/firestore";

function LeadDetails({ navigation }) {
  const [data,setData]=useState([])
  useEffect(async () => {
    const lead = await firestore().collection('webContactFormData-HP').get();
    setData(lead._docs)

  },[data])

  const dataTorender=(data)=>{
    return(
      <View style={styles.leadContainer}>
        <View style={{width: '85%'}}>
          <Text style={styles.leadName}>{data.item._data.firstName}{data.item._data.lastName}</Text>
          <Text style={styles.leadAddress}>{data.item._data.workEmail}</Text>
          <Text style={styles.leadAddress}>{data.item._data.workCategory}</Text>
        </View>
        <TouchableOpacity onPress={()=> navigation.navigate('Lead',{data})}>
          <Image  style={styles.learnMore} source={images.default.learnMore}/>
        </TouchableOpacity>
      </View>
    )
  }
  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={data}
      renderItem={({ item }) => dataTorender({item})}/>
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
