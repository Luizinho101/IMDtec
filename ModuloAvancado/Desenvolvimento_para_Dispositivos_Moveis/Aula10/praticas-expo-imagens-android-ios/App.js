import { StyleSheet, Text, View ,Image , Platform } from 'react-native';

const ico = Platform.OS === 'ios'
  ? require('./assets/platform/platform.ios.png')
  : require('./assets/platform/platform.android.png')


export default function App() {
  return (
    <View style={styles.container}>
        <Image source={ico} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
