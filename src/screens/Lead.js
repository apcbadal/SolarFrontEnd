import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Linking } from "react-native";


import * as colors from '../../constants/color'
import * as images from '../../constants/images'
import * as fonts from '../../constants/font'

import User from 'react-native-vector-icons/FontAwesome'
import Building from 'react-native-vector-icons/FontAwesome'
import Phone from 'react-native-vector-icons/FontAwesome'
import Mail from 'react-native-vector-icons/Entypo'
import sizes from '../../constants/sizes'

function Lead({navigation,route}) {
    const data =navigation.getParam("data")
    const user = (
        <User name="user" size={30} color='darkgrey' />
      )
    const building = (
        <Building name="building" size={30} color='darkgrey' />
      )
    const mail = (
        <Mail name="mail" size={30} color='darkgrey' />
      )
    const phone = (
        <Phone name="phone" size={30} color='darkgrey' />
      )
    let firstName = data.item._data.firstName
    let lastName = data.item._data.lastName
    let company = data.item._data.companyName
    let email = data.item._data.workEmail
    let workCategory = data.item._data.workCategory
    let phoneNum=data.item._data.phoneNum



    return (
        <View style={styles.mainContainer} >

            <View style={styles.leadDetailContainer}>
                <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                        {user}
                    <View style={styles.subNameContainer}>
                        <Text style={styles.label}>Name</Text>
                        <Text style={styles.value}>{firstName} {""} {lastName}</Text>
                    </View>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                    {building}
                    <View style={styles.subNameContainer}>
                        <Text style={styles.label}>Company</Text>
                        <Text style={styles.value}>{company}</Text>
                    </View>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                    {mail}
                    <View style={styles.subNameContainer}>
                        <Text style={styles.label}>Email</Text>
                        <Text style={styles.value}>{email}</Text>
                    </View>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                    {phone}
                    <View style={styles.subNameContainer}>
                        <Text style={styles.label}>Work category</Text>
                        <Text style={styles.value}>{workCategory}</Text>
                    </View>
                </View>

            </View>
            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.callNowBtn} onPress={()=>Linking.openURL('tel:'+phoneNum)}>
                    <Text style={styles.callNowText}>
                        Call now
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>Linking.openURL('mailto:'+mail)} style={styles.mailNowBtn} >
                    <Text style={styles.mailNowText}>
                        Mail now
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Lead

const styles = StyleSheet.create({
    mainContainer:{
       flex: 1,
       paddingHorizontal: 30,
       paddingVertical: 35,
       backgroundColor: colors.WHITE,
    },


    subNameContainer: {
        paddingHorizontal: 15,
        paddingTop: 30,


    },

    leadDetailContainer:{


    },
    label:{
        fontSize: 12,
        color: colors.PRIMARY_RED,
        fontFamily: fonts.Poppins,
        fontWeight: 'bold'
    },
    value: {
        fontSize: 12,
        fontFamily: fonts.Poppins,
        fontStyle: 'normal',
        fontWeight: 'bold',
        marginTop: 2,


    },
    btnContainer: {
        flex: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 40

    },
    callNowBtn: {
        width: '50%',
        height: sizes.BTN_HEIGHT,
        backgroundColor: colors.PRIMARY_RED,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 8

    },
    callNowText: {
        fontSize: sizes.LABEL_FONT,
        fontFamily: fonts.Poppins,
        fontWeight: '700',
        color: colors.WHITE

    },
    mailNowBtn: {
        width: '50%',
        height: sizes.BTN_HEIGHT,
        backgroundColor: colors.WHITE,
        borderColor: colors.BLACK,
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    mailNowText: {
        fontSize: sizes.LABEL_FONT,
        fontFamily: fonts.Poppins,
        fontWeight: '700',
        color: colors.PRIMARY_RED

    }


})
