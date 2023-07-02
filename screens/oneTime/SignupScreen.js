import database from '@react-native-firebase/database';
import React, { useState, Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { Button, Input, Text, StyleSheet } from 'react-native-elements';
import { View, Picker } from 'react-native';
//import {Picker} from '@react-native-community/picker';
import firebase from '../../firebase/fire';
//import database from '@react-native-firebase/database';

import { AsyncStorage } from 'react-native';


const SignupScreen = ({ navigation }) => {


  const [shit , setShit] = useState("hi");
      
  // Push Function
  const Push = () => {
    firebase.database().ref("user").set({
      name : shit,
    }).catch(alert);
  }



  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const [selectedValue, setSelectedValue] = useState('');

  const signUp = async () => {
    
    try {
      const response = await firebase.auth().createUserWithEmailAndPassword(email, password).then((newUser) => {
        
          firebase.database().ref('/Users').child(newUser.user.uid).set({
            name: name,
            email: email,
            city: selectedValue,
          });

          //alert(newUser.user.uid);
        });


         ref.child('Users').set({
  date_of_birth: 'December 9, 1906',
});


      
      //navigation.navigate('Navv');

      //await AsyncStorage.setItem('firstTime', 'yes');
      AsyncStorage.setItem('once', 'yes');

      AsyncStorage.setItem('email', email);
      AsyncStorage.setItem('password', password);
      AsyncStorage.setItem('city', selectedValue);
      AsyncStorage.setItem('name', name);
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <>
      <View style={{ backgroundColor: '#f2f0fe', flex: 1, padding: 50 }}>
        <Text
          style={{
            fontSize: 30,
            padding: 20,
            fontWeight: 'bold',
            color: '#7a20b3',
          }}>
          Sign Up
        </Text>

        <View style={{ backgroundColor: '#f2f0fe', flex: 1, padding: 30 }}>
          <Input
            label="Full Name"
            value={name}
            onChangeText={setName}
            labelStyle={{ color: '#7a20b3' }}
          />
          <Input
            label="Email"
            value={email}
            onChangeText={setEmail}
            labelStyle={{ color: '#7a20b3' }}
          />

          <Input
            label="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            labelStyle={{ color: '#7a20b3' }}
          />

          {error ? <Text style={{ color: 'red' }}>{error}</Text> : null}

          <View>
            <Picker
              selectedValue={selectedValue}
              style={{ height: 50, width: 150, color: '#7a20b3' }}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedValue(itemValue)
              }>
              <Picker.Item label="Akkar" value="Akkar" color="#7a20b3" />
              <Picker.Item
                label="Al Mazraa"
                value="Al Mazraa"
                color="#7a20b3"
              />
              <Picker.Item label="Aley" value="Aley" color="#7a20b3" />
              <Picker.Item
                label="Ashrafieh"
                value="Ashrafieh"
                color="#7a20b3"
              />
              <Picker.Item label="Baabda" value="Baabda" color="#7a20b3" />
              <Picker.Item label="Baalbek" value="Baalbek" color="#7a20b3" />
              <Picker.Item label="Batroun" value="Batroun" color="#7a20b3" />
              <Picker.Item
                label="Bint Jbeil"
                value="Bint Jbeil"
                color="#7a20b3"
              />
              <Picker.Item label="Bsharri" value="Bsharri" color="#7a20b3" />
              <Picker.Item label="Byblos" value="Byblos" color="#7a20b3" />
              <Picker.Item label="Chouf" value="Chouf" color="#7a20b3" />
              <Picker.Item label="Cola" value="Cola" color="#7a20b3" />
              <Picker.Item label="Dawra" value="Dawra" color="#7a20b3" />
              <Picker.Item
                label="Furn el chebbak"
                value="Furn el chebbak"
                color="#7a20b3"
              />
              <Picker.Item label="Hasbaya" value="Hasbaya" color="#7a20b3" />
              <Picker.Item label="Hermel" value="Hermel" color="#7a20b3" />
              <Picker.Item label="Jezzine" value="Jezzine" color="#7a20b3" />
              <Picker.Item label="Keserwan" value="Keserwan" color="#7a20b3" />
              <Picker.Item label="Koura" value="Koura" color="#7a20b3" />
              <Picker.Item label="Manara" value="Manara" color="#7a20b3" />
              <Picker.Item
                label="Marfa Beirut"
                value="Marfa Beirut"
                color="#7a20b3"
              />
              <Picker.Item
                label="Marjeyoun"
                value="Marjeyoun"
                color="#7a20b3"
              />
              <Picker.Item label="Matn" value="Matn" color="#7a20b3" />
              <Picker.Item label="Nabatieh" value="Nabatieh" color="#7a20b3" />
              <Picker.Item label="Raouché" value="Raouché" color="#7a20b3" />
              <Picker.Item
                label="Ras Beirut"
                value="Ras Beirut"
                color="#7a20b3"
              />
              <Picker.Item label="Rashaya" value="Rashaya" color="#7a20b3" />
              <Picker.Item
                label="Riad el solh'"
                value="Riad el solh'"
                color="#7a20b3"
              />
              <Picker.Item
                label="Sahat al shuhada"
                value="Sahat al shuhada"
                color="#7a20b3"
              />
              <Picker.Item label="Sidon" value="Sidon" color="#7a20b3" />
              <Picker.Item
                label="Sin el fil"
                value="Sin el fil"
                color="#7a20b3"
              />
              <Picker.Item label="Tripoli" value="Tripoli" color="#7a20b3" />
              <Picker.Item label="Tyre" value="Tyre" color="#7a20b3" />
              <Picker.Item label="Zgharta" value="Zgharta" color="#7a20b3" />
            </Picker>
          </View>

          <Button
            buttonStyle={{ backgroundColor: '#7a20b3' }}
            title="SignUp"
            onPress={() => Push()}
            
          />
          <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
            <Text style={{ color: '#7a20b3' }}>
              Already have an account? Sign In
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default SignupScreen;
