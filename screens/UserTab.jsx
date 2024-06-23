import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Entypo from '@expo/vector-icons/Entypo';
import Resources from './Resources';
import Plan from './Plan';
import Profile from './Profile';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome from '@expo/vector-icons/FontAwesome';


const Tab = createBottomTabNavigator();

const UserTab = () => {
  return (
    <Tab.Navigator
   options={{
    activeTintColor: '#1E5DFF',
    inactiveTintColor: 'gray',

   }}
   >
    <Tab.Screen name='home' component={Home}
     options={{
        tabBarIcon: () => (
            <Entypo name="home" size={30} color="#1E5DFF" />
        ),
        headerShown: false,
      }}
    />
      <Tab.Screen name='Resource' component={Resources}
     options={{
        tabBarIcon: () => (
            <FontAwesome5 name="book-open" size={30} color="#1E5DFF" />
        ),
        headerShown: false,
      }}
    
    />
      <Tab.Screen name='Plan' component={Plan}
     options={{
        tabBarIcon: () => (
            <FontAwesome name="heartbeat" size={30} color="#1E5DFF" />
        ),
        headerShown: false,
      }}
    
    />
      <Tab.Screen name='Profile' component={Profile}
     options={{
        tabBarIcon: () => (
            <FontAwesome name="user-circle-o" size={30} color="#1E5DFF" />
        ),
        headerShown: false,
      }}
    
    />
      </Tab.Navigator>
  )
}

export default UserTab

const styles = StyleSheet.create({})