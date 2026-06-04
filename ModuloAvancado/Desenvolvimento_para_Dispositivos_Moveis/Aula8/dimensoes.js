import React from 'react';
import { SafeAreaView, Text, StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.blue, styles.pequeno]}></View>
      <View style={[styles.red, styles.medio]}></View>
      <View style={[styles.blue, styles.grande]}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    backgroundColor: '#0F0'
  },
  red: {
    backgroundColor: '#F00'
  },
  pequeno: {
    width: 100,
    height: 100
  },
  medio: {
    width: 200,
    height: 200
  },
  grande: {
    width: '50%',
    height: '20%'
  },
  blue: {
    backgroundColor: 'powderblue'
  }

})