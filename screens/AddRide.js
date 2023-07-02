import * as React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Image,
  ImageBackground,
  TextInput,
  ScrollView,
  Dimensions,
  AppRegistry,
  Picker,
  Alert,
} from 'react-native';
import * as firebase from 'firebase';
import { useState } from 'react';
import database from '@react-native-firebase/database';
import CircleButton from 'react-native-circle-button';
import { color } from 'react-native-elements/dist/helpers';
import { Input, Button } from 'react-native-elements';

import { WheelPicker, Item } from 'react-native-android-wheel-picker';

//import DatePicker from 'react-native-date-picker';

import DatePicker from 'react-native-datepicker';

import { TimePicker } from 'react-native-simple-time-picker';

import { Platform } from 'react-native';
//import { Picker, DatePicker } from 'react-native-wheel-pick';


import ReactNativeItemSelect from 'react-native-item-select';
//import ScrollPicker from 'react-native-wheel-scrollview-picker';

import DateTimePicker from '@react-native-community/datetimepicker';

const { width } = Dimensions.get('window');

const AddRide = ({ navigation }) => {
  const [hour, setHour] = useState(0);
  const [day, setDay] = useState(0);
  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(0);

  const [selectedHours, setSelectedHours] = useState(0);
  const [selectedMinutes, setSelectedMinutes] = useState(0);

  const [selectedValue1, setSelectedValue1] = useState('');

  const [selectedValue2, setSelectedValue2] = useState('');

  //const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false);

  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState(null);
  const [value, onChange] = useState('10:00');

  const [date, setDate] = useState('01-01-2022');

  var Nmonth = new Date().getMonth() + 1; //To get the Current Month
  var Nyear = new Date().getFullYear();
  var Nday = new Date().getDate();

  const [ddate, setDdate] = useState(new Date());

  const oonChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16, marginTop: 30 }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <Text style={{ fontSize: 20, color: '#7a20b3', paddingTop: 13 }}>
                {' '}
                From :
              </Text>

              <Picker
                selectedValue={selectedValue1}
                style={{ height: 50, width: 150, color: '#7a20b3' }}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedValue1(itemValue)
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
                <Picker.Item
                  label="Keserwan"
                  value="Keserwan"
                  color="#7a20b3"
                />
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
                <Picker.Item
                  label="Nabatieh"
                  value="Nabatieh"
                  color="#7a20b3"
                />
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

            <View style={{ flex: 1, flexDirection: 'row' }}>
              <Text style={{ fontSize: 20, color: '#7a20b3', paddingTop: 13 }}>
                {' '}
                To :{' '}
              </Text>

              <Picker
                selectedValue={selectedValue2}
                style={{ height: 50, width: 150, color: '#7a20b3' }}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedValue2(itemValue)
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
                <Picker.Item
                  label="Keserwan"
                  value="Keserwan"
                  color="#7a20b3"
                />
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
                <Picker.Item
                  label="Nabatieh"
                  value="Nabatieh"
                  color="#7a20b3"
                />
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
          </View>

          <View
            style={{
              justifyContent: 'center',
              flexDirection: 'row',
              width: '20%',
              marginBottom: 400,
            }}>
            <Text style={{ fontSize: 20, color: '#7a20b3', paddingTop: 13 }}>
              {' '}
              Time :{' '}
            </Text>

            <Picker
              selectedValue={selectedValue2}
              style={{ height: 50, width: 150, color: '#7a20b3' }}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedValue2(itemValue)
              }>
              <Picker.Item label="12 AM" value="12 AM" color="#7a20b3" />
              <Picker.Item label="1 AM" value="1 AM" color="#7a20b3" />
              <Picker.Item label="2 AM" value="2 AM" color="#7a20b3" />
              <Picker.Item label="3 AM" value="3 AM" color="#7a20b3" />
              <Picker.Item label="4 AM" value="4 AM" color="#7a20b3" />
              <Picker.Item label="5 AM" value="5 AM" color="#7a20b3" />
              <Picker.Item label="6 AM" value="6 AM" color="#7a20b3" />
              <Picker.Item label="7 AM" value="7 AM" color="#7a20b3" />
              <Picker.Item label="8 AM" value="8 AM" color="#7a20b3" />
              <Picker.Item label="9 AM" value="9 AM" color="#7a20b3" />
              <Picker.Item label="10 AM" value="10 AM" color="#7a20b3" />
              <Picker.Item label="11 AM" value="11 AM" color="#7a20b3" />
              <Picker.Item label="12 PM" value="12 PM" color="#7a20b3" />
              <Picker.Item label="1 PM" value="1 PM" color="#7a20b3" />
              <Picker.Item label="2 PM" value="2 PM" color="#7a20b3" />
              <Picker.Item label="3 PM" value="3 PM" color="#7a20b3" />
              <Picker.Item label="4 PM" value="4 PM" color="#7a20b3" />
              <Picker.Item label="5 PM" value="5 PM" color="#7a20b3" />
              <Picker.Item label="6 PM" value="6 PM" color="#7a20b3" />
              <Picker.Item label="7 PM" value="7 PM" color="#7a20b3" />
              <Picker.Item label="8 PM" value="8 PM" color="#7a20b3" />
              <Picker.Item label="9 PM" value="9 PM" color="#7a20b3" />
              <Picker.Item label="10 PM" value="10 PM" color="#7a20b3" />
              <Picker.Item label="11 PM" value="11 PM" color="#7a20b3" />
            </Picker>
          </View>

            <View
            style={{

            }}>

          <DatePicker
            date={ddate}
            showIcon={false}
            placeholder="Birthday"
            mode="date"
            format="DD-MM-YYYY"
            customStyles={{
              dateInput: {
                borderWidth: 0,
                height: 50,
                width: 170,
                right: 30,
              },
              dateText: {
                marginTop: 5,
                color: 'white',
                fontSize: 18,
              },
              placeholderText: {
                marginTop: 5,
                right: 10,
                color: 'white',
                fontSize: 18,
              },
            }}
            minDate={new Date()}
            onDateChange={(date) => {
              setDdate(date)
            }}
            placeholderTextColor="white"
            underlineColorAndroid={'rgba(0,0,0,0)'}
            style={{
              height: 50,
              width: 170,
              paddingLeft: 15,
              borderRadius: 4,
              backgroundColor: 'rgba(0,0,0,0.4)',
            }}></DatePicker>

          <Button
            buttonStyle={{ backgroundColor: '#7a20b3', marginTop: 20 }}
            title="Submit"
            onPress={() => alert('hehe')}
          />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 300,
    marginTop: 16,
  },

  image: {
    width: '100%',
    height: 150,
    resizeMode: 'stretch',
  },

  row: {
    flex: 0.1,
    flexDirection: 'row',
    paddingTop: 35,
  },
  inputWrap: {
    marginRight: 1,
  },
  view: {
    backgroundColor: '#808080',
    width: width - 80,
    margin: 10,
    height: 200,
    borderRadius: 10,
    //paddingHorizontal : 30
  },

  btntxt: {
    fontSize: 40,
    color: 'blue',
  },

  btn: {},

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
  },
  datePickerStyle: {
    width: 200,
    marginTop: 20,
  },
});
export default AddRide;
