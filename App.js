import React, { useEffect, useState } from "react";
import MainNavigator from "./src/navigation/MainNavigator";
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import rootReducer from './src/redux/reducers'
import { createStore, applyMiddleware } from 'redux'
import Sentry from '@sentry/react-native'
import Location from './src/screens/Location'

import { NavigationContainer } from "@react-navigation/native";
import auth from "@react-native-firebase/auth";
import Landing from "./src/screens/Landing";
import Register from "./src/screens/Register";
import Login from "./src/screens/Login";
import ResetPassword from "./src/screens/ResetPassword";
import { Image, Text, View,StyleSheet } from "react-native";
import createStackNavigator from "@react-navigation/stack/src/navigators/createStackNavigator";
import firestore from "@react-native-firebase/firestore";
import Payment from "./src/screens/Paypal/Payment";
import MakePayment from "./src/screens/MakePayment";
const store = createStore(rootReducer, applyMiddleware(thunk))
const Stack = createStackNavigator();

/*Sentry.init({
  dsn: 'https://ad529cc938e742449a8f26f7dc5baabb@o968312.ingest.sentry.io/5919727',
});*/
const App = () => {
  const[loggedIn,setLoggedin]=useState(false)
  const[userData,setUserData]=useState(null)
  const[email,setEmail] =useState(null)
  const [isPayment,setIsPayment]=useState(null)
 const  getCurrentUser=()=> {
    auth().onAuthStateChanged((user) => {
      console.log(user)
      if (!user) {
        setLoggedin(false)
      } else {
        firestore().collection("Users").doc(user.email).get().then((response) => {
          setUserData(response)
        })
        if (userData && userData._data.isPayment === true) {
                  setIsPayment(true)
            } else {

              setIsPayment(false)
            }
          setLoggedin(true)
      }

    })
  }

  useEffect(()=>{
    getCurrentUser()
  },[loggedIn])

  if (!loggedIn) {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Landing">
          <Stack.Screen name="Landing" component={Landing}
                        options={
                          {headerShown:false
                          }}/>
          <Stack.Screen name="Register" component={Register} options={{title:<View><Text>Go Solar</Text></View>,
            headerTitleStyle:{
              display:'flex',
              marginLeft:'auto'
            },
          }}/>
          <Stack.Screen name="Location" component={Location} options={{title:<View><Text>Go Solar</Text></View>,
            headerTitleStyle:{
              display:'flex',
              marginLeft:'auto'
            },
          }}/>
          <Stack.Screen name="Login" component={Login} options={{title :<View style={styles.logoContainer}><Text>Go Solar</Text></View>,
            headerTitleStyle:{
              display:'flex',
              marginLeft:'auto'
            },

          }} />
          <Stack.Screen name="ForgotPassword" component={ResetPassword} options={{title:<View><Text>Go Solar</Text></View>,
            headerTitleStyle:{
              display:'flex',
              marginLeft:'auto'
            },
          }} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
  if(loggedIn && !isPayment){
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MakePayment">
        <Stack.Screen name="MakePayment" component={MakePayment}
                      options={
                        {headerShown:false
                        }}/>
        <Stack.Screen name="LeadDetails" component={LeadDetails} options={{title:<View><Text>Go Solar</Text></View>,
          headerTitleStyle:{
            display:'flex',
            marginLeft:'auto'
          },

        }}/>
        <Stack.Screen name="PayPalPayment" component={Payment} options={{title :<View style={styles.logoContainer}><Text>Go Solar</Text></View>,
          headerTitleStyle:{
            display:'flex',
            marginLeft:'auto'
          },

        }} />
        <Stack.Screen name="ForgotPassword" component={ResetPassword} options={{title:<View><Text>Go Solar</Text></View>,
          headerTitleStyle:{
            display:'flex',
            marginLeft:'auto'
          },
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  }
  if(loggedIn && isPayment) {
    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    )
  }

}

export default App;
const styles=StyleSheet.create({
  logo:{

    width:200,
    resizeMode:"contain",
    marginRight:30,
  },
  logoContainer:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginLeft:20
  }
})
