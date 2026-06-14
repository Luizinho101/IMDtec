import React from 'react';
import { SafeAreaView, Text, StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.azul, styles.caixa]}></View>
      <View style={[styles.vermelho, styles.caixa]}></View>
      <View style={[styles.amarelo ,styles.caixa]}></View>
      <View style={[styles.laranja, styles.caixa]}></View>
      <View style={[styles.marrom, styles.caixa]}></View>
      <View style={[styles.preto, styles.caixa]}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    backgroundColor: '#0F0',
    flex: 1
  },
  vermelho : {
    backgroundColor: '#F00'
  },
  azul : {
    backgroundColor: 'powderblue'
  },
  laranja : {
    backgroundColor: '#FFA500'
  },
  amarelo: {
    backgroundColor: '#FFFF00'
  },
  caixa : {
    width : '100%',
    height: '25%'
  }

})