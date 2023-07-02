import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  Alert,
  ActivityIndicator,
  Platform,
  TouchableOpacity
} from 'react-native';
import * as FirebaseRecaptcha from 'expo-firebase-recaptcha';
import * as firebase from 'firebase';

import { AsyncStorage } from 'react-native';

// PROVIDE VALID FIREBASE CONFIG HERE
// https://firebase.google.com/docs/web/setup

//const FIREBASE_CONFIG: any = {
  const FIREBASE_CONFIG = {
    apiKey: "AIzaSyCSQSZ0iesqthRGo6WBFCLAc-RaHv_KV7I",
    authDomain: "react-test-126e0.firebaseapp.com",
    databaseURL: "https://react-test-126e0.firebaseio.com",
    projectId: "react-test-126e0",
    storageBucket: "react-test-126e0.appspot.com",
    messagingSenderId: "499717600812",
    appId: "1:499717600812:web:1a35a663da963d36c58389"
    //measurementId: "G-XXXXXXX"
};

try {
  if (FIREBASE_CONFIG.apiKey) {
    firebase.initializeApp(FIREBASE_CONFIG);
  }
} catch (err) {
  // ignore app already initialized error on snack
}

const PhoneAuthScreen = ({ navigation }) => {
    
  const recaptchaVerifier = React.useRef(null);
  const verificationCodeTextInput = React.useRef(null);
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [verificationId, setVerificationId] = React.useState('');
  const [verifyError, setVerifyError] = React.useState();
  const [verifyInProgress, setVerifyInProgress] = React.useState(false);
  const [verificationCode, setVerificationCode] = React.useState('');
  const [confirmError, setConfirmError] = React.useState();
  const [confirmInProgress, setConfirmInProgress] = React.useState(false);
  const isConfigValid = !!FIREBASE_CONFIG.apiKey;

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <FirebaseRecaptcha.FirebaseRecaptchaVerifierModal
          ref={recaptchaVerifier}
          firebaseConfig={FIREBASE_CONFIG}
        />
        <Text style={styles.title}>Welcome to CarWay app!</Text>
        <Text style={styles.subtitle}>please enter your phone number :</Text>
        <Text style={styles.text}>Phone number</Text>
        <TextInput
          style={styles.textInput}
          autoFocus={isConfigValid}
          autoCompleteType="tel"
          keyboardType="phone-pad"
          textContentType="telephoneNumber"
          placeholder="+961 71 123456"
          placeholderTextColor="#9772ae"
          editable={!verificationId}
          //onChangeText={(phoneNumber: string) => setPhoneNumber(phoneNumber)}
          onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)}
        />

        <Button
          color="#7a20b3"
          title={`${verificationId ? 'Resend' : 'Send'} Verification Code`}
          disabled={!phoneNumber}
          onPress={async () => {


            
            
            const phoneProvider = new firebase.auth.PhoneAuthProvider();
            try {
              setVerifyError(undefined);
              setVerifyInProgress(true);
              setVerificationId('');
              const verificationId = await phoneProvider.verifyPhoneNumber(
                phoneNumber,
                // @ts-ignore
                recaptchaVerifier.current
              );
              setVerifyInProgress(false);
              setVerificationId(verificationId);
              verificationCodeTextInput.current?.focus();
            } catch (err) {
              setVerifyError(err);
              setVerifyInProgress(false);
            }
          }}
        />
        {verifyError && <Text style={styles.error}>{`Error: ${verifyError.message}`}</Text>}
        {verifyInProgress && <ActivityIndicator style={styles.loader} />}
        {verificationId ? (
          <Text style={styles.success}>A verification code has been sent to your phone</Text>
        ) : (
          undefined
        )}
        <Text style={styles.text}>Verification code</Text>
        <TextInput
          ref={verificationCodeTextInput}
          style={styles.textInput}
          editable={!!verificationId}
          placeholder="123456"
          placeholderTextColor="#9772ae" 
          //onChang
          eText={(verificationCode: string) => setVerificationCode(verificationCode)}
          onChangeText={(verificationCode) => setVerificationCode(verificationCode)}
        />
        <Button
        color="#7a20b3"
          title="Confirm Verification Code"
          disabled={!verificationCode}
          onPress={async () => {
            try {
              setConfirmError(undefined);
              setConfirmInProgress(true);
              const credential = firebase.auth.PhoneAuthProvider.credential(
                verificationId,
                verificationCode
              );
              const authResult = await firebase.auth().signInWithCredential(credential);
              setConfirmInProgress(false);
              setVerificationId('');
              setVerificationCode('');
              verificationCodeTextInput.current?.clear();
              
              //-----------------------------------------------------------------------------------
              //-----------------------------------------------------------------------------------
              //-----------------------------------------------------------------------------------
              
              //Alert.alert('Phone authentication successful!');

              AsyncStorage.setItem('phoneNumber', phoneNumber);

              navigation.navigate('Signup')
              
            } catch (err) {
              setConfirmError(err);
              setConfirmInProgress(false);
            }
          }}
        />
        {confirmError && <Text style={styles.error}>{`Error: ${confirmError.message}`}</Text>}
        {confirmInProgress && <ActivityIndicator style={styles.loader} />}
      </View>
      {!isConfigValid && (
        <View style={styles.overlay} pointerEvents="none">
          <Text style={styles.overlayText}>
            To get started, set a valid FIREBASE_CONFIG in App.tsx.
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor : '#f2f0fe'
  },
  content: {
    marginTop: 50,
  },
  title: {
    marginBottom: 2,
    fontSize: 29,
    fontWeight: 'bold',
    color : '#7a20b3'
  },
  subtitle: {
    marginBottom: 10,
    opacity: 0.75,
    fontWeight: 'bold',
    color : '#7a20b3'
  },
  text: {
    marginTop: 30,
    marginBottom: 4,
    color : '#7a20b3'
  },
  textInput: {
    marginBottom: 8,
    fontSize: 17,
    fontWeight: 'bold',
    color : '#7a20b3'
  },
  error: {
    marginTop: 10,
    fontWeight: 'bold',
    color: 'red',
  },
  success: {
    marginTop: 10,
    fontWeight: 'bold',
    color : '#7a20b3'
  },
  loader: {
    marginTop: 10,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#FFFFFFC0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlayText: {
    fontWeight: 'bold',
    color : '#7a20b3'
  },

 

});

export default PhoneAuthScreen;
