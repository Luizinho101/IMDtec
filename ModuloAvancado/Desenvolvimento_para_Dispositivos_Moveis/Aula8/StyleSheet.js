import { StyleSheet, Text, View, SafeAreaView } from 'react-native';


export default function App() {
  return (
 <SafeAreaView style={styles.container}>
      <Text style={[styles.red, styles.grande]}>Hello From React</Text>
      <Text style={{ fontSize: 50 }}>Inline Style</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0F0'
  },
  red: {
    color: '#F00'
  },
  grande: {
    fontSize: 30
  }
});
