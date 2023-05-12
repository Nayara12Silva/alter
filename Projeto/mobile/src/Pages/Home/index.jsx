import React from 'react';
import { View,StyleSheet,Image,Text, TouchableOpacity, ScrollView} from 'react-native';
import {MaterialIcons}from '@expo/vector-icons'
import { Card } from '../../Components/Card/index.jsx';
import { TopHeader } from '../../Components/Header/index.jsx';
import { useNavigation } from '@react-navigation/native';
import Rodape from '../../Components/Footer/index.jsx';


export default function Home(){
  const navegation = useNavigation();

      return(
        <View style={styles.container}>
              <TopHeader/>
                <View style={styles.header}>
                    <Image source={require('../../../assets/imgs/banner.jpg')} style={styles.image}/>
                    <View>
                        <Text style={styles.texto}>Produtos</Text>
                        <TouchableOpacity style={{position:'absolute',right:3, alignSelf:'center'}}>
                          <MaterialIcons name='filter-list' size={25} color="#4e0a0d" style={styles.icone} onPress={()=>navegation.navigate('top')}/>
                        </TouchableOpacity>
                    </View>
                </View>
                      <ScrollView  style={styles.scrollView}>
                                  <View style={styles.card}>
                                    <TouchableOpacity>
                                      <Card img={require('../../../assets/produtos/pro3.png')}valor={'R$65,99'}>Cama Retangular</Card>
                                    </TouchableOpacity>
                                      <Card img={require('../../../assets/produtos/pro3.png')}valor={'R$65,99'}>Cama Retangular</Card>
                                  </View>

                                  <View style={styles.card}>
                                      <Card img={require('../../../assets/produtos/pro3.png')}valor={'R$65,99'}>Cama Retangular</Card>
                                      <Card img={require('../../../assets/produtos/pro3.png')}valor={'R$65,99'}>Cama Retangular</Card>
                                  </View>

                                   <View style={styles.card}>
                                      <Card img={require('../../../assets/produtos/pro3.png')}valor={'R$65,99'}>Cama Retangular</Card>
                                      <Card img={require('../../../assets/produtos/pro3.png')}valor={'R$65,99'}>Cama Retangular</Card>
                                  </View>
                       </ScrollView>
                      <Rodape style={styles.Rodape}/>
              
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
    marginBottom: 8
    
  },
  image: {
    width:'100%',
    height:'90%',
    margin:0,
  },
  texto:{
    color:'#4e0a0d',
    fontSize: 20,
    fontWeight:'bold',
    marginBottom: 4
  },
  line:{
    borderBottomColor:"#d8d8d8",
    borderBottomWidth: 4,
    marginTop: 15
  },
  textContent:{
    // marginBottom: 10,
    marginTop: 10
  },
  card:{
    flexDirection: 'row',
    marginVertical: '5%',
    marginHorizontal: '5%',
    justifyContent:'space-around'
  },
  Rodape:{
    position:'absolute',
    bottom:0,
    alignSelf:'center',
    marginTop: 10,
  }
})