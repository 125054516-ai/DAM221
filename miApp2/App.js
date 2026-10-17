/*1. Zona de importaciones*/

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import {Perfil} from './components/Perfil';



/*2. Zona Render o main */

export default function App() {
  return (
    <View style={styles.container}>
   
   <Perfil nombre="Lulu" carrera="TIID"materia="movil" cuatri="CUARTO" />
   
   <Perfil nombre="RENATA" carrera="TIID" materia="movil" cuatri="CUARTO" />

   <Perfil nombre="Luisa" carrera="TIID" materia="movil" cuatri="CUARTO" />


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
