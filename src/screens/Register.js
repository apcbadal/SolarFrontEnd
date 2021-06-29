import React from "react";
import {
  StyleSheet,
  KeyboardAvoidingView,
  Text,
  Image,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";
import * as colors from "../../constants/color";
import * as images from "../../constants/images";
import Icon from "react-native-vector-icons/FontAwesome";
// import Ant from "react-native-vector-icons/AntDesign";

function Register() {
  const userIcon = <Icon style={styles.userIcon} name="user" size={25} color="grey" solid />
  
  const backIcon =  <Icon style={styles.backIcon} name="chevron-left" size={15} color="grey" solid />


  return (
    <KeyboardAvoidingView behavior= 'position' style={styles.mainContainer}>
      
      
      
      <View style={styles.headerContainer}>
        <View style={styles.backBlock}>
          {backIcon}
          <Text style={styles.back}>Back</Text>
        </View>
        <Image style={styles.solarLogo} source={images.default.solarLogo} />
      </View>

      
      
      <View style={styles.registerBlock}>
        {userIcon}
        <Text style={styles.registerTxt}>Register</Text>
      </View>

      <View style = {styles.inputContainer}>
       
    
    
        <View>
            <Text style = {styles.text}>Username</Text>
            <TextInput style = {styles.input}></TextInput>
        </View>
        <View>
            <Text style = {styles.text}>E-mail</Text>
            <TextInput style = {styles.input}></TextInput>
        </View>
        <View>
            <Text style = {styles.text}>Contact Number</Text>
            <TextInput style = {styles.input}></TextInput>
        </View>
        <View>
            <Text style = {styles.text}>Company Name</Text>
            <TextInput style = {styles.input}></TextInput>
        </View>

    </View>  
    
   
   
        <View>
            <TouchableOpacity style={styles.registerBtn}>
                <Text style = {styles.registerFont}>Register</Text>
            </TouchableOpacity>
            <Text style = {styles.alreadyUser}>Already a user? Login</Text>
        </View>

    </KeyboardAvoidingView>
  );
}

export default Register;

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    height: "100%",
    paddingHorizontal: 20,
    paddingVertical: 25,
    
  },

  

  headerContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  solarLogo: {
    width: '20%',
    aspectRatio: 5/4

  },
  
  backBlock: {
    flexDirection: "row", 
    justifyContent: 'center', 
    alignItems: 'center' 
  },

  back: {
    fontFamily: "Poppins",
    fontSize: 12,
    fontWeight: "bold",
    color: "grey",
    textTransform: "uppercase",
  },

  backIcon: {
    paddingRight: 5,
  },

  registerBlock: {
    flexDirection: 'row',
    paddingHorizontal: 5,
    alignItems: 'center',
    paddingVertical: '3%'
    
    
  },
  
  registerTxt: {
    fontSize: 25,
    fontWeight: 'bold',
    color: colors.PRIMARY_RED,
    

  },


  userIcon: {
      paddingRight: 10,

  },

  inputContainer: {
    flexDirection: 'column',
    width: '100%',
    // height: '70%',
    aspectRatio: 4/5,
    // backgroundColor: 'green',
    alignSelf: 'center'
      
  },

container: {
    width: '100%',
    height: '20%',
    paddingVertical: -10
    
},

input: {
    width: '100%',
    height: 50,
    borderWidth: 2,
    borderColor: colors.BLACK,
    
},

text: {
    fontSize: 15,
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    color: colors.BLACK,
    paddingVertical: 10
},

containerFour: {
    width: '100%',
    height: '10%',
    justifyContent: 'center',
    backgroundColor: 'grey',
    
  },
    

registerBtn: {
    backgroundColor: colors.PRIMARY_RED,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 50,
    
  },

registerFont: {
    fontFamily: "Poppins",
    fontWeight: "700",
    fontSize: 15,
    color: colors.WHITE,
    textTransform: 'uppercase'
  },


alreadyUser: {
    fontFamily: "Poppins",
    fontWeight: "700",
    fontSize: 15,
    color: colors.BLACK,
    alignSelf: 'center',
    paddingTop: 8
}


});
