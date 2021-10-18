import React, { useEffect, useState } from "react";
import MainNavigator from "./src/navigation/MainNavigator";
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import rootReducer from './src/redux/reducers'
import { createStore, applyMiddleware } from 'redux'
import * as Sentry from '@sentry/react-native'
import Location from './src/screens/Location'
import { NavigationContainer } from "@react-navigation/native";
import auth from "@react-native-firebase/auth";
import Landing from "./src/screens/Landing";
import Register from "./src/screens/Register";
import Login from "./src/screens/Login";
import ResetPassword from "./src/screens/ResetPassword";
import { Text, View, StyleSheet, ActivityIndicator } from "react-native";
import createStackNavigator from "@react-navigation/stack/src/navigators/createStackNavigator";
import firestore from "@react-native-firebase/firestore";
import Payment from "./src/screens/Paypal/Payment";
import MakePayment from "./src/screens/MakePayment";
import LeadDetails from "./src/screens/LeadDetails";
import PrimeMember from "./src/screens/PrimeMember";
import * as colors from "./constants/color";
const store = createStore(rootReducer, applyMiddleware(thunk))
const Stack = createStackNavigator();

Sentry.init({
  dsn: 'https://ad529cc938e742449a8f26f7dc5baabb@o968312.ingest.sentry.io/5919727',
});
const App = () => {
  const[loggedIn,setLoggedin]=useState(false)
  const[userData,setUserData]=useState(null)
  const[loaded,setLoaded] =useState(null)
  const [isPayment,setIsPayment]=useState(false)
 const  getCurrentUser=()=> {
    auth().onAuthStateChanged((user) => {
      if (!user) {
        setLoggedin(false)
        setLoaded(true)
      }
      else{
        firestore().collection("Users").doc(user.email).get().then((res) => {
          setUserData(res)
          console.log(res._data.isPayment)
          setLoaded(true)
          setLoggedin(true)
          if(res._data.isPayment){
            setIsPayment(true)
          }
        })
      }
    })
  }
  useEffect(()=>{
    getCurrentUser()
  },[userData])
 if(!loaded){
    return (
      <View style={styles.loadingContainer}>
        <View style={[styles.container, styles.horizontal]}>
          <ActivityIndicator size="large" color={colors.PRIMARY_RED }/>
        </View>
      </View>
    )
  }
 else  if (!loggedIn || !isPayment) {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Landing">
          <Stack.Screen name="Landing" component={Landing}
                        options={
                          {headerShown:false
                          }}/>
          <Stack.Screen name="Register" component={Register} options={{headerShown:false}}/>
          <Stack.Screen name="Location" component={Location} options={{headerShown:false}}/>
          <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
          <Stack.Screen name="Payment" component={MakePayment} options={{title :<View style={styles.logoContainer}><Text>Go Solar</Text></View>,
            headerTitleStyle:{
              display:'flex',
              marginLeft:'auto'
            },

          }} />
          <Stack.Screen name="PrimeMember" component={PrimeMember} options={{title :<View style={styles.logoContainer}><Text>Go Solar</Text></View>,
            headerTitleStyle:{
              display:'flex',
              marginLeft:'auto'
            },

          }} />
          <Stack.Screen name="ResetPassword" component={ResetPassword} options={{headerShown:false}} />
          <Stack.Screen name="LeadDetails" component={LeadDetails} options={{headerShown:false}}/>
          <Stack.Screen name="PayPalPayment" component={Payment} options={{title:<View><Text>Go Solar</Text></View>,
            headerTitleStyle:{
              display:'flex',
              marginLeft:'auto'
            },

          }}/>

        </Stack.Navigator>

      </NavigationContainer>
    )
  }

  else if(!loggedIn)
  {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Landing">
          <Stack.Screen name="Landing" component={Landing}
                        options={
                          {headerShown:false
                          }}/>
          <Stack.Screen name="Register" component={Register} options={{headerShown:false}}/>
          <Stack.Screen name="Location" component={Location} options={{headerShown:false}}/>
          <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
          <Stack.Screen name="Payment" component={MakePayment} options={{title :<View style={styles.logoContainer}><Text>Go Solar</Text></View>,
            headerTitleStyle:{
              display:'flex',
              marginLeft:'auto'
            },

          }} />
          <Stack.Screen name="PrimeMember" component={PrimeMember} options={{title :<View style={styles.logoContainer}><Text>Go Solar</Text></View>,
            headerTitleStyle:{
              display:'flex',
              marginLeft:'auto'
            },

          }} />
          <Stack.Screen name="ResetPassword" component={ResetPassword} options={{title:<View><Text>Go Solar</Text></View>,
            headerTitleStyle:{
              display:'flex',
              marginLeft:'auto'
            },
          }} />
          <Stack.Screen name="LeadDetails" component={LeadDetails} options={{headerShown:false}}/>
          <Stack.Screen name="PayPalPayment" component={Payment} options={{title:<View><Text>Go Solar</Text></View>,
            headerTitleStyle:{
              display:'flex',
              marginLeft:'auto'
            },

          }}/>

        </Stack.Navigator>

      </NavigationContainer>
    )
  }  else if(!isPayment){
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="PrimeMember">
          <Stack.Screen name="Landing" component={Landing}
                        options={
                          {headerShown:false
                          }}/>
          <Stack.Screen name="Payment" component={MakePayment} options={{title :<View style={styles.logoContainer}><Text>Go Solar</Text></View>,
            headerTitleStyle:{
              display:'flex',
              marginLeft:'auto'
            },

          }} />
          <Stack.Screen name="PrimeMember" component={PrimeMember} options={{title :<View style={styles.logoContainer}><Text>Go Solar</Text></View>,
            headerTitleStyle:{
              display:'flex',
              marginLeft:'auto'
            },

          }} />

          <Stack.Screen name="PayPalPayment" component={Payment} options={{title:<View><Text>Go Solar</Text></View>,
            headerTitleStyle:{
              display:'flex',
              marginLeft:'auto'
            },

          }}/>

        </Stack.Navigator>

      </NavigationContainer>
    )
  }
  else if( isPayment){
    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    )
  }
  else{
    return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName="PrimeMember">
          <Stack.Screen name="Landing" component={Landing}
                        options={
                          {headerShown:false
                          }}/>
          <Stack.Screen name="Payment" component={MakePayment} options={{title :<View style={styles.logoContainer}><Text>Go Solar</Text></View>,
            headerTitleStyle:{
              display:'flex',
              marginLeft:'auto'
            },

          }} />
          <Stack.Screen name="PrimeMember" component={PrimeMember} options={{title :<View style={styles.logoContainer}><Text>Go Solar</Text></View>,
            headerTitleStyle:{
              display:'flex',
              marginLeft:'auto'
            },

          }} />

          <Stack.Screen name="PayPalPayment" component={Payment} options={{title:<View><Text>Go Solar</Text></View>,
            headerTitleStyle:{
              display:'flex',
              marginLeft:'auto'
            },

          }}/>

        </Stack.Navigator>

      </NavigationContainer>

    )
  }



}

export default App;
const styles=StyleSheet.create({
  loadingContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    //backgroundColor:colors.PRIMARY_RED,
  },
  loadingText: {
    fontSize: 20,
    color: "#000",
    fontWeight: "bold",
    textAlign: "center",
    lineHeight: 50,
    width:"80%"

  },
  container: {
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 40,
  },
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
