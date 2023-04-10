import React from 'react';
import { StyleSheet,ImageBackground,TouchableOpacity,Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';


export function Welcome (){
    const navegation = useNavigation();
    return(
        <ImageBackground source={require('../../../assets/logo/welcome.png')} style={styles.background}>
            <TouchableOpacity style={styles.btnAcessar}>
                <Text style={styles.Acessar} onPress={()=>navegation.navigate('login')} >Acessar</Text>
            </TouchableOpacity>
        </ImageBackground>
           
    )
}
const styles = StyleSheet.create({
    background: {
    flex: 1,
    resizeMode: 'cover', // Para que a imagem de fundo cubra todo o contêiner
    opacity: 0.8,
    justifyContent:'flex-end',
    paddingBottom:20
  },
  btnAcessar:{
    backgroundColor: "#4E0A0D",
    width: '50%',
    height: 40,
    alignItems:'center',
    borderRadius:20,
    alignSelf:'center',
    justifyContent:"center"
},
Acessar:{
    fontSize:15,
    fontWeight:"bold",
    color:"#fff"

}
  
})