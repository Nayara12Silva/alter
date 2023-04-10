import React from 'react';
import {  StyleSheet, Text, View } from 'react-native';
import {MaterialIcons}from '@expo/vector-icons'
// import {} from '../'



export function HeaderNave() {
 
 return (
    <View style={styles.container}>
      <MaterialIcons  name="menu" size={24} color="#4e0a0d" style={styles.icone}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
   backgroundColor:'black',
   padding: '4%'
  }

});