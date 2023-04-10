import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { HeaderNave } from '../../Components/Header/index.cjs';
import { Pesquisa } from '../../Components/Input/index.cjs';


export default function Teste() {
  return (
    <View style={styles.container}>
        <HeaderNave/>
        <Pesquisa name='search'/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  flexDirection: 'row'
  }

});
