import { View, Text, StyleSheet, Button, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
/* import {AsyncStorage} from 'react-native'; */


export default function Practice({navigation}) {

    const [value, setValue] = useState({})
    console.log(value.name)

  return (
    <View style={styles.container}>
        <Text>{value.name}</Text>
        <Text>{value.phone}</Text>
        <TextInput onChangeText={(e)=> {setValue({...value, name:e})}} placeholder='Name' style={styles.input}></TextInput>
        <TextInput onChangeText={(e)=> {setValue({...value, phone:e})}} placeholder='Phone' style={[styles.input,{marginBottom:30,}]}></TextInput>
        <TouchableOpacity style={{width:'50%'}} > 
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
}
})