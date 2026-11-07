
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Pressable, FlatList, ActivityIndicator, Alert, StyleSheet, ImageBackground, Image } from 'react-native';

export default function Libros() {

  // Aqui se guardaran los datos de los libros y las pantallas 
  const [splash, setSplash] = useState(true);
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [genero, setGenero] = useState('');
  const [libros, setLibros] = useState([]);
  const [cargando, setCargando] = useState(false);

  // Pantalla de bienvenida de 2 segundos y se usara el efecto aplicado
  // de esta manera tardara dos segundos en desparecer y despues mandara a la pantalla del registro
  useEffect(() => {
    const tiempo = setTimeout(() => setSplash(false), 2000);
    return () => clearTimeout(tiempo);
  }, []);

  // Función para registrar libros y de esta manera guardaremos los libros ytambien validaremos
  const agregar = () => {

    // Aqui validamos que todos los campos tengan informacion
    if (!titulo.trim() || !autor.trim() || !genero.trim()) {
      Alert.alert('Error en algo', 'Todos los campos son obligatorios');
      return;
    }

    setCargando(true);

    // Simula una espera de 4 segundos y luego agrega el que quirees
    setTimeout(() => {
      setLibros(lista => [...lista, {
        id: Date.now().toString(),
        titulo, autor, genero
      }]);

      // Limpia los campos y de esta manera se mostrara un mensaje de q se registro
      setTitulo('');
      setAutor('');
      setGenero('');
      setCargando(false);

      Alert.alert('fantastico ', 'Libro guardado correctamente');
    }, 4000);
  };

  // SplashScreen que sirve para mostrar una pantalla de bienvenida
  // aqui pondremos la imagen OIP que tenemos guardada en assets
  if (splash) {
    return (
      <View style={styles.splash}>

        {/* Aqui se mostrara nuestra imagen de bienvenida */}
        <Image
          source={require('../assets/OIP.webp')}
          style={styles.logo}
          resizeMode="contain"
        />

        <Text style={styles.nombre}> Lugar de libros felices </Text>

        {/* Aqui se mostrara el circulo mientras esperamos los 2 segundos */}
        <ActivityIndicator size="large" color="#ffffff" />

      </View>
    );
  }

  // Pantalla principal en donde se mostrara el formulario y la lista de libros registrados
  return (

    // ahora aqui pondremos la imagen de fondo que tenemos guardada en assets
    <ImageBackground
      source={require('../assets/biblio.png')}
      style={styles.fondo}
      resizeMode="cover"
    >
      <View style={styles.contenedor}>

        <Text style={styles.nombre}> Aqui agrega tus libros </Text>

        <TextInput
          style={styles.input}
          placeholder="Título del libro"
          value={titulo}
          onChangeText={setTitulo}
          editable={!cargando}
        />

        <TextInput
          style={styles.input}
          placeholder="Autor del libro"
          value={autor}
          onChangeText={setAutor}
          editable={!cargando}
        />

        <TextInput
          style={styles.input}
          placeholder="Genero del libro "
          value={genero}
          onChangeText={setGenero}
          editable={!cargando}
        />

        <Pressable
          style={styles.boton}
          onPress={agregar}
          disabled={cargando}
        >
          <Text style={styles.textoBoton}>
            {cargando ? 'Guardando...' : 'Agregar Libro'}
          </Text>
        </Pressable>

        {cargando && (
          <ActivityIndicator
            size="large"
            color="#5d4dc6"
            style={{ marginTop: 15 }}
          />
        )}

        <Text style={styles.subtitulo}>
          Total de libros: {libros.length}
        </Text>

        <FlatList
          data={libros}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (

            // Aqui se mostraran los libros con su titulo autor y genero
            <View style={styles.tarjeta}>
              <Text style={styles.titulo}>{item.titulo}</Text>
              <Text>Autor: {item.autor}</Text>
              <Text>Genero: {item.genero}</Text>
            </View>
          )}
        />

      </View>
    </ImageBackground>
  );
}

// Estilos de la aplicación
const styles = StyleSheet.create({

  // Aqui pondremos el color y la posicion de la pantalla de bienvenida
  splash: {
    flex: 1,
    backgroundColor: '#111D30',
    justifyContent: 'center',
    alignItems: 'center'
  },

  // Aqui cambiamos el tamaño de nuestra imagen OIP
  logo: {
    width: 170,
    height: 170,
    marginBottom: 20
  },

  // Aqui le damos color y tamaño al nombre de nuestra aplicacion
  nombre: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#D5A75C',
    textAlign: 'center',
    marginBottom: 25
  },

  // Aqui hacemos que la imagen de fondo ocupe toda la pantalla
  fondo: {
    flex: 1
  },

  // Aqui acomodamos el formulario y hacemos transparente el fondo
  contenedor: {
    flex: 1,
    backgroundColor: 'rgba(10,20,36,0.45)',
    padding: 20,
    paddingTop: 60
  },

  // Aqui le damos forma y color a los campos donde escribiremos
  input: {
    backgroundColor: '#fff',
    padding: 13,
    borderRadius: 10,
    marginBottom: 12
  },

  // Aqui cambiamos el color y tamaño del boton para agregar libros
  boton: {
    backgroundColor: '#C39142',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center'
  },

  // Aqui cambiamos el color del texto que tiene el boton
  textoBoton: {
    color: '#fff',
    fontWeight: 'bold'
  },

  // Aqui se mostrara el total de libros con letras blancas
  subtitulo: {
    color: '#fff',
    fontSize: 18,
    marginVertical: 20,
    fontWeight: 'bold'
  },

  // Aqui le damos un fondo blanco a cada libro que se registre
  tarjeta: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10
  },

  // Aqui hacemos que el titulo de cada libro se vea mas grande
  titulo: {
    fontSize: 17,
    fontWeight: 'bold'
  }
});
