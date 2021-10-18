import React, {useState} from 'react'
import {
  StyleSheet,
  KeyboardAvoidingView,
  Text,
  Image,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView, Alert,

} from "react-native";
import * as colors from '../../constants/color'
import * as images from '../../constants/images'
import * as fonts from '../../constants/font'
import Icon from 'react-native-vector-icons/FontAwesome'
import sizes from '../../constants/sizes'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import Snackbar from 'react-native-snackbar';
import { Screen } from "react-native-screens";


function Register({ navigation }) {
  const userIcon = <Icon style={styles.userIcon} name="user" size={25} color={colors.GREY} solid />

  const backIcon = <Icon style={styles.backIcon} name="chevron-left" size={15} color="grey" solid />
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [contactNum, setContactNum] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [userCreated, setUserCreated] = useState(false)

  const saveDataToDB = () => {
    navigation.navigate('Location',{email:email})
  firestore()
  .collection('Users').doc(email)
  .set({
    username: username,
    email: email,
    companyname: companyName
  })
  .then(() =>
    navigation.navigate('Location',{email:email})
  )
  .catch((err) => console.log(err))
  }


  const registerUser = () => {
    if (!email || !password || !companyName || !username) {
      Snackbar.show({
        text: 'Please fill all details',
        textColor: 'white',
        backgroundColor: 'red'
      })
    }else{

    console.log('calling below func')
    auth().createUserWithEmailAndPassword(email, password)
    .then(() => {
      setUserCreated(true)
      saveDataToDB()
    })
    .catch((error) => {

      console.log(error)
      const errorCode = error.code;
      if (errorCode === 'auth/email-already-in-use') {
        console.log('Email Already Exist')
        Snackbar.show({
          text: 'Email Already Exist',
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
      } else if (errorCode === 'auth/weak-password') {
        Alert.alert("Password should be at least 6 character")

      }
      else{

      }
    })

    }

  }



  return (
    <ScrollView>
    <SafeAreaView style={styles.mainContainer}>

    <KeyboardAvoidingView >
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.backBlock} onPress={() => navigation.goBack()}>
          {backIcon}
          <Text style={styles.back}>Back</Text>
        </TouchableOpacity>
        <Image style={styles.solarLogo} source={images.default.solarLogo} />
      </View>
      <View style={styles.registerBlock}>
        {userIcon}
        <Text style={styles.registerTxt}>Register</Text>
      </View>

      <View   style={styles.inputContainer}>
        <View>
          <Text style={styles.text}>Username</Text>
          <TextInput
            value= {username}
            style={styles.input}
            onChangeText= {(text)=> setUsername(text)}>
          </TextInput>
        </View>
        <View>
          <Text style={styles.text}>E-mail</Text>
          <TextInput
            style={styles.input}
            value={email}
            autoCapitalize={"none"}
            keyboardType={"email-address"}
            onChangeText= {(text)=> setEmail(text)}
            >
            </TextInput>
        </View>
        <View behavior='padding'>
          <Text style={styles.text}>Password</Text>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText= {(text)=> setPassword(text)}
            secureTextEntry={true}
            >
            </TextInput>
        </View>
        {/* <View>
          <Text style={styles.text}>Contact Number</Text>
          <TextInput
            style={styles.input}
            value={contactNum}
            onChangeText= {(text)=> setContactNum(text)}  >
          </TextInput>
        </View> */}
        <View>
          <Text style={styles.text}>Company Name</Text>
          <TextInput
            style={styles.input}
            value= {companyName}
            style={styles.input}
            onChangeText= {(text)=> setCompanyName(text)}>
          </TextInput>
        </View>

      </View>
      </KeyboardAvoidingView>
      <View>
        <TouchableOpacity
          style={styles.registerBtn}
          onPress={() => registerUser()}
        >
          <Text style={styles.registerFont}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.alreadyUser}>Already a user? Login</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
    </ScrollView>
  )
}

export default Register

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
    color: colors.GREY,
    textTransform: 'uppercase',
  },

  backIcon: {
    paddingRight: 5,
  },

  registerBlock: {
    flexDirection: 'row',
    paddingHorizontal: 5,
    alignItems: 'center',
    paddingVertical: '3%',
  },

  registerTxt: {
    fontSize: 25,
    fontWeight: 'bold',
    color: colors.PRIMARY_RED,
  },

  userIcon: {
    paddingRight: 10,
    color: colors.GREY,
  },

  inputContainer: {
    flexDirection: 'column',
    width: '100%',
    aspectRatio: 4 / 5,
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

  registerBtn: {
    backgroundColor: colors.PRIMARY_RED,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: sizes.BTN_HEIGHT,
    marginTop: 20,
  },

  registerFont: {
    fontFamily: fonts.Poppins,
    fontWeight: '700',
    fontSize: 15,
    color: colors.WHITE,
    textTransform: 'uppercase',
  },

  alreadyUser: {
    fontFamily: fonts.Poppins,
    fontWeight: '700',
    fontSize: 15,
    color: colors.BLACK,
    alignSelf: 'center',
    paddingTop: 12,
  },
})
