import { View, Text, StyleSheet, Image, ScrollView, Button } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/pages/HomeScreen';
import DetailsScreen from './src/pages/DetailsScreen';

/* function HomeScreen({navigation}) {
  return(
    <View style={{flex:1,alignItems:'center',justifyContent:'center',}}>
      <Text>Home Screen</Text>
      <Button 
        title='Go to details' 
        onPress={() => navigation.navigate('Details')} 
      />
    </View>
  );
}

function DetailsScreen() {
  return(
    <View style={{flex:1, alignItems:'center', justifyContent:'center',}}>
      <Text>Details Screen</Text>
    </View>
  );
} */

const Stack = createNativeStackNavigator();

export default function App() { 
  return (
    <>

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen options={{title:'My Details'}} name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    
    </>
  )
}