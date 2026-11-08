import React from 'react';
import { View, Text, Pressable, ScrollView, SafeAreaView, StyleSheet } from 'react-native';

// Pantalla para supervisar cursos
export default function Supervisar() {
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

        <View style={styles.informacion}>

          <View style={styles.datos}>
            <Text style={styles.textoDato}>
              Duración:{'\n'}
              6 Días{'\n'}
              Categoría:{'\n'}
              Programación{'\n'}
              Costo/hora:{'\n'}
              $25{'\n'}
              Contacto:{'\n'}
              4425513945{'\n'}
              ID Impartidor:{'\n'}
              3422448
            </Text>
          </View>

          <View style={styles.curso}>
            <Text style={styles.nombreCurso}>CURSO HTML</Text>

            <View style={styles.imagen}>
              <Text style={styles.textoImagen}>IMAGEN</Text>
            </View>
          </View>

        </View>

        <Text style={styles.descripcion}>
          Aprende los fundamentos de HTML y crea tus propias páginas web desde cero. Durante este curso de 6 días conocerás las principales etiquetas y estructuras utilizadas para crear sitios web, trabajando con ejemplos y ejercicios prácticos.
          {'\n'}
          A lo largo del curso aprenderás a crear la estructura de una página, agregar textos, imágenes, enlaces, listas, tablas y formularios, además de organizar correctamente el contenido de una página web.
        </Text>

        <Pressable style={styles.boton}>
          <Text style={styles.textoBoton}>Eliminar curso</Text>
        </Pressable>

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
  },

  titulo: {
    flex: 1,
    fontSize: 14,
    color: '#FFFFFF',
    textAlign: 'center',
  },

  regresar: {
    height: 80,
    backgroundColor: '#FFFEE4',
    paddingHorizontal: 18,
    borderTopLeftRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textoRegresar: {
    fontSize: 13,
    color: '#222222',
  },

  contenido: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 35,
  },

  informacion: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },

  datos: {
    width: '45%',
  },

  textoDato: {
    fontSize: 13,
    color: '#222222',
    lineHeight: 17,
  },

  curso: {
    width: '48%',
    alignItems: 'center',
  },

  nombreCurso: {
    fontSize: 14,
    color: '#222222',
    marginBottom: 8,
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

  descripcion: {
    fontSize: 13,
    color: '#222222',
    lineHeight: 17,
    marginTop: 10,
  },

  boton: {
    backgroundColor: '#4D315C',
    borderRadius: 20,
    paddingHorizontal: 25,
    paddingVertical: 11,
    alignSelf: 'center',
    marginTop: 35,
  },

  textoBoton: {
    fontSize: 12,
    color: '#FFFFFF',
  },
});
