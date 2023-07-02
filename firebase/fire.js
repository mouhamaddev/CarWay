import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCSQSZ0iesqthRGo6WBFCLAc-RaHv_KV7I",
  authDomain: "react-test-126e0.firebaseapp.com",
  projectId: "react-test-126e0",
  storageBucket: "react-test-126e0.appspot.com",
  messagingSenderId: "499717600812",
  appId: "1:499717600812:web:1a35a663da963d36c58389"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;