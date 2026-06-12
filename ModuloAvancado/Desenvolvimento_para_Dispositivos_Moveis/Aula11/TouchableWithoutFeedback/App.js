import React from 'react';
import { SafeAreaView, Text, StyleSheet, View, Button, TouchableHighlight, TouchableNativeFeedback, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={() => { alert('Clicou aqui!') }}>
        <View style={styles.button}>
          <Text style={styles.text}>Clique aqui!</Text>
        </View>
      </TouchableWithoutFeedback>
      <Button title="Clique aqui!" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'powderblue',
    color: 'white',
    margin: 20
  },
  text: {
    color: '#000',
    padding: 15
  }
})