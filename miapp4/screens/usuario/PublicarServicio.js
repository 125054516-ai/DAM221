
import React from 'react';
import { View, Text, TextInput, Pressable, ScrollView, SafeAreaView, StyleSheet } from 'react-native';

// Pantalla para publicar servicios
export default function PublicarServicio() {
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.encabezado}>
        <Text style={styles.titulo}>Publicar servicio</Text>

        <Pressable style={styles.regresar}>
          <Text style={styles.textoRegresar}>Regresar</Text>
        </Pressable>
      </View>

      <ScrollView
        contentContainerStyle={styles.contenido}
        showsVerticalScrollIndicator={false}
      >

        <Text style={styles.subtitulo}>Datos del servicio</Text>

        <View style={styles.formulario}>
          <View style={styles.campos}>

            <Text style={styles.etiqueta}>Nombre del servicio</Text>
            <TextInput
              style={styles.input}
              placeholder="Nombre"
            />

            <Text style={styles.etiqueta}>Categoría</Text>
            <TextInput
              style={styles.input}
              placeholder="Categoría"
            />

            <Text style={styles.etiqueta}>Duración</Text>
            <TextInput
              style={styles.input}
              placeholder="Horas"
              keyboardType="numeric"
            />

            <Text style={styles.etiqueta}>Créditos</Text>
            <TextInput
              style={styles.input}
              placeholder="Cantidad"
              keyboardType="numeric"
            />

          </View>

          <View style={styles.derecha}>
            <View style={styles.imagen}>
              <Text style={styles.textoImagen}>IMAGEN</Text>
            </View>

            <Text style={styles.etiqueta}>Descripción</Text>
            <TextInput
              style={styles.descripcion}
              placeholder="Describe tu servicio"
              multiline
              textAlignVertical="top"
            />
          </View>
        </View>

        <View style={styles.resumen}>
          <Text style={styles.textoResumen}>Servicio disponible</Text>
          <Text style={styles.textoDetalle}>
            Comparte tus conocimientos y gana créditos de tiempo.
          </Text>
        </View>

        <View style={styles.botones}>
          <Pressable style={styles.boton}>
            <Text style={styles.textoBoton}>Publicar</Text>
          </Pressable>

          <Pressable style={styles.boton}>
            <Text style={styles.textoBoton}>Cancelar</Text>
          </Pressable>
        </View>

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
    fontWeight: '500',
    color: '#FFFFFF',
    flexShrink: 1,
    marginRight: 10,
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
    padding: 15,
  },

  subtitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4D315C',
    marginBottom: 20,
    textAlign: 'center',
  },

  formulario: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  campos: {
    width: '46%',
  },

  derecha: {
    width: '48%',
  },

  etiqueta: {
    fontSize: 11,
    color: '#222222',
    marginBottom: 5,
    marginTop: 8,
  },

  input: {
    height: 32,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#8B728E',
    borderRadius: 20,
    paddingHorizontal: 10,
    fontSize: 11,
    marginBottom: 12,
  },

  imagen: {
    height: 130,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#8B728E',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textoImagen: {
    fontSize: 12,
    color: '#222222',
  },

  descripcion: {
    height: 105,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#8B728E',
    borderRadius: 15,
    padding: 10,
    fontSize: 11,
  },

  resumen: {
    marginTop: 35,
    alignItems: 'center',
  },

  textoResumen: {
    fontSize: 16,
    color: '#4D315C',
    fontWeight: 'bold',
  },

  textoDetalle: {
    fontSize: 12,
    color: '#555555',
    textAlign: 'center',
    marginTop: 10,
  },

  botones: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 40,
  },

  boton: {
    backgroundColor: '#4D315C',
    borderRadius: 25,
    paddingHorizontal: 25,
    paddingVertical: 10,
  },

  textoBoton: {
    fontSize: 12,
    color: '#FFFFFF',
  },
});
