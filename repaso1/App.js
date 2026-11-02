import React, { useState } from 'react';
import {View, Text, TextInput, Switch, TouchableOpacity, ScrollView, Alert, StyleSheet } from 'react-native';
// touchable sirve para crear botones y que se puedan presionar
// kay evita que el teclado tape los campos en donde va la info
// plataform sirve para ver si ocupas iphone o android
// variantes sacadas de yutu :)

export default function App() {

  // aqui guardamos los datos que ponemos
  const [nombre, setNombre] = useState('');
  const [carrera, setCarrera] = useState('');
  const [cuatr, setCuatr] = useState('');

  // opciones para marcar si o no
  const [taller, setTaller] = useState(false);
  const [constancia, setConstancia] = useState(false);
  const [deportes, setDeportes] = useState(false);

  // esta parte revisa el registro
  function registrar() {

    // por si dejamos algo sin llenar
    if (!nombre.trim() || !carrera.trim() || !cuatr.trim()) {
      Alert.alert('faltan datos', 'te falto llenar algun campo');
      return;
    }

    // checamos que el cuatri sea un numero
    let numero = Number(cuatr);

    if (!/^[0-9]+$/.test(cuatr.trim()) || numero === 0) {
      Alert.alert('dato incorrecto', 'pon un cuatrimestre valido');
      return;
    }

    // si todo esta bien sale el registro
    Alert.alert('registro listo',
      `nombre: ${nombre}
carrera: ${carrera}
cuatrimestre: ${cuatr}

taller: ${taller ? 'si' : 'no'}
constancia: ${constancia ? 'si' : 'no'}
deportes: ${deportes ? 'si' : 'no'}`
    );
  }

  // lo que aparece en la pantalla
  return (
    <ScrollView contentContainerStyle={styles.contenedor}>

      <Text style={styles.titulo}>
      registro de la upq bro
      </Text>

      <TextInput
        style={styles.input}
        placeholder="nombre completo porfa "
        value={nombre}
        onChangeText={setNombre}
      />

      <TextInput
        style={styles.input}
        placeholder="carrera de la upq"
        value={carrera}
        onChangeText={setCarrera}
      />

      <TextInput
        style={styles.input}
        placeholder="cuatrimestre en el que estas"
        keyboardType="number-pad"
        value={cuatr}
        onChangeText={setCuatr}
      />

      <Text style={styles.subtitulo}>opciones</Text>

      <View style={styles.fila}>
        <Text>asistira al taller?</Text>
        <Switch value={taller} onValueChange={setTaller} />
      </View>

      <View style={styles.fila}>
        <Text>requiere constancia?</Text>
        <Switch value={constancia} onValueChange={setConstancia} />
      </View>

      <View style={styles.fila}>
        <Text style={styles.pregunta}>participara en deportes?</Text>
        <Switch value={deportes} onValueChange={setDeportes} />
      </View>

      <TouchableOpacity style={styles.boton} onPress={registrar}>
        <Text style={styles.textoBoton}> enviaras esto? </Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

// aqui cambiamos colores y tamaños
const styles = StyleSheet.create({

  contenedor: {
    flexGrow: 1,
    backgroundColor: 'white',
    padding: 20,
    paddingTop: 80
  },

  titulo: {
    fontSize: 23,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30
  },

  input: {
    borderWidth: 1,
    borderColor: '#aba2b4',
    borderRadius: 8,
    padding: 12,
    marginBottom: 20,
    fontSize: 16
  },

  subtitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20
  },

  fila: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20
  },

  pregunta: {
    flex: 1,
  },

  boton: {
    backgroundColor: '#000000',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20
  },

  textoBoton: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
