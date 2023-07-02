import * as React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Linking,
  Alert,
} from 'react-native';
import { useState, useEffect } from 'react';
import auth from '@react-native-firebase/auth';
import { AsyncStorage } from 'react-native';

import * as Updates from 'expo-updates';


const UserScreen = ({ route, navigation }) => {

  async function signOut () {

    //AsyncStorage.setItem('once', 'null');
    AsyncStorage.removeItem('once');
    await Updates.reloadAsync();
    
    //auth().signOut().then(() => console.log('User signed out!'));
    }
  
  //const [hour, setHour] = useState('');
  const [greeting, setGreeting] = useState('');
  var hour = new Date().getHours();

  useEffect(() => {

  if(hour < 14){
    setGreeting('morning');
  }
  else{
    setGreeting('evening');
  }

  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>


      <View style={{ flex: 1, padding: 16 }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          

          
          <TouchableOpacity style={styles.btn} onPress={() => Alert.alert("What is this?", "With the CarWay app, you can find cars and vans in your neighborhood and across Lebanon. Save money and gas by sharing cars! ")} >
          <Text style={{ fontSize: 25, textAlign: 'center', marginBottom: 40, color : '#7a20b3'}}> Help </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} onPress={() => Linking.openURL('https://www.termsofusegenerator.net/live.php?token=DJy1Y5kaFOpfSVFqyEXGhtnDYjmuIhGb')} >
          <Text style={{ fontSize: 25, textAlign: 'center', marginBottom: 40, color : '#7a20b3'}}> Terms of use </Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.btn} onPress={() => Linking.openURL('https://www.gdprprivacypolicy.net/live.php?token=N1kzEgF0icPLVTGOlXztRp8V3bxb2wTf')} >
          <Text style={{ fontSize: 25, textAlign: 'center', marginBottom: 40, color : '#7a20b3'}}> Privacy policy </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} onPress={() => Alert.alert("About",'Version 1.0 . Note : This App is still in Beta version Help us to develop this app')} >
          <Text style={{ fontSize: 25, textAlign: 'center', marginBottom: 40, color : '#7a20b3'}}> About </Text>
          </TouchableOpacity>


          <TouchableOpacity style={styles.btn} onPress={() => signOut()} >
          <Text style={{ fontSize: 25, textAlign: 'center', marginBottom: 40, color: 'red'}}> Sign out </Text>
          </TouchableOpacity>


        </View>
      </View>
    </SafeAreaView>

  );
}
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 300,
    marginTop: 16,
  },
  btn: {
    //alignItems: "center",
    //backgroundColor: "#d6bbe5",
    padding: 10

  },
});
export default UserScreen;