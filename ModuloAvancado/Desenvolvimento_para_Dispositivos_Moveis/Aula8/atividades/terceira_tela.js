import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.vermelho, styles.caixa]}></View>
      <View style={[styles.vermelho, styles.caixa]}></View>
      <View style={[styles.vermelho ,styles.caixa]}></View>
      <View style={[styles.verde, styles.caixa]}></View>

      <View style={[styles.vermelho, styles.caixa]}></View>
      <View style={[styles.vermelho, styles.caixa]}></View>
      <View style={[styles.azul, styles.caixa]}></View>
      <View style={[styles.laranja, styles.caixa]}></View>

      <View style={[styles.vermelho ,styles.caixa]}></View>
      <View style={[styles.verde, styles.caixa]}></View>
      <View style={[styles.laranja, styles.caixa]}></View>
      <View style={[styles.laranja, styles.caixa]}></View>

      <View style={[styles.preto, styles.caixa]}></View>
      <View style={[styles.laranja, styles.caixa]}></View>
      <View style={[styles.laranja ,styles.caixa]}></View>
      <View style={[styles.laranja, styles.caixa]}></View>

      <View style={[styles.azul, styles.caixa]}></View>
      <View style={[styles.azul, styles.caixa]}></View>
      <View style={[styles.amarelo, styles.caixa]}></View>
      <View style={[styles.laranja, styles.caixa]}></View>

      <View style={[styles.azul ,styles.caixa]}></View>
      <View style={[styles.azul, styles.caixa]}></View>
      <View style={[styles.azul, styles.caixa]}></View>
      <View style={[styles.preto, styles.caixa]}></View>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly', 
    alignContent: 'flex-start', 
    paddingTop: 10, 
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
  marrom: {
    backgroundColor: '#8B4513' 
  },
  preto: {
    backgroundColor: '#000000' 
  },
  verde : {
    backgroundColor: '#008000' 
  },
  caixa : {
    margin: 4,
    width : '22%',
    height: '15%'
  }
});