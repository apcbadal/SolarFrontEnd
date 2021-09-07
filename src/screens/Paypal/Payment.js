import React, { useEffect, useState } from "react";
import {ActivityIndicator, View, Dimensions, Image} from 'react-native';
import {WebView} from 'react-native-webview';
import FirebaseConfig from "../../../configuration/config";
import firestore from "@react-native-firebase/firestore";
import auth from "@react-native-firebase/auth";

const {width, height} = Dimensions.get('screen');

export default function Payment(props) {
  const [user,setUser]=useState(null)
  const[email,setEmail] =useState(null)
  useEffect(()=>{
    setEmail(auth().currentUser.email);
    if(email) {
      firestore().collection("Users").doc(email).get().then((response) => {
        setUser(response)
      })
    }
  },[user])

 // const email='apcbadal@gmail.com'
  const stateChng = (navState) => {
    //  console.log(navState);
    const {url, title} = navState;
    if (title === 'PayPal Sucess') {
      console.log('url', url);
      let spliturl = url.split('?');
      // console.log("spliturl",spliturl);
      let splitotherhalf = spliturl[1].split('&');
      console.log('splitotherhalf', splitotherhalf);
      let paymentId = splitotherhalf[0].replace('paymentId=', '');
      let token = splitotherhalf[1].replace('token=', '');
      let PayerID = splitotherhalf[2].replace('PayerID=', '');
      props.navigation.navigate('Success', {
        payId: paymentId,
        token: token,
        payerId: PayerID,
      });
      // console.log("paymentId", paymentId);
      // console.log("token", token);
      // console.log("PayerID", PayerID);
    }
  };

  return (
    <WebView
      startInLoadingState={true}
      onNavigationStateChange={stateChng}
      renderLoading={() => <Loading />}
      source={{uri: 'https://cim8fj7mwn.us-east-2.awsapprunner.com/pay/:' + email,method:'get'}}
    />
  );
}

const Loading = () => {
  return (
    <View
      style={{
        height: height,
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        source={require('./paypal.png')}
        style={{width: 250, height: 100, resizeMode: 'contain'}}
      />
    </View>
  );
};
