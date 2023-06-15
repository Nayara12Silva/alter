import React, { useState } from 'react';
import { View, Button, StyleSheet,TextInput } from 'react-native';

export function LoginScreen(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = () => {
    // Lógica para autenticar o usuário com o email e senha fornecidos
    console.log('Email:', email);
    console.log('Senha:', password);
    // Restante da lógica de login
  };
      return (
        
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <Button title="Login" onPress={handleLogin} />
        </View>
      );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  input: {
    width: '100%',
    
   
height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    
   
paddingHorizontal: 10,
  },
});
