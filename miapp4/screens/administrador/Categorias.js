import React from 'react';
import { View, Text, Pressable, ScrollView, SafeAreaView, StyleSheet } from 'react-native';

// Pantalla de categorías
export default function Categorias() {
  const usuarios = [1, 2, 3];

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.encabezado}>
        <Text style={styles.titulo}>
          Banco de Tiempo{'\n'}y Talento
        </Text>

        <Pressable style={styles.regresar}>
          <Text style={styles.textoRegresar}>Regresar</Text>
        </Pressable>
      </View>

      <ScrollView
        contentContainerStyle={styles.contenido}
        showsVerticalScrollIndicator={false}
      >

        <Text style={styles.categoria}>MATEMÁTICAS</Text>

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
    paddingLeft: 15,
  },

  titulo: {
    fontSize: 14,
    color: '#FFFFFF',
    textAlign: 'center',
    flex: 1,
  },

  regresar: {
    height: 80,
    backgroundColor: '#FFFEE4',
    paddingHorizontal: 16,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textoRegresar: {
    fontSize: 13,
    color: '#222222',
  },

  contenido: {
    paddingHorizontal: 15,
    paddingBottom: 30,
  },

  categoria: {
    fontSize: 14,
    color: '#222222',
    textAlign: 'center',
    marginBottom: 3,
  },

  tarjeta: {
    height: 138,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#777777',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    marginBottom: 13,
  },

  imagen: {
    width: 92,
    height: 72,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#777777',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textoImagen: {
    fontSize: 9,
    color: '#AAAAAA',
  },

  opciones: {
    width: '45%',
    gap: 6,
  },

  boton: {
    backgroundColor: '#4D315C',
    borderRadius: 18,
    paddingVertical: 10,
    alignItems: 'center',
  },

  textoBoton: {
    fontSize: 11,
    color: '#FFFFFF',
    textAlign: 'center',
  },
});
