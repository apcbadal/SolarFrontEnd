import { Dimensions, Image, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import { createAppContainer } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createStackNavigator } from 'react-navigation-stack'
import { Text, StyleSheet, Platform, Button } from 'react-native'
import Landing from '../screens/Landing'
import Location from '../screens/Location'
import Login from '../screens/Login'
import MakePayment from '../screens/MakePayment'
import PaymentDetails from '../screens/PaymentDetails'
import PaymentSuccessful from '../screens/PaymentSuccessful'
import PrimeMember from '../screens/PrimeMember'
import Register from '../screens/Register'
import ResetPassword from '../screens/ResetPassword'
import SetPassword from '../screens/SetPassword'
import Splash from '../screens/splash'
import LeadDetails from '../screens/LeadDetails'

import * as images from '../../constants/images'

class NavigationDrawerStructure extends Component {
  toggleDrawer = () => {
    this.props.navigationProps.toggleDrawer()
  }

  render() {
    return (
      <View style={{ flexDirection: 'row', marginLeft: 5 }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          {/*Donute Button Image */}
          {/*<Image for drawer icon
            source={require("../images/drawer.png")}
            style={{ width: 25, height: 25, marginLeft: 20 }}
          />*/}
        </TouchableOpacity>
      </View>
    )
  }
}

const FirstActivity_StackNavigator = createStackNavigator({
  Home: {
    screen: Landing,
    navigationOptions: ({ navigation }) => ({
      headerRight: <Text>Solar </Text>, //will be change later, this is main header of application
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />, // drawer icon will appear
      headerStyle: {
        backgroundColor: '#fff',
      },
      headerTintColor: '#fff',
    }),
  },
  Location: {
    screen: Location,
    navigationOptions: { headerShown: false },
  },
  Login: {
    screen: Login,
    navigationOptions: { headerShown: false },
  },
  Payment: {
    screen: MakePayment,
    navigationOptions: { headerShown: false },
  },
  PaymentDetail: {
    screen: PaymentDetails,
    navigationOptions: { headerShown: false },
  },
  Register: {
    screen: Register,
    navigationOptions: { headerShown: false },
  },
  LeadDetails: {
    screen: LeadDetails,
    navigationOptions: ({ navigation }) => ({
      headerRight: (
        <Image
          source={images.default.solarLogo}
          style={{ width: 50, height: 30, paddingRight: 10 }}
        />
      ), //will be change later, this is main header of application
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />, // drawer icon will appear
      headerStyle: {
        backgroundColor: '#fff',
      },
      headerTintColor: '#fff',
    }),
  },
  PrimeMember: {
    screen: PrimeMember,
    navigationOptions: { headerShown: false },
  },
  PaymentSuccess: {
    screen: PaymentSuccessful,
    navigationOptions: { headerShown: false },
  },
  //add more in stack here
})
const Drawer = createDrawerNavigator(
  {
    //Drawer Optons and indexing
    NavScreen1: { screen: FirstActivity_StackNavigator },
  },
  {
    /*contentComponent: AdminSideMenu,*/ //this is for side menu drawer
    drawerPosition: 'left', //drawer opening in left side
    drawerWidth: Dimensions.get('window').width - 120,
  }
)

export default createAppContainer(Drawer)
