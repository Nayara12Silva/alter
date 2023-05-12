import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {MaterialIcons}from '@expo/vector-icons'

export default function Rodape() {
  const navegation = useNavigation();

 return (
    <View  style={styles.container}>
           
            <TouchableOpacity  style={styles.CardDesc} onPress={()=>navegation.navigate('home')}>
              <MaterialIcons name='home' size={30} style={styles.icone} />
              <Text style={styles.desc}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <View  style={styles.CardDesc}>
              <MaterialIcons name='grid-view' size={30} style={styles.icone} />
              <Text style={styles.desc}>Categorias</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity>
            <View  style={styles.CardDesc}>
              <MaterialIcons name='receipt-long' size={30} style={styles.icone} />
              <Text style={styles.desc}>Pedidos</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity  style={styles.CardDesc}  onPress={()=>navegation.navigate('login')}>
              <MaterialIcons name='account-circle' size={30} style={styles.icone} />
              <Text style={styles.desc}>Conta</Text>
            </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
    container:{
      width:'100%',
      flexDirection: 'row',
      justifyContent:'space-around',
      marginBottom: 10,
      marginTop:5,
      padding:2
    },
       icone:{
        color:"#ff8702" 
      },
    CardDesc:{
        flexDirection: 'column',
        justifyContent:'center',
        alignItems:'center',
       
    },
    desc:{
        color:"#ff8702",
    }
      });