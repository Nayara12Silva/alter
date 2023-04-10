import React from 'react';
import { View,StyleSheet,Image,Text, TouchableOpacity, ScrollView} from 'react-native';
import {MaterialIcons}from '@expo/vector-icons'
import { Card } from '../../Components/Card/index.cjs';


export function Home(){
      return(
        <View style={styles.container}>
                <View style={styles.header}>

                    <Image source={require('../../../assets/imgs/banner.jpg')} style={styles.image}/>

                     <View style={styles.textContent}>

                        <Text style={styles.texto}>Produtos | Dogs</Text>

                        <TouchableOpacity style={{position:'absolute',right:3, alignSelf:'center'}}>
                          <MaterialIcons name='filter-list' size={25} color="#4e0a0d" style={styles.icone} />
                        </TouchableOpacity>
                     </View>

                     <View style={styles.line}/>
                      <View  style={styles.ContentScrollView}>
                        <ScrollView  style={styles.scrollView}>
                            <Text style={styles.texto}>Destaques</Text>
                                  <View style={styles.card}>
                                      <Card img={require('../../../assets/produtos/pro3.png')}valor={'R$65,99'}>Cama Retangular</Card>
                                      <Card img={require('../../../assets/produtos/pro1.jpg')}valor={'R$19,99'}>Shampoo PetLife</Card>
                                  </View>
                          </ScrollView>
                      </View>

                      

                </View>
        </View>
      )
  };
  const styles = StyleSheet.create({
    container: {
      flex:1,
      width:'100%',
      backgroundColor:'#fff9ef'
  },
  header: {
    backgroundColor:'#fff9ef',
    width:'100%',
    height:'30%',
    margin:0,
  },
  image: {
    width:'100%',
    height:'90%',
    margin:0,
  },
  texto:{
    color:'#4e0a0d',
    fontSize: 20,
    fontWeight:'bold'
  },
  line:{
    borderBottomColor:"#d8d8d8",
    borderBottomWidth: 4,
    marginTop: 15
  },
  textContent:{
    marginBottom: 10,
    marginTop: 10
  },
  card:{
    flexDirection: 'row',
    justifyContent:'space-around'
  }
})