import React from 'react';
import { View, Text, TextInput, Pressable, ScrollView, SafeAreaView, StyleSheet } from 'react-native';

// Pantalla para solicitar servicios
export default function SolicitarServicio() {
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.encabezado}>
        <Text style={styles.titulo}>Solicitar servicio</Text>

        <Pressable style={styles.regresar}>
          <Text style={styles.textoRegresar}>Regresar</Text>
        </Pressable>
      </View>

      <ScrollView
        contentContainerStyle={styles.contenido}
        showsVerticalScrollIndicator={false}
      >

        <View style={styles.formulario}>
          <View style={styles.campos}>
            {['Nombre', 'Duración', 'Categoría', 'Precio'].map((campo) => (
              <View key={campo} style={styles.grupo}>
                <Text style={styles.etiqueta}>{campo}</Text>
                <TextInput style={styles.input} />
              </View>
            ))}
          </View>

          <View style={styles.derecha}>
            <View style={styles.imagen}>
              <Text style={styles.textoImagen}>IMAGEN</Text>
            </View>

            <Text style={styles.descripcion}>DESCRIPCIÓN</Text>
          </View>
        </View>

        <View style={styles.botones}>
          <Pressable style={styles.boton}>
            <Text style={styles.textoBoton}>Solicitar</Text>
          </Pressable>

          <Pressable style={styles.boton}>
            <Text style={styles.textoBoton}>Cancelar</Text>
          </Pressable>
        </View>

        <View style={styles.horas}>
          <Text style={styles.tituloHoras}>
            Total de horas{'\n'}agregado
          </Text>
          <Text style={styles.reloj}>◷+</Text>
        </View>

        <View style={styles.total}>
          <Text style={styles.textoTotal}>20 hrs agregadas</Text>
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
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 25,
  },

  formulario: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  campos: {
    width: '43%',
  },

  grupo: {
    marginBottom: 22,
    alignItems: 'center',
  },

  etiqueta: {
    fontSize: 10,
    color: '#222222',
    marginBottom: 3,
  },

  input: {
    width: '100%',
    height: 29,
    borderWidth: 1,
    borderColor: '#8B728E',
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 10,
    fontSize: 12,
    color: '#222222',
  },

  derecha: {
    width: '48%',
    alignItems: 'center',
  },

  imagen: {
    width: '100%',
    height: 135,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#8B728E',
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textoImagen: {
    fontSize: 11,
    color: '#222222',
  },

  descripcion: {
    fontSize: 15,
    color: '#222222',
    marginTop: 18,
  },

  botones: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 18,
    marginTop: 15,
  },

  boton: {
    backgroundColor: '#4D315C',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 9,
  },

  textoBoton: {
    fontSize: 11,
    color: '#FFFFFF',
  },

  horas: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 35,
    gap: 10,
  },

  tituloHoras: {
    fontSize: 16,
    color: '#4D315C',
    textAlign: 'center',
  },

  reloj: {
    fontSize: 25,
    color: '#4D315C',
  },

  total: {
    backgroundColor: '#4D315C',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 8,
    alignSelf: 'flex-end',
    marginTop: 10,
    marginRight: 15,
  },

  textoTotal: {
    fontSize: 12,
    color: '#FFFFFF',
  },
});
