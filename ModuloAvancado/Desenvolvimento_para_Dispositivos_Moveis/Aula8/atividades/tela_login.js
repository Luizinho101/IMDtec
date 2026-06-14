import React, { useState } from 'react'; 
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';

export default function App() {
  
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <View style={styles.container}>

      <View style={styles.topo}>
        <Text style={styles.titulo}>Login</Text>
      </View>

      <View style={styles.componetes}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail} 
          style={styles.input}
          keyboardType="email-address" 
          autoCapitalize="none"
        />
        
        <TextInput
          placeholder="Senha"
          value={senha}
          onChangeText={setSenha}
          style={styles.input}
          secureTextEntry={true} 
        />

    
        <TouchableOpacity style={styles.botaoCustomizado}>
          <Text style={styles.textoBotao}>Login</Text>
        </TouchableOpacity>

        <View style={styles.textoInferior}>
          <Text style={styles.cortexto}>Don't Have Account? </Text>
          <Text style={[styles.cortexto, styles.sublinhado]}>Click Here To Signup</Text>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titulo: {
    color: '#f0f8ff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  topo: {
    width: '100%',
    height: 80,
    backgroundColor: '#0000ff',
    justifyContent: 'center', 
    paddingTop: 20, 
  },
  input: {
    height: 45,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5, 
  },
  textoInferior: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  cortexto: {
    color: '#0000ff',
  },
  sublinhado: {
    fontWeight: 'bold',
    textDecorationLine: 'underline', 
  },
  
  botaoCustomizado: {
    backgroundColor: '#0000ff',
    height: 45,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  textoBotao: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  componetes: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
    gap: 15, 
  }
});