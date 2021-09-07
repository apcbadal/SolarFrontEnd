import React, { useState } from "react";
import {View, TextInput, Button, StyleSheet, Text, Image} from 'react-native';
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";

export default function MakePayment(props) {
  const [amt, setamt] = React.useState('97');
  const[email,setEmail] =useState(null)
  const [user,setUser]=useState(null)

  const pay = () => {
    setEmail(auth().currentUser.email);
    if(email) {
      firestore().collection("Users").doc(email).get().then((response) => {
        setUser(response)
      })
      if (user && user._data.isPayment === true) {
        props.navigation.navigate("LeadDetails")
      } else {
      props.navigation.navigate("PayPalPayment")
      }
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('./Paypal/paypal.png')} style={styles.img} />
      <Text style={styles.title}>Pay 97 $ to get the details of Solar lead  </Text>

      <Button title="Pay Now" onPress={pay} />
    </View>
  );
}

const styles = StyleSheet.create({
  textinput: {
    borderWidth: 1,
    width: '100%',
    borderColor: '#ccc',
    borderRadius: 5,
    paddingLeft: 15,

    marginBottom: 25,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
    backgroundColor: '#fff',
  },
  img: {
    width: 250,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 30,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 50,
  },
});
