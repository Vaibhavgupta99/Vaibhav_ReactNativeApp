import { View, Text, Button, Pressable, Linking, Image, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'

export default function DetailsScreen({navigation}) {
  return(
    <>
     <View style={{flex:1, alignItems:'center', justifyContent:'center',}}>
      <Text>Details Screen</Text>
      <Button color={'goldenrod'}
        title='Go to Home' 
        onPress={() => navigation.navigate('Home')} 
      />

      <Pressable onPress={()=> Linking.openURL('https://google.com')}>
        <Image style={{height:200,width:200,margin:20}} source={require('../../assets/images/bg2.jpg')} />
      </Pressable>

      <TouchableOpacity onPress={()=> Linking.openURL('https://moviertx.com')}>
      <Image style={{height:200,width:200,margin:20, borderColor:'orange',borderWidth:5}} source={require('../../assets/images/bg3.jpg')} />
      </TouchableOpacity>
      
     </View>
    </>
  );
}