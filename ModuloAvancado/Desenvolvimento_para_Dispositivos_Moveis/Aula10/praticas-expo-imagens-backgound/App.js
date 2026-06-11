import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <ImageBackground source={require('./assets/background/bg.jpg')} style={styles.container}>
      <Text style={styles.grande}>Olá</Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  grande: {
    fontSize: 50
  }
});