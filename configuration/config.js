import  firebase from 'firebase';
// Optionally import the services that you want to use
import "firebase/auth";
import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyDOU8BBpruCfkM8RDrfObLcPkL0Dt4lNCM',
  authDomain: 'solar-8ebc6.firebaseapp.com',
  databaseURL: 'https://solar-8ebc6-default-rtdb.firebaseio.com',
  projectId: 'solar-8ebc6',
  storageBucket: 'solar-8ebc6.appspot.com',
  messagingSenderId: '378917616064',
  appId: '1:378917616064:android:cea75b9550d98f964ef025'
};
let FirebaseConfig;
if(!firebase.apps.length){
  FirebaseConfig = firebase.initializeApp(firebaseConfig);
}


export default FirebaseConfig;
