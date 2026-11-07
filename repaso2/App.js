import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Libros from './screens/libros';

export default function App() {
  return (
    <View style={styles.container}>
      <Libros />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
