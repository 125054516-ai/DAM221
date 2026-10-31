/*1. Zona de importaciones*/

import { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, Alert, StyleSheet, ScrollView} from 'react-native';

/*2. Zona Render o main */

export default function TextInput() {

  const [nombre , setNombre] = useState('');
  const [edad , setEdad] = useState('');
  const [password , setPassword] = useState('');
  const [comentario , setComentario] = useState('');

  const alertaSimple = () => {
    Alert.alert ('Hola crayola ');""
  };

  const alertaDosBotones = () => {
    Alert.alert(' confirmar ', 'quieres cotinuar?',[
      {text: 'cancelar'},
      {text: ' aceptar'},

    ])
  };

  const mostrarNombre =() =>{
    Alert.alert('tu nombre' , nombre ==='' ? 'no escribe nada': nombre)
  }

  return (
    <ScrollView contentContainerStyle = {styles.container}>
      <Text style={styles.titulo}>Text input y alert</Text>

       <Text style={styles.subtitulo}> 1. basico</Text>

       <TextInput
       style={styles.input}
       placeholder = 'escribe tu nombre '
       value ={nombre}
       onChange={setNombre}/>

       <Text> escribiste : {nombre} </Text>  

       <Text style={styles.subtitulo}>2. teclado </Text>

      <TextInput
      style = {styles.input}
      placeholder = 'edad'
      keyboardType = 'numeric'
      maxLength = {3}
      value = {edad}
      onChangeText = {setEdad}/>

      <Text style={styles.subtitulo}>3. contraseña (secureTextEntry) </Text>

      <TextInput
      style = {styles.input}
      placeholder = 'comtraseña'
      secureTextEntry = {true}
      value = {password}
      onChangeText = {setPassword}/>

    <Text style={styles.subtitulo}>4.Varias lineas</Text>
      <TextInput
      styles={[styles.input, styles.grande]}
      placeholder='Escribre un comentario'
      multiline={true}
      numberOfLines={4}
      value={comentario}
      onChangeText={setComentario}
      />

      <Text style={styles.subtitulo}>Ejemplos de Alert</Text> 
      <View style={styles.boton}>
        <Button title="Alerta simple" onPress={alertaSimple}/>
      </View>
      <View style={styles.boton}>
        <Button title="Alerta de dos botones" onPress={alertaDBtn}/>
      </View>
      <View style={styles.boton}>
        <Button title="Mostrar mi nombre" onPress={mostrarNombre}/>
      </View>
      
    
    </ScrollView>
  )
}

/*3. Zona de estilos y posiciones*/
const styles = StyleSheet.create({
    container: { 
      padding: 24, 
      paddingTop: 60, 
      backgroundColor: '#fff' },
    titulo: { 
      fontSize: 24, 
      fontWeight: 'bold', 
      textAlign: 'center', 
      marginBottom: 10 },
    subtitulo: { 
      fontSize: 16, 
      fontWeight: 'bold', 
      marginTop: 16, 
      marginBottom: 6 },
    input: {
        borderWidth: 1,
        borderColor: '#999',
        borderRadius: 6,
        padding: 10,
        fontSize: 16,
    },
    grande: { height: 90, 
      textAlignVertical: 'top' },
    boton: { marginBottom: 10 },
});
