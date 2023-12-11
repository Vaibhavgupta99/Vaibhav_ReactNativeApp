import { useState } from 'react'
import { View, Text, Button, Pressable, StyleSheet, Touchable, TouchableOpacity } from 'react-native'


/* var jk = 100; */
export default function HomeScreen({navigation}) {

  const [name, setName] = useState(1)


  return (
    <>
      <View style={{flex:1, alignItems:'center', justifyContent:'center',}}>
      <Text>Hulk  {name}</Text>
        <Button title='Add' 
          onPress={()=> {if (name<9) {
            {setName(name+1)}
          } else {
            {setName(name)}
          }}}
        />
        <Button title="Substract" 
          onPress={()=> {if (name>0) {
            {setName(name-1)}
          } else {
            {setName(name)}
          }}}
        />
      
      <Pressable style={{margin:100,}} onPress={(e)=> {jk= 500}}>
        <Text>Home Screen </Text>
        </Pressable>
      <Button
        title='Go to Details'
        onPress={() => navigation.navigate('Details',{id:name, arr:[34,456,29,50,24,687,23,879,12,67],name:'custom header'})} 
      />
      <TouchableOpacity style={styles.touch}>
      <Button 
        title='Practice' color={'red'}
        onPress={()=>navigation.navigate('Practice')}
      />
      </TouchableOpacity>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  touch: {
    marginTop:10,
    padding:5,
    backgroundColor:'yellow',
  }
})