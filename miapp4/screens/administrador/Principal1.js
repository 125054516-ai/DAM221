import React from 'react';
import { View, Text, Pressable, ScrollView, SafeAreaView, StyleSheet } from 'react-native';

// Pantalla principal del administrador
export default function Principal1() {
  const usuarios = [1, 2, 3];

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.encabezado}>
        <Text style={styles.menu}>☰</Text>

        <Text style={styles.titulo}>
          Banco de Tiempo{'\n'}y Talento
        </Text>

        <View style={styles.espacio} />
      </View>

      <ScrollView
        contentContainerStyle={styles.contenido}
        showsVerticalScrollIndicator={false}
      >

        {usuarios.map((usuario) => (
          <View key={usuario} style={styles.tarjeta}>

            <View style={styles.imagen}>
              <Text style={styles.textoImagen}>IMAGEN</Text>
            </View>

            <View style={styles.opciones}>
              <Pressable style={styles.boton}>
                <Text style={styles.textoBoton}>Perfil usuario</Text>
              </Pressable>

              <Pressable style={styles.boton}>
                <Text style={styles.textoBoton}>Supervisar</Text>
              </Pressable>

              <Pressable style={styles.boton}>
                <Text style={styles.textoBoton}>Eliminar</Text>
              </Pressable>
            </View>

          </View>
        ))}

      </ScrollView>
    </SafeAreaView>
  );
}

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFEE4',
  },

  encabezado: {
    height: 80,
    backgroundColor: '#4D315C',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
  },

  menu: {
    fontSize: 25,
    color: '#FFFFFF',
  },

  titulo: {
    fontSize: 15,
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: '500',
  },

  espacio: {
    width: 25,
  },

  contenido: {
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 30,
  },

  tarjeta: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#555555',
    height: 138,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    marginBottom: 15,
  },

  imagen: {
    width: 92,
    height: 75,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#777777',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textoImagen: {
    fontSize: 10,
    color: '#AAAAAA',
  },

  opciones: {
    width: '48%',
    gap: 6,
  },

  boton: {
    backgroundColor: '#4D315C',
    borderRadius: 20,
    paddingVertical: 10,
    alignItems: 'center',
  },

  textoBoton: {
    fontSize: 12,
    color: '#FFFFFF',
    textAlign: 'center',
  },
});
