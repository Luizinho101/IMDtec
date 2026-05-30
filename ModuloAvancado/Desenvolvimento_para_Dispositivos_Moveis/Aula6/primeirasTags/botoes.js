import { StyleSheet, Text, View, Button  } from 'react-native';
import React, { useState } from 'react';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  return (
    <View style = {styles.container}>
      <Welcome/>
      <Botoes/>
    </View>

  );
}



function Botoes(){
  const [texto, setTexto] = useState('Texto inicial');

  const trocarTexto = () => {
    setTexto((prev) =>
      prev === 'Texto inicial' ? 'Texto alterado!' : 'Texto inicial'
    );
  };
  return (
      <View style={styles.container}>
        <Text style={styles.texto}>{texto}</Text>
        <Button title="Trocar Texto" onPress={trocarTexto} />
      </View>
    );
}

function Welcome(){
  return(
      <View >
      <Text style={styles.paragraph}>
      Bem vindo!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});