import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image, Alert } from 'react-native';

export default function App() {
  
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setImc] = useState(null);
  const [status, setStatus] = useState('');
  const [imagemUrl, setImagemUrl] = useState('');


  const calcularIMC = () => {
  
    const vPeso = parseFloat(peso.replace(',', '.'));
    const vAltura = parseFloat(altura.replace(',', '.'));

    
    if (isNaN(vPeso) || isNaN(vAltura) || vAltura <= 0 || vPeso <= 0) {
      Alert.alert('Erro', 'Por favor, insira valores válidos para peso e altura.');
      return;
    }

   
    const resultado = vPeso / (vAltura * vAltura);
    setImc(resultado.toFixed(2));

   
    let textoStatus = '';
    let urlImg = '';

    if (resultado < 18.5) {
      textoStatus = 'Abaixo do Peso';
      urlImg = 'https://cdn-icons-png.flaticon.com/512/3211/3211197.png';
    } else if (resultado >= 18.5 && resultado < 25) {
      textoStatus = 'Peso Normal';
      urlImg = 'https://cdn-icons-png.flaticon.com/512/3211/3211333.png';
    } else if (resultado >= 25 && resultado < 30) {
      textoStatus = 'Sobrepeso';
      urlImg = 'https://cdn-icons-png.flaticon.com/512/3211/3211270.png';
    } else if (resultado >= 30 && resultado < 35) {
      textoStatus = 'Obesidade Grau I';
      urlImg = 'https://cdn-icons-png.flaticon.com/512/4003/4003734.png';
    } else if (resultado >= 35 && resultado < 40) {
      textoStatus = 'Obesidade Grau II';
      urlImg = 'https://cdn-icons-png.flaticon.com/512/4003/4003756.png';
    } else {
      textoStatus = 'Obesidade Mórbida';
      urlImg = 'https://cdn-icons-png.flaticon.com/512/4003/4003789.png';
    }

    setStatus(textoStatus);
    setImagemUrl(urlImg);

  
    Alert.alert('Resultado do IMC', `Seu IMC é ${resultado.toFixed(2)} (${textoStatus})`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>IMCalc 🧮</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite seu peso (ex: 75.5)"
        keyboardType="numeric"
        value={peso}
        onChangeText={(text) => setPeso(text)}
      />

     
      <TextInput
        style={styles.input}
        placeholder="Digite sua altura (ex: 1.75)"
        keyboardType="numeric"
        value={altura}
        onChangeText={(text) => setAltura(text)}
      />

      <View style={styles.buttonContainer}>
        <Button title="Calcular IMC" color="#007BFF" onPress={calcularIMC} />
      </View>

 
      {imc && (
        <View style={styles.resultadoContainer}>
          <Text style={styles.txtResultado}>Seu IMC: {imc}</Text>
          <Text style={styles.txtStatus}>Status: {status}</Text>
          
        
          {imagemUrl !== '' && (
            <Image source={{ uri: imagemUrl }} style={styles.imagem} />
          )}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    padding: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  buttonContainer: {
    width: '100%',
    marginTop: 10,
  },
  resultadoContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  txtResultado: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2b2b2b',
  },
  txtStatus: {
    fontSize: 18,
    color: '#555',
    marginVertical: 5,
  },
  imagem: {
    width: 100,
    height: 100,
    marginTop: 15,
    resizeMode: 'contain',
  },
});