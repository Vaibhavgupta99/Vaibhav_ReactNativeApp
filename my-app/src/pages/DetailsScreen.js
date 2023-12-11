import { View, Text, Button, Pressable, Linking, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'


var jk = 300;
export default function DetailsScreen({navigation, route}) {

  /* const [obj setObj] = useState(route.params); */
  const [obj] = useState(route.params);
  /* var a = obj.id; */
  var Hulk = 500;
  

  const[count, setCount] = useState({a:50, b:67})

  return(
    <>
     <View style={{flex:1, alignItems:'center', justifyContent:'center',}}>
      <Text>Details Screen {obj.id},{obj.arr[obj.id]}</Text>
      <Button color={'goldenrod'}
        title='Go to Home' 
        onPress={() => navigation.navigate('Home')} 
      />

      {/* useState set parameter in object */}
      {/* <Pressable onPress={(e)=> {setCount({...e, b:23 , a:37})}}> */}
      <Pressable onPress={()=> {setCount({ b:23 , a:37}),jk=2000, Hulk=5500}}>
        <Image style={{height:200,width:200,margin:20}} source={require('../../assets/images/bg2.jpg')} />
      </Pressable>
      <Text>a: {count.a}</Text>
      <Text>b: {count.b}</Text>
      <Text>jk: {jk}</Text>
      <Text>Hulk: {Hulk}</Text>
      

      <TouchableOpacity onPress={()=> Linking.openURL('https://moviertx.com')}>
      <Image style={{height:200,width:200,margin:20, borderColor:'orange',borderWidth:5}} source={require('../../assets/images/bg3.jpg')} />
      </TouchableOpacity>
      
     </View>
    </>
  );
}