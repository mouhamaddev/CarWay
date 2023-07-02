import 'react-native-gesture-handler';

import 'react-native-gesture-handler';

import * as React from 'react';
  
import
 MaterialCommunityIcons
from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  NavigationContainer
} from '@react-navigation/native';
import {
  createStackNavigator
} from '@react-navigation/stack';
import {
  createBottomTabNavigator
} from '@react-navigation/bottom-tabs';

import MyRideScreen from '../MyRideScreen';
import UserScreen from '../UserScreen';
import BrowseScreen from '../BrowseScreen';

import AddRide from '../AddRide';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MyRideStack() {
  return (
      <Stack.Navigator
        initialRouteName="My Ride"
        screenOptions={{headerShown: true, headerTintColor: '#7a20b3',}}
        >
        <Stack.Screen
          name="My Ride"
          component={MyRideScreen}
          options={{ title: 'My Ride' }}/>

          <Stack.Screen
          name="add"
          component={AddRide}
          options={{ title: 'Add Ride' }}/>


      </Stack.Navigator>
  );
}

function UserStack() {
  return (
    <Stack.Navigator
      initialRouteName="User"
      screenOptions={{headerShown: true, headerTintColor: '#7a20b3',}}>
      <Stack.Screen
        name="User"
        component={UserScreen}
        options={{ title: 'User' }}/>

    </Stack.Navigator>
  );
}

function BrowseStack() {
  return (
    <Stack.Navigator
      initialRouteName="Browse"
      screenOptions={{headerShown: true, headerTintColor: '#7a20b3',}}>
      <Stack.Screen
        name="Browse"
        component={BrowseScreen}
        options={{ title: 'Browse' }}/>

    </Stack.Navigator>
  );
}


function NavScreen() {


  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Feed"
        tabBarOptions={{
          activeTintColor: '#7a20b3',
        }}>
        
<Tab.Screen
          name="BrowseStack"
          component={BrowseStack}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="compass-outline"
                color={color}
                size={size}
              />
            ),
          }} />


<Tab.Screen
          name="MyRideStack"
          component={MyRideStack}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="calendar-clock"
                color={color}
                size={size}
              />
            ),
          }}  />





         
<Tab.Screen
          name="UserStack"
          component={UserStack}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="account-box"
                color={color}
                size={size}
              />
            ),
          }} />

          
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default NavScreen;