import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Pressable, Alert, Platform } from 'react-native';

function Encabezado() {
  return (
    <View style={styles.encabezado}>
      <Text style={styles.titulo}>MI DÍA UNIVERSITARIO</Text>
      <Text style={styles.subtitulo}>Mis actividades del día</Text>
    </View>
  );
}

function TarjetaActividad({ nombre, descripcion, color }) {
  const verActividad = () => {
    if (Platform.OS === 'web') {
      window.alert(nombre);
    } else {
      Alert.alert('Actividad seleccionada', nombre);
    }
  };

  return (
    <View style={[styles.tarjeta, { backgroundColor: color }]}>
      <Text style={styles.nombre}>{nombre}</Text>
      <Text style={styles.descripcion}>{descripcion}</Text>

      <Pressable style={styles.boton} onPress={verActividad}>
        <Text style={styles.textoBoton}>Ver actividad</Text>
      </Pressable>
    </View>
  );
}

export default function App() {
  const [actividades, setActividades] = useState([
    {
      id: 1,
      nombre: 'Estudiar React Native',
      descripcion: 'Repasar los componentes y sus funciones.',
      color: '#ADD8E6',
    },
    {
      id: 2,
      nombre: 'Realizar práctica',
      descripcion: 'Crear una aplicación con tres actividades.',
      color: '#90EE90',
    },
    {
      id: 3,
      nombre: 'Entregar proyecto',
      descripcion: 'Terminar y entregar el trabajo universitario.',
      color: '#F08080',
    },
  ]);

  return (
    <ScrollView style={styles.container}>
      <Encabezado />

      {actividades.map((actividad) => (
        <TarjetaActividad
          key={actividad.id}
          nombre={actividad.nombre}
          descripcion={actividad.descripcion}
          color={actividad.color}
        />
      ))}

      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },

  encabezado: {
    backgroundColor: '#222222',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    marginTop: 20,
    alignItems: 'center',
  },

  titulo: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },

  subtitulo: {
    fontSize: 16,
    color: 'white',
    marginTop: 10,
  },

  tarjeta: {
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
  },

  nombre: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },

  descripcion: {
    fontSize: 16,
    color: 'black',
    marginBottom: 15,
  },

  boton: {
    backgroundColor: '#966060',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },

  textoBoton: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
});
