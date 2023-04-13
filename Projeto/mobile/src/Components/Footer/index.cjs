import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {MaterialIcons}from '@expo/vector-icons'

export default function Rodape() {
  const navegation = useNavigation();

 return (
    <View  style={styles.container}>
           
            <TouchableOpacity  style={styles.teste} onPress={()=>navegation.navigate('home')}>
              <MaterialIcons name='home' size={30} style={styles.icone} />
              <Text style={styles.desc}>Home</Text>
            </TouchableOpacity>
            <View  style={styles.teste}>
              <MaterialIcons name='grid-view' size={30} style={styles.icone} />
              <Text style={styles.desc}>Categorias</Text>
            </View>
            <View  style={styles.teste}>
              <MaterialIcons name='receipt-long' size={30} style={styles.icone} />
              <Text style={styles.desc}>Pedidos</Text>
            </View>
            <TouchableOpacity  style={styles.teste}  onPress={()=>navegation.navigate('login')}>
              <MaterialIcons name='account-circle' size={30} style={styles.icone} />
              <Text style={styles.desc}>Conta</Text>
            </TouchableOpacity>
            
    </View>
    //  <MaterialIcons name='home' size={30} style={styles.icone}onPress={()=>navegation.navigate('home')}/>
    //  <MaterialIcons name='grid-view' size={30} style={styles.Lupa} />
    //  <MaterialIcons name='receipt-long' size={30} style={styles.icone}/>
    //  <MaterialIcons name='account-circle' size={30} style={styles.icone} />
  );
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
      Lupa:{
        color:'#ff8702',
        marginLeft: 10
      },
    teste:{
        flexDirection: 'column',
        justifyContent:'space-around',
        padding:2
    },
    desc:{
        color:"#ff8702",
    }
      });