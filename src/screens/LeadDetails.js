import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  KeyboardAvoidingView,
  Text,
  Image,
  View,
  TextInput,
  TouchableOpacity, FlatList, ScrollView,
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
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }} style={styles.leadContainer}>
        <View style={styles.leadBund}>
        <View style={{width: '90%'}}>
          <Text style={styles.leadName}>{data.item._data.firstName}{data.item._data.lastName}</Text>
          <Text style={styles.leadAddress}>{data.item._data.workEmail}</Text>
          <Text style={styles.leadAddress}>{data.item._data.workCategory}</Text>
        </View>
        <TouchableOpacity style={styles.btnCont} onPress={()=> navigation.navigate('Lead',{data})}>
          <Image  style={styles.learnMore} source={images.default.learnMore}/>
        </TouchableOpacity>
        </View>
      </ScrollView>
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
      // height: '20%',
      borderBottomWidth: 1,
      borderBottomColor: colors.GREY,
       // justifyContent: 'center',
      backgroundColor: 'white',
      marginTop: 20,
    },
    leadName: {
        fontSize: sizes.LEAD_NAME,
        fontFamily: fonts.default.Poppins,
        fontWeight: '600',
        paddingTop: 5,
        marginBottom: 2,
        marginLeft: 8
    },
    leadAddress: {
        marginLeft: 8,
        marginBottom: 5,
        maxWidth: '90%',
        fontSize: sizes.LEAD_ADDRESS,
        fontFamily: fonts.Poppins
    },


    btnCont : {
      justifyContent: "center",
      alignItems: 'center'
    },

    learnMore: {
        width: 30,
        height: 30,



    },

    leadBund: {
      flexDirection: 'row',
    }
})
