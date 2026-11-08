import React from 'react';
import { View, Text, TextInput, Pressable, ScrollView, SafeAreaView, StyleSheet } from 'react-native';

export default function Cursos() {
  const cursos = [
    { id: 1, nombre: 'Curso de Calculo', categoria: 'Matematicas', duracion: '2 horas', estado: 'Disponible' },
    { id: 2, nombre: 'Introduccion a Java', categoria: 'Programacion', duracion: '3 horas', estado: 'Disponible' },
    { id: 3, nombre: 'Ejercicios de Fisica', categoria: 'Ciencias', duracion: '1 hora', estado: 'Ocupado' },
    { id: 4, nombre: 'Bases de Datos', categoria: 'Programacion', duracion: '2 horas', estado: 'Disponible' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.encabezado}>
        <Text style={styles.titulo}>Cursos</Text>

        <Pressable style={styles.regresar}>
          <Text style={styles.textoRegresar}>Regresar</Text>
        </Pressable>
      </View>

      <ScrollView
        contentContainerStyle={styles.contenido}
        showsVerticalScrollIndicator={false}
      >
        <TextInput
          style={styles.buscar}
          placeholder="Buscar..."
          placeholderTextColor="#333333"
        />

        <View style={styles.lista}>
          {cursos.map((curso) => (
            <View key={curso.id} style={styles.fila}>
              <View style={styles.tarjeta}>
                <Text style={styles.detalle}>Nombre: {curso.nombre}</Text>
                <Text style={styles.detalle}>Categoría: {curso.categoria}</Text>
                <Text style={styles.detalle}>Duración: {curso.duracion}</Text>
                <Text style={styles.detalle}>Estado: {curso.estado}</Text>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.botones}>
          <Pressable style={styles.boton}>
            <Text style={styles.textoBoton}>Solicitar</Text>
          </Pressable>

          <Pressable style={styles.boton}>
            <Text style={styles.textoBoton}>Ver</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFEE4',
  },

  encabezado: {
    height: 60,
    backgroundColor: '#4D315C',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingRight: 10,
  },

  titulo: {
    fontSize: 15,
    color: '#FFFFFF',
    flex: 1,
    textAlign: 'center',
  },

  regresar: {
    backgroundColor: '#FFFEE4',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textoRegresar: {
    fontSize: 12,
    color: '#4D315C',
    fontWeight: '500',
  },

  contenido: {
    flexGrow: 1,
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 30,
  },

  buscar: {
    width: '70%',
    height: 25,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#333333',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 0,
    fontSize: 11,
  },

  lista: {
    marginTop: 30,
    gap: 25,
  },

  fila: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  tarjeta: {
    width: '85%',
    minHeight: 75,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#8B728E',
    borderRadius: 25,
    paddingHorizontal: 12,
    paddingVertical: 8,
    justifyContent: 'center',
  },

  detalle: {
    fontSize: 11,
    color: '#222222',
  },

  botones: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 15,
    marginTop: 35,
  },

  boton: {
    backgroundColor: '#4D315C',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },

  textoBoton: {
    fontSize: 11,
    color: '#FFFFFF',
  },
});
