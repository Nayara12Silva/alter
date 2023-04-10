import React ,{useState}from 'react';
// import { useLinkProps, useNavigation } from '@react-navigation/native';
import { View,StyleSheet,TextInput} from 'react-native';
import {MaterialIcons}from '@expo/vector-icons'

export function Pesquisa(props){
    return(
         <View style={styles.inputIcones}>
                <MaterialIcons name={props.name} size={24} color="#4e0a0d" style={styles.icone} />
                <TextInput style={styles.inpu} />
         </View>
    )
};
const styles = StyleSheet.create({   
      inputIcones: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#4E0A0D',
        borderRadius: 4,
        padding: 10,
        marginBottom: 10
      },
      icone: {
        marginRight: 10,
        
      },
      inpu: {
        flex: 1,
        width: '50%',
      },
    });