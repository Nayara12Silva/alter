import React from 'react';
import {MaterialIcons}from '@expo/vector-icons'
import { View,StyleSheet,Text} from 'react-native';

export default function IconDesc() {
 return (
    <View style={styles.container}>
        <MaterialIcons name='home'size={30} style={styles.icone}/>
        <Text>Home</Text>
    </View>
  );
}
const styles = StyleSheet.create({
    container:{
      width:'100%',
      flexDirection: 'row',
      justifyContent:'center',
      padding:2
    },
       icone:{
        color:"#ff8702" 
      },
      input:{
        fontWeight:"bold",
        color:"#fff"
      },
      Lupa:{
        color:'#ff8702',
        marginLeft: 10
      },
       CampoTexto: {
        flex: 1,
        width: '50%',
        marginLeft: 30,
        borderBottomColor:'#ff8702',
        borderBottomWidth: 1
  
      },
      });