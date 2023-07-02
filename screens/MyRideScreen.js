import * as React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Image,
  ImageBackground,
  Button,
  TextInput,
  ScrollView,
  Dimensions, 
  AppRegistry,
  FlatList,Alert
} from 'react-native';
import * as firebase from 'firebase';
import { useState } from 'react';
import database from '@react-native-firebase/database';
import CircleButton from 'react-native-circle-button';
import { color } from 'react-native-elements/dist/helpers';

const { width } = Dimensions.get('window');


const DATA = [
  {
    id: "1",
    title: "Data Structures",
    from: "Tripoli",
    to: "Beirut",
    dateandtime: "5/11/2021, 7:30AM",
    name: "miso",
  }]



  const Item = ({ from, to, dateandtime, name  }) => {
    return (
      <View style={styles.item}>
      <Text>{from}</Text>
      <Text>{to}</Text>
      <Text>{dateandtime}</Text>
      <Text>{name}</Text>
      </View>
    );
    };


const renderItem = ({ item }) => <Item from={item.from} to={item.to} dateandtime={item.dateandtime} name={item.name}  />;


const MyRideScreen = ({ navigation }) => {

  
  
  const [check, setCheck] = useState();
  //const [myRide, setMyRide] = useState('');

  //var myRide;
  //var NotmyRide;

  //render() {

    

    const ref = firebase.database().ref("Rides");
ref.once("value")
  .then(function(snapshot) {
    var a = snapshot.exists();  // true
    var b = snapshot.child('userid').exists(); // true
    setCheck(a)
  });


//Alert.alert(check);
  


  const user = firebase.auth().currentUser;



  /*if(check == "true")
  {
    alert("2")
  }
  else
  {
    alert(check)
  }*/


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16, paddingTop : 150}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>              

              {check ? (
        
        
        <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={(result) => result}
      /> 


      ) : (
        //<Text style = {{ fontSize : 20 ,color : '#7a20b3', marginBottom : 50}}> You did not host a ride yet!</Text>
        //<Text > { user.uid }</Text>
        <Text >no rides son { check }</Text>

      )}


<TouchableOpacity
   style={{
       borderWidth:1,
       borderColor:'#7a20b3',
       alignItems:'center',
       justifyContent:'center',
       width:65,
       height:65,
       backgroundColor:'#fff',
       borderRadius:50,

       position: 'absolute',
                right: 20,
                top: 500,
     }}

     onPress={() =>  navigation.navigate('add')}
 >
<Text style = {styles.btntxt} >+</Text>
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

  image: {
    width: '100%',
    height: 150,
    resizeMode: 'stretch'
},

row: {
  flex: 0.1,
  flexDirection: "row",
  paddingTop : 35
},
inputWrap: {
  marginRight : 1,
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

  fontSize: 30,
  color: '#7a20b3'
},

btn: {

},

item: {
  
  
  shadowColor: '#7a20b3',
            shadowOffset: {
              height: 3,
            },
            shadowOpacity: 0.5,
            shadowRadius: 5,
            elevation: 2,
            backgroundColor: 'white',

            borderRadius : 20,
            
  padding: 20,
  marginVertical: 8,
  marginHorizontal: 16,
},


});
export default MyRideScreen;