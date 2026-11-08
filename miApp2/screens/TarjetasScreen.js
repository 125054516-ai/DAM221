/*1. Zona de importaciones*/

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, } from 'react-native';
import {Perfil} from '../components/Perfil';



/*2. Zona Render o main */

export default function TarjetasScreen() {
  return (
    <View style={styles.container}>
   
   <Perfil style={styles.tarjetas1} nombre="Lulu" carrera="TIID"materia="movil" cuatri="CUARTO" />
   
   <Perfil style={styles.tarjetas2} nombre="RENATA" carrera="TIID" materia="movil" cuatri="CUARTO" />

   <Perfil style={styles.tarjetas3} nombre="Luisa" carrera="TIID" materia="movil" cuatri="CUARTO" />


      <StatusBar style="auto" />
    </View>
  );
}

/*3. Zona de estilos y posiciones*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',          

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',

  },
  
  tarjetas1: {backgroundColor: 'moccasin'},
  tarjetas2: {backgroundColor: 'greenyellow'},
  tarjetas3: {backgroundColor: 'lightblue'},
 


});
