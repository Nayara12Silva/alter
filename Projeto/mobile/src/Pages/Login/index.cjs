import React ,{useState}from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text,StyleSheet, TouchableOpacity,TextInput,Image} from 'react-native';
import {MaterialIcons}from '@expo/vector-icons'

export function Login(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navegation = useNavigation();


  const handleLogin = () => {
    // implemente aqui a lógica de autenticação
  };
    return(
         <View style={styles.container}>
              <View style={styles.img}>
                      <Image source={require('../../../assets/logo/Logo.png')} 
                      />
                  </View>
                  <View style={styles.campos}>
                        <View style={styles.inputIcones}>
                            <MaterialIcons name="email" size={24} color="#4e0a0d" style={styles.icone} />
                            <TextInput 
                            placeholder="Digite seu Email"
                            value={email}
                            onChangeText={setEmail}
                            style={styles.inpu} />
                        </View>
                        <View style={styles.inputIcones}>
                            <MaterialIcons name="lock" size={24} color="#4e0a0d" style={styles.icone} />
                            <TextInput 
                            placeholder="Digite sua Senha"
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry
                            style={styles.inpu} />
                        </View>
                        <Text style={styles.link} onPress={()=>navegation.navigate('cadastro')}>Criar Conta</Text>
                        <TouchableOpacity style={styles.btnAcessar}>
                            <Text style={styles.texto}>Entrar</Text>
                        </TouchableOpacity>
              </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff9ef',
        alignItems: 'center',
  
      },
      btnAcessar:{
        backgroundColor: "#ff8702",
        width: '50%',
        height: 40,
        alignItems:'center',
        borderRadius:20,
        alignSelf:'center',
        justifyContent:'center',
        marginBottom: 10
       
    },
    texto:{
      fontWeight:"bold",
      color:"#fff"
    },
    Acessar:{
        fontSize:20,
        fontWeight:"bold",
    },
    img:{
       backgroundColor: '#fff9ef',
    },
    campos:{
       alignItems: 'center',
       justifyContent: 'center',
       width: '90%',
       height:'50%'
    },
    link: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom:25,
        color:"#4E0A0D"
      },
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
        width: '90%',
      },
    });