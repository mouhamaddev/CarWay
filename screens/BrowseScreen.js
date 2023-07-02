import firebase from '../firebase/fire'
import React, {Component} from 'react';
import {View,Text, FlatList, StyleSheet, ScrollView} from 'react-native';
import {useState} from 'react';
import { ListItem, SearchBar } from "react-native-elements";

const DATA = [
  {
    id: "1",
    title: "Data Structures",
    from: "Tripoli",
    to: "Beirut",
    dateandtime: "5/11/2021, 7:30AM",
    name: "miso",
  },
  {
    id: "2",
    title: "Data Structures",
    from: "Beirut",
    to: "Akkar",
    dateandtime: "4/16/2021, 12:30PM",
    name: "miso",
  },
  ];

const Item = ({ from, to, dateandtime, name  }) => {
  return (
    <View style={styles.item}>
    <Text style = {{color : '#7a20b3'}}>{from}</Text>
    <Text style = {{color : '#7a20b3'}}>{to}</Text>
    <Text style = {{color : '#7a20b3'}}>{dateandtime}</Text>
    <Text style = {{color : '#7a20b3'}}>{name}</Text>
    </View>
  );
  };

const renderItem = ({ item }) => <Item from={item.from} to={item.to} dateandtime={item.dateandtime} name={item.name}  />;


const result = DATA.filter(element=> element.from === "Tripoli")


class App extends Component {
constructor(props) {
	super(props);
	this.state = {
	loading: false,
	data: DATA,
	error: null,
	searchValue: "",
	};
	this.arrayholder = DATA;
}
}


const renderItem2 = ({ item }) => <Item title={item.title} />;

export default class BrowseScreen extends Component{

 constructor(props){
  super(props);
  this.state={ 
  list:[],

  loading: false,
	data: DATA,
	error: null,
	searchValue: "",
 };
 this.arrayholder = DATA;
}



searchFunction = (text) => {
	const updatedData = this.arrayholder.filter((item) => {
	const item_data = `${item.title.toUpperCase()})`;
	const text_data = text.toUpperCase();
	return item_data.indexOf(text_data) > -1;
	});
	this.setState({ data: updatedData, searchValue: text });
};


componentDidMount(){
  var ref = firebase.database().ref("users");

    ref.once('value', (snapshot) =>{
      var li = []
      snapshot.forEach((child)=>{
       DATA.push({
        key: child.key,
        title:child.val().name,
        age: child.val().email
      })

      
    })
   this.setState({list:li})
  })
}

 
  render(){
    return(
    <View > 

      <SearchBar
      placeholder="Where To?"
      lightTheme
      round
      value={this.state.searchValue}
      containerStyle={{ backgroundColor: '#f2f0fe'  }}
      onChangeText={(text) => this.searchFunction(text)}/>

      <ScrollView>


      <Text style = {{color : '#7a20b3', fontSize : 25,  fontWeight: 'bold', padding : 20}}>Rides in your area</Text>
      

      <FlatList
      data={result}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      />   


      <Text style = {{color : '#7a20b3', fontSize : 25,  fontWeight: 'bold', padding : 20}}>All rides</Text>
      

      <FlatList
      data={this.state.data}
      renderItem={renderItem}
      keyExtractor={(result) => result}
      />     

</ScrollView>

    </View>
   
            );
          }
}


const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    padding: 2,
  },
  item: {
    
    
    shadowColor: '#7a20b3',
            shadowOffset: {
              height: 3,
            },
            shadowOpacity: 0.5,
            shadowRadius: 5,
            elevation: 2,
            backgroundColor: '#f9f6fb',

            borderRadius : 20,

    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  });

  /*
  
  <FlatList style={{width:'100%'}}
          data={this.state.list}
          keyExtractor={(item)=>item.key}
          renderItem={({item})=>{
             return(
                <View>
                   <Text>{item.name}---{item.age}</Text>
                </View>)
             }}/>
             */