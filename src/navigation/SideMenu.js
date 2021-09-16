
import React, { Component } from "react";
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  Image,
} from "react-native";

import {bindActionCreators} from "redux";

import {connect} from "react-redux";
import auth from "@react-native-firebase/auth";


class AdminSideMenu extends Component {

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>

          <View style={styles.navItems}>
            <TouchableHighlight underlayColor={'#E0E2E1'} onPress={()=>this.onLogout()}>
              <View style={styles.navItem}>
                <View style={styles.navItemImageContainer}>
                  <Image style={styles.navItemImage} source={require("../../assets/images/logout.png")} />
                </View>
                <View style={styles.navItemTextContainer}>
                  <Text style={styles.navItemText}>Logout</Text>
                </View>
              </View>
            </TouchableHighlight>
          </View>
        </ScrollView>
        <View style={styles.footerContainer}/>
      </View>

    );
  }

  onLogout=()=> {
    auth().signOut().then(r => alert("Log out successfully."),
      this.props.navigation.navigate("Landing")
    )
  }
}

export default AdminSideMenu

const styles = StyleSheet.create({
  container: {
    paddingTop: 0,
    flex: 1,
    width: "100%"
  },
  userInfo:{
    backgroundColor:"#DFFFFF",
    padding : 25,
    paddingVertical:30,
  },
  userInfoName:{
    color:"#008080",
    fontWeight:"bold",
    fontSize : 24,
  },
  userInfoMail:{
    color:"#000",
    fontSize:14,
    marginTop:5,
    // fontWeight:"bold",
  },
  navItems:{
  },
  navItem:{
    display:"flex",
    flexDirection:"row",
    // backgroundColor:"orange",
    alignItems:"center",
    padding : 20,

  },
  navItemImage : {
    width:30,
    height:30,
    resizeMode:"contain",
  },
  navItemText :{
    fontSize :18,
    color:"#333333",
    fontWeight:"bold",
    marginLeft:25,
  }





});


