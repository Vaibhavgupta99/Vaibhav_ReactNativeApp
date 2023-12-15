import { View, Text, StyleSheet, Button, TextInput, TouchableOpacity, Pressable, Alert } from 'react-native'
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

   const StoreData = async (value) => {
    try {
      await AsyncStorage.setItem('data',JSON.stringify(value));
      alert('Data Stored Successfully')
    } catch (e) {
      // Error saving data
      console.log(e)
    }
    // console.log(value)
    // alert(JSON.stringify(value))
  };


   const GetData = async () => {
    try {
      const value = await AsyncStorage.getItem('data');
      /* console.log(value) */
      
      if (value != null) {
        // We have data!!
        // console.log(value);
        const obj = JSON.parse(value)
        alert(obj.name + ',' + obj.phone)
        AsyncStorage.clear()
      }
      else{
        console.log('No data is stored')
      }
    } catch (e) {
      // Error retrieving data
    }
  };


export default function Practice({navigation}) {

    const [value, setValue] = useState({})
    /* console.log(value.name) */

    

  return (
    <View style={styles.container}>
        <Text>{value.name}</Text>
        <Text>{value.phone}</Text>
        <TextInput onChangeText={(e)=> {setValue({...value, name:e})}} placeholder='Name' style={styles.input}></TextInput>
        <TextInput onChangeText={(e)=> {setValue({...value, phone:e})}} placeholder='Phone' style={[styles.input,{marginBottom:30,}]}></TextInput>

        <Pressable style={styles.btn}><Button title='Store Value' onPress={()=> {StoreData(value)}} /></Pressable>

        <Pressable style={styles.btn}><Button title='Get Value' onPress={()=> {GetData()}} /></Pressable>

        <TouchableOpacity style={{width:'50%', margin:10,}} > 
        <Button title='Home'
            onPress={()=> navigation.navigate('Home')}
        />
        </TouchableOpacity>
    </View>
    
  )
}

const styles = StyleSheet.create({
container: {
    flex:1,
    alignItems:'center',
    justifyContent:'center',

},
input: {
    borderBottomWidth:2,
    paddingHorizontal:10,
    paddingVertical:5,
    width: '80%',
    marginBottom:10,
    fontSize:18,
}, 
btn: {
    margin: 10,
}
})