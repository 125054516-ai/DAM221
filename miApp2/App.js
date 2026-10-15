/*1. Zona de importaciones*/

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import {Saludo} from './components/Saludo';
import {Saludo2} from './components/Saludo2';


/*2. Zona Render o main */

export default function App() {
  return (

    <View style={styles.container}>
    <Text> Hola mundo react native </Text>
    <Image source={require('./assets/wave.png')} />
    <Text> ---------------------------- </Text>

    <Saludo></Saludo>
    <Saludo  />

    <Text> ---------------------------- </Text>
    
    <Saludo2></Saludo2>
    <Saludo2  />


      <StatusBar style="auto" />
    </View>
  );
}

/*3. Zona de estilos y posiciones*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
