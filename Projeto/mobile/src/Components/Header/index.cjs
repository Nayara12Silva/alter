import React from 'react';
import {MaterialIcons}from '@expo/vector-icons'
import { StyleSheet, TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export function TopHeader(){
  const navegation = useNavigation();

   return(
      
            <View  style={styles.container}>
                  <MaterialIcons name='reply' size={30} style={styles.icone}onPress={()=>navegation.navigate('welcome')}/>
                  <TextInput style={styles.CampoTexto} placeholder="O que você procura"/>
                  <MaterialIcons name='search' size={30} style={styles.Lupa} />
                  <MaterialIcons name='shopping-cart' size={30} style={styles.icone}/>
            </View>
      
    )
}
const styles = StyleSheet.create({
  container:{
    width:'100%',
    flexDirection: 'row',
    marginBottom: 10,
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