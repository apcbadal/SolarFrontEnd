import React from 'react';
import {ActivityIndicator, View, Dimensions, Image} from 'react-native';
import {WebView} from 'react-native-webview';
import {useRoute} from '@react-navigation/native';
import FirebaseConfig from "../../configuration/config";

const {width, height} = Dimensions.get('screen');

export default function Payment(props) {
  const route = useRoute();
  //const email=FirebaseConfig.auth().currentUser.email;
  const email='apcbadal@gmail.com'
  const stateChng = (navState) => {
    //  console.log(navState);
    const {url, title} = navState;
    if (title == 'PayPal Sucess') {
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
      source={{uri: 'https://cim8fj7mwn.us-east-2.awsapprunner.com/:' + email,method:'get'}}
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
