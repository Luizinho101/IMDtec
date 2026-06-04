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
    backgroundColor: '#0F0',
    flex: 1
  },
  red: {
    backgroundColor: '#F00'
  },
  pequeno: {
    flex: 1
  },
  medio: {
    flex: 2
  },
  grande: {
    flex: 3
  },
  blue: {
    backgroundColor: 'powderblue'
  }

})