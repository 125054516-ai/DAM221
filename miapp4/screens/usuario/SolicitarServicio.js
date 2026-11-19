
import React from 'react';
import { View, Text, TextInput, ScrollView, SafeAreaView, Pressable, StyleSheet } from 'react-native';

export default function SolicitarServicio() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        <View style={styles.encabezado}>
          <Text style={styles.titulo}>Solicitar servicio</Text>
          <Text style={styles.subtitulo}>
            Encuentra el apoyo que necesitas
          </Text>
        </View>

        <View style={styles.contenido}>

          <Text style={styles.seccion}>
            Nueva solicitud
          </Text>

          <View style={styles.tarjeta}>

            <Text style={styles.etiqueta}>
              Nombre del servicio
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Ej. Curso de Cálculo"
              placeholderTextColor="#999999"
            />

            <Text style={styles.etiqueta}>
              Categoría
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Ej. Matemáticas"
              placeholderTextColor="#999999"
            />

            <Text style={styles.etiqueta}>
              Duración
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Ej. 2 horas"
              placeholderTextColor="#999999"
            />

            <Text style={styles.etiqueta}>
              Descripción
            </Text>
            <TextInput
              style={styles.descripcion}
              placeholder="Describe el servicio que necesitas..."
              placeholderTextColor="#999999"
              multiline
            />

            <View style={styles.botones}>
              <Pressable style={styles.botonSolicitar}>
                <Text style={styles.textoSolicitar}>
                  Solicitar
                </Text>
              </Pressable>

              <Pressable style={styles.botonCancelar}>
                <Text style={styles.textoCancelar}>
                  Cancelar
                </Text>
              </Pressable>
            </View>

          </View>

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
    backgroundColor: '#4D315C',
    padding: 25,
    paddingVertical: 30,
  },

  titulo: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },

  subtitulo: {
    fontSize: 12,
    color: '#EADCEB',
    marginTop: 5,
  },

  contenido: {
    padding: 18,
  },

  seccion: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#4D315C',
    marginBottom: 15,
  },

  tarjeta: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E4D7E6',
    padding: 20,
    elevation: 2,
  },

  etiqueta: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#4D315C',
    marginBottom: 8,
  },

  input: {
    backgroundColor: '#FAF8FA',
    borderWidth: 1,
    borderColor: '#E4D7E6',
    borderRadius: 10,
    padding: 12,
    fontSize: 13,
    color: '#333333',
    marginBottom: 18,
  },

  descripcion: {
    backgroundColor: '#FAF8FA',
    borderWidth: 1,
    borderColor: '#E4D7E6',
    borderRadius: 10,
    padding: 12,
    height: 90,
    textAlignVertical: 'top',
    fontSize: 13,
    color: '#333333',
    marginBottom: 20,
  },

  botones: {
    flexDirection: 'row',
    gap: 10,
  },

  botonSolicitar: {
    flex: 1,
    backgroundColor: '#4D315C',
    borderRadius: 25,
    paddingVertical: 13,
    alignItems: 'center',
  },

  textoSolicitar: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },

  botonCancelar: {
    flex: 1,
    backgroundColor: '#F0E5F1',
    borderRadius: 25,
    paddingVertical: 13,
    alignItems: 'center',
  },

  textoCancelar: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#4D315C',
  },
});
