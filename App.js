import 'react-native-gesture-handler';
import * as React from 'react';
import { Pressable, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';

import PhoneAuthScreen from './screens/oneTime/phoneauth';
import SigninScreen from './screens/oneTime/SigninScreen';
import SignupScreen from './screens/oneTime/SignupScreen';
import NavScreen from './screens/nav/nav';
import OTNavScreen from './screens/nav/OTnav';

const Stack = createStackNavigator();

function App() {

  const [data, setdata] = useState('');

  const getTheme = async () => {
   try {
     const value = await AsyncStorage.getItem('once');
     setdata(value)
   } catch(error) {
     console.log('error', error);
   };
 };
 
 useEffect(() => {
   getTheme();
 }, []);


  if (data == null) {

    return <OTNavScreen />;
  } else {
    return <NavScreen />;
  }
}

export default App;
