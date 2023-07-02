import React, {Component} from 'react';  
import {Platform, StyleSheet, Text,  
  View,TouchableOpacity, AsyncStorage,  
} from 'react-native';  
import { useState, useEffect } from 'react';

import { Pressable, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import PhoneAuthScreen from '../oneTime/phoneauth';
import SigninScreen from '../oneTime/SigninScreen';
import SignupScreen from '../oneTime/SignupScreen';
import NavScreen from './nav';

const Stack = createStackNavigator();

export default class App extends Component<Props> {  

  render() {  
    return (
     <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Phone" component={PhoneAuthScreen} />
        
        <Stack.Screen name="Signip" component={SigninScreen} />

        <Stack.Screen name="Navv" component={NavScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
  }  
}