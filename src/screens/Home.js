

import {View,Text,TouchableOpacity, Button} from 'react-native'

import {useNavigation} from '@react-navigation/native'


export default function Home() {
 const navigation = useNavigation()
 function check(){
navigation.navigate('Checkout')
 }
  return (
   <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
    <View style={{width:300,}}>
         <Button title='Ir Para Checkout' color={'blue'} onPress={check}/>
    </View>
  
   </View>
   
  );
}