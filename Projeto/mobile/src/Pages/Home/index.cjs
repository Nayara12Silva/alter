import React from 'react';
import { View, Text, Image,StyleSheet, TouchableOpacity,ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function Home (){
    const navegation = useNavigation();
    return(
        <ImageBackground source={require('../../../assets/imgs/foto.jpg')} style={styles.background}>
            <TouchableOpacity style={styles.btnAcessar}>
                <Text style={styles.Acessar}onPress={()=>navegation.navigate('login')} >Acessar</Text>
            </TouchableOpacity>
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    btnAcessar:{
        backgroundColor: "#10cfc6",
        width: '50%',
        height: 30,
        alignItems:'center',
        borderRadius:20,
        alignSelf:'center',
    },
    Acessar:{
        fontSize:20,
        fontWeight:"bold",

    },
    background: {
    flex: 1,
    resizeMode: 'cover', // Para que a imagem de fundo cubra todo o contêiner
    opacity: 0.8,
    justifyContent:'flex-end',
    paddingBottom:20
  },
  
})