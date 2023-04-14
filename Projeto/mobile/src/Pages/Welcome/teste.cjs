import React from 'react';
import { StyleSheet, View } from 'react-native';
import Rodape from '../../Components/Footer/index.cjs';

export default function TesteCards() {
 return (
   <View style={styles.container}>
        <Rodape/>
   </View>
  );
};
const styles = StyleSheet.create({
    container:{
        backgroundColor:'#fff9ef',
        height: '10%'
    }
})