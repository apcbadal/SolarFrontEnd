import  firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCX4DkSFDRrN_yIrDMPN2llHpQOIzmViSA',
  authDomain: 'solar-go.firebaseapp.com',
  databaseURL: 'https://solar-go-default-rtdb.firebaseio.com',
  projectId: 'solar-go',
  storageBucket: 'solar-go.appspot.com',
  messagingSenderId: '569361359677',
  appId: '1:569361359677:android:87aa63d2d1aca535001b54'
};
let FirebaseConfig;
if(!firebase.apps.length){
  FirebaseConfig = firebase.initializeApp(firebaseConfig);
}


export default FirebaseConfig;
