import { Dimensions, Image, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import { createAppContainer } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createStackNavigator } from 'react-navigation-stack'
import { Text, StyleSheet, Platform, Button } from 'react-native'
import Landing from '../screens/Landing'
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
