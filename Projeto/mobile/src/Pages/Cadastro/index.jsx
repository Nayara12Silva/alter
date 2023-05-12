import React ,{useState}from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image,StyleSheet, TouchableOpacity,TextInput} from 'react-native';
import {MaterialIcons}from '@expo/vector-icons'
import axios from 'axios';


const handleCadastro = async (dados) => {
  try {
    const response = await axios.post('http://localhost:8081/add', dados);
    console.log(response.data); // Imprime a resposta da API no console
  } catch (error) {
    console.error(error);
  }
};
 function Cadastro(){
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [password, setPassword] = useState('');
  const navegation = useNavigation();

  const handleEnviarDados = () => {
    const dados = {
      nome: nome,
      email: email,
      tel: tel,
      password: password
    };

    handleCadastro(dados);
  };


    return(
        <View style={styles.container}>
               <View style={styles.img}>
                    <Image source={require('../../../assets/logo/Logo.png')}/>
                </View>
                <View style={styles.campos}>
                    <View style={styles.inputIcones}>
                          <MaterialIcons name="person" size={24} color="#4e0a0d" style={styles.icone} />
                          <TextInput placeholder="Nome Completo"
                          value={nome} onChangeText={setNome}style={styles.inpu} />
                    </View>
                    <View style={styles.inputIcones}>
                          <MaterialIcons name="register" size={24} color="#4e0a0d" style={styles.icone} />
                          <TextInput placeholder="Nome Completo"
                          value={cpf} onChangeText={setCpf}style={styles.inpu} />
                    </View>
                    <View style={styles.inputIcones}>
                          <MaterialIcons name="email" size={24} color="#4e0a0d" style={styles.icone} />
                          <TextInput placeholder="Digite seu Email"
                          value={email} onChangeText={setEmail}style={styles.inpu} />
                    </View>
                    <View style={styles.inputIcones}>
                          <MaterialIcons name="call" size={24} color="#4e0a0d" style={styles.icone} />
                          <TextInput placeholder="Digite seu Telefone"
                          value={tel} onChangeText={setTel}style={styles.inpu} />
                    </View>
                    <View style={styles.inputIcones}>
                          <MaterialIcons name="lock" size={24} color="#4e0a0d" style={styles.icone} />
                          <TextInput placeholder="Digite sua Senha"
                          value={password} onChangeText={setPassword} secureTextEntry style={styles.inpu} />
                    </View>

                    <Text style={styles.link} onPress={()=>navegation.navigate('login')}>Login</Text>
                    <TouchableOpacity style={styles.btnAcessar} onPress={handleEnviarDados}>
                        <Text style={styles.texto}>Cadastrar</Text>
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
        // justifyContent: 'center',
      },
      btnAcessar:{
        backgroundColor: "#ff8702",
        width: '50%',
        height: 40,
        alignItems:'center',
        borderRadius:20,
        alignSelf:'center',
        justifyContent:'center',
       
    },
    Acessar:{
        fontSize:20,
        fontWeight:"bold",
    },

    texto:{
      fontWeight:"bold",
      color:"#fff"
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
    export default Cadastro;