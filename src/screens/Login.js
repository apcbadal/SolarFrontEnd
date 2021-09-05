import React,{useState} from 'react'
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

import Icon from 'react-native-vector-icons/FontAwesome'
import sizes from '../../constants/sizes'
import Snackbar from "react-native-snackbar";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import color from "../../constants/color";

function Login({ navigation }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [user,setUser]=useState(null)
  const backIcon = (
    <Icon style={styles.backIcon} name="chevron-left" size={15} color={colors.GREY} solid />
  )

  const LogIn = () => {
    if (!email || !password) {
      Snackbar.show({
        text: 'Please fill all details',
        textColor: 'white',
        backgroundColor: color.BLACK
      })
    } else {
      auth().signInWithEmailAndPassword(email, password).then(()=>{
        console.log("User signed in.")
        firestore().collection("Users").doc(email).get().then((response)=>
        {
          setUser(response)
        })
        if(user._data.isPayment===true){
              navigation.navigate("LeadDetails")
        }
        else{
            navigation.navigate("PrimeMember")
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        if (errorCode === 'auth/user-not-found') {
          console.log('invalid user')
          Snackbar.show({
                  text: 'Invalid User',
                  textColor: 'white',
                  backgroundColor: 'red'
                })
        }
        else if (errorCode === 'auth/wrong-password') {
          console.log('Wrong Password')
          Snackbar.show({
            text: 'Wrong Password',
            textColor: 'white',
            backgroundColor: 'red'
          })
        }
        else if (errorCode === 'auth/too-many-requests'){
          Snackbar.show({
            text: 'Please try after some time or change your password',
            textColor: 'white',
            backgroundColor: 'red'
          })
        } else{
          return null
        }
      })

    }

  }


  return (
    <KeyboardAvoidingView behavior="height" style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.backBlock} onPress={() => navigation.goBack()}>
          {backIcon}
          <Text style={styles.back}>Back</Text>
        </TouchableOpacity>
        <Image style={styles.solarLogo} source={images.default.solarLogo} />
      </View>

      <View style={styles.loginBlock}>
        <Image style={styles.userLockIcon} source={images.default.userLock} />
        <Text style={styles.loginTxt}>Login</Text>
      </View>

      <View style={styles.inputContainer}>
        <View>
          <Text style={styles.text}>E-mail</Text>
          <TextInput
  style={styles.input}
  value={email}
  onChangeText={(text) => setEmail(text)}/>
        </View>
        <View>
          <Text style={styles.text}>Password</Text>
          <TextInput
            secureTextEntry={true}
  style={styles.input}
  value={password}
  onChangeText={(text) => setPassword(text)}/>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('ResetPassword')}>
          <Text style={styles.forgotPass}>Forgot Password ?</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => LogIn()}
        >
          <Text style={styles.loginFont}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Payment')}>
          <Text style={styles.newUser}>New user? Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

export default Login

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 25,
    backgroundColor: colors.WHITE,
  },

  headerContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  solarLogo: {
    width: '20%',
    aspectRatio: 5 / 4,
  },

  backBlock: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  back: {
    fontFamily: fonts.Poppins,
    fontSize: 12,
    fontWeight: 'bold',
    color: 'grey',
    textTransform: 'uppercase',
  },

  backIcon: {
    paddingRight: 5,
  },

  loginBlock: {
    flexDirection: 'row',
    paddingHorizontal: 5,
    alignItems: 'center',
    paddingVertical: '3%',
  },

  loginTxt: {
    fontSize: 25,
    fontWeight: 'bold',
    color: colors.PRIMARY_RED,
    padding: 10,
  },

  userIcon: {
    paddingRight: 10,
  },

  inputContainer: {
    flexDirection: 'column',
    width: '100%',
    aspectRatio: 5 / 4,
    alignSelf: 'center',
  },

  container: {
    width: '100%',
    height: '20%',
    paddingVertical: -10,
  },

  input: {
    width: '100%',
    height: 50,
    borderWidth: 2,
    borderColor: colors.BLACK,
  },

  text: {
    fontSize: 15,
    fontFamily: fonts.Poppins,
    fontWeight: 'bold',
    color: colors.BLACK,
    paddingVertical: 10,
  },

  containerFour: {
    width: '100%',
    height: '10%',
    justifyContent: 'center',
    backgroundColor: 'grey',
  },

  loginBtn: {
    backgroundColor: colors.PRIMARY_RED,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: sizes.BTN_HEIGHT,
  },

  loginFont: {
    fontFamily: fonts.Poppins,
    fontWeight: '700',
    fontSize: 16,
    color: colors.WHITE,
    textTransform: 'uppercase',
  },

  newUser: {
    fontFamily: fonts.Poppins,
    fontWeight: '700',
    fontSize: 16,
    color: colors.BLACK,
    alignSelf: 'center',
    paddingTop: 30,
  },
  userLockIcon: {
    width: 25,
    height: 25,
  },
  forgotPass: {
    fontSize: 16,
    fontFamily: fonts.Poppins,
    fontWeight: 'bold',
    color: colors.BLACK,
    paddingVertical: 10,
    alignSelf: 'flex-end'

  },
})
