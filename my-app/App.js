import { View, Text, StyleSheet, Image, ScrollView, Button } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/pages/HomeScreen';
import DetailsScreen from './src/pages/DetailsScreen';
import Practice from './src/pages/Practice';


const Stack = createNativeStackNavigator();

export default function App() { 
  return (
    <>

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen options={{headerShown:false}} name="Home" component={HomeScreen} />
        <Stack.Screen options={({route})=> ({title:route.params.name})} name="Details"  component={DetailsScreen} />
        <Stack.Screen  name="Practice" component={Practice} />
      </Stack.Navigator>
    </NavigationContainer>
    
    </>
  )
}