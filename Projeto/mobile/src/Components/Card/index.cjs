import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export function Card(props) {
  function LimeteTexto(desc){
    if(desc.length<25){
        return desc;
    }
    return`${desc.substring(0,20)}...`

  }
 return (
    <TouchableOpacity style={styles.container}>
        <Image source={props.img} style={styles.image}/>
        <Text style={styles.texto}>{(LimeteTexto(props.children))}</Text>
        <Text style={styles.valor}>{props.valor}</Text>

    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical:'1%',
    alignItems:'center',
    justifyContent:'center',
  },
  texto:{
    color:'#4e0a0d',
    fontSize: 14,
    fontWeight:'bold',
    marginTop:0
  },
  valor:{
    color:'#d8d8d8',
    fontWeight:'bold'

  
  },
  image: {
   width:150,
   height:150,
   marginBottom:0
    // margin:0,
  },

})