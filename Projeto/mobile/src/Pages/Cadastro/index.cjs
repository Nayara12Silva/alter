import React ,{useState}from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image,StyleSheet, TouchableOpacity,ImageBackground, TextInput} from 'react-native';


export function Cadastro(){
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [password, setPassword] = useState('');
  const navegation = useNavigation();


  const handleLogin = () => {
    // implemente aqui a lógica de autenticação
  };
    return(
        <View style={styles.container}>
                <View  style={styles.top}>
                    <Text style={styles.title}>Pet Shop Nitro</Text>
                    <Text style={styles.title1}>Faça seu cadastro</Text>

                </View>
                {/* <View style={styles.img}>
                    <Image source={require('../../../assets/imgs/teste1.png')} 
                     style={styles.Image} 
                     resizeMode='contain'/>
                </View> */}
                <View style={styles.campos}>
                <TextInput
                style={styles.input}
                placeholder="Nome"
                value={nome}
                onChangeText={setNome}
                secureTextEntry
                />
                <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                secureTextEntry
                />
                <TextInput
                style={styles.input}
                placeholder="telefone"
                value={tel}
                onChangeText={setTel}
                secureTextEntry
                />
                <TextInput
                style={styles.input}
                placeholder="Senha"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                />
                <Text style={styles.link} onPress={()=>navegation.navigate('login')}>Entrar</Text>
                <TouchableOpacity style={styles.btnAcessar}>
                    <Text>Cadastrar</Text>
                </TouchableOpacity>
                </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        alignItems: 'center',
        // justifyContent: 'center',
      },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 32,
    },  
    title1: {
      fontSize:15,
      marginBottom:12,
    },
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
    top:{
       width: '100%',
       alignItems: 'center',

    },
    img:{
       width: '100%',
       backgroundColor:'black',
       height:'50%'
    },
    campos:{
       alignItems: 'center',
       justifyContent: 'center',
       width: '100%',
       height:'50%'
    },
    input: {
        width: '90%',
        height: 48,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ccc',
        paddingHorizontal: 16,
        marginBottom: 16,
        fontSize: 16,
    },
    link: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom:25,
        color:'blue'
      },
    });