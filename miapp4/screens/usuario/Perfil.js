
import React from 'react';
import { View, Text, Pressable, ScrollView, SafeAreaView, StyleSheet } from 'react-native';

export default function Perfil() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.encabezado}>
        <Text style={styles.titulo}>Tu Perfil</Text>
        <Pressable style={styles.regresar}>
          <Text style={styles.textoRegresar}>Regresar</Text>
        </Pressable>
      </View>

      <ScrollView contentContainerStyle={styles.contenido}>

        <View style={styles.datos}>
          <View style={styles.foto}>
          </View>

          <View style={styles.informacion}>
            <View style={styles.fila}>
              <Text style={styles.etiqueta}>Nombre</Text>
              <View style={styles.valor}>
                <Text style={styles.textoValor}>Diego</Text>
              </View>
            </View>

            <View style={styles.fila}>
              <Text style={styles.etiqueta}>Puntos</Text>
              <View style={styles.valor}>
                <Text style={styles.textoValor}>8</Text>
              </View>
            </View>

            <View style={styles.fila}>
              <Text style={styles.etiqueta}>Cursos</Text>
              <View style={styles.valor}>
                <Text style={styles.textoValor}>3</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.secciones}>
          <View style={styles.columna}>
            <Text style={styles.subtitulo}>Cursos</Text>
            <Text style={styles.lista}>• Cálculo Integral</Text>
            <Text style={styles.lista}>• Estructura de datos</Text>
            <Text style={styles.lista}>• Aplicaciones web</Text>
          </View>

          <View style={styles.columna}>
            <Text style={styles.subtitulo}>Pendientes</Text>
            <Text style={styles.lista}>• Aplicaciones móviles</Text>
          </View>
        </View>

        <View style={styles.habilidades}>
          <Text style={styles.subtitulo}>Mis habilidades</Text>
          <Text style={styles.lista}>• Programación en Java</Text>
          <Text style={styles.lista}>• Bases de Datos</Text>
        </View>

        <View style={styles.calificacion}>
          <Text style={styles.subtitulo}>Calificación</Text>
          <Text style={styles.estrellas}>☆☆☆☆☆</Text>
        </View>

        <View style={styles.historial}>
          <Text style={styles.tituloHistorial}>Historial y créditos</Text>
          <Text style={styles.horas}>54 hrs ◷</Text>
        </View>

        <Pressable style={styles.editar}>
          <Text style={styles.textoBoton}>Editar</Text>
        </Pressable>

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
    height: 70,
    backgroundColor: '#4D315C',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 55,
  },

  titulo: {
    fontSize: 17,
    color: '#FFFFFF',
  },

  regresar: {
    backgroundColor: '#FFFEE4',
    paddingHorizontal: 18,
    height: 70,
    justifyContent: 'center',
    borderTopLeftRadius: 18,
    borderBottomLeftRadius: 18,
  },

  textoRegresar: {
    fontSize: 14,
    color: '#222222',
  },

  contenido: {
    flexGrow: 1,
    padding: 18,
  },

  datos: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 55,
  },

  foto: {
    width: 85,
    height: 95,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#8B728E',
    alignItems: 'center',
    justifyContent: 'center',
  },

  usuario: {
    fontSize: 55,
    color: '#222222',
  },

  informacion: {
    width: '55%',
    justifyContent: 'space-between',
  },

  fila: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  etiqueta: {
    width: 75,
    borderWidth: 1,
    borderColor: '#8B728E',
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    padding: 5,
    fontSize: 10,
    textAlign: 'center',
  },

  valor: {
    width: 45,
    height: 23,
    borderWidth: 1,
    borderColor: '#8B728E',
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textoValor: {
    fontSize: 10,
    color: '#222222',
  },

  secciones: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
  },

  columna: {
    width: '49%',
    alignItems: 'flex-start',
  },

  subtitulo: {
    backgroundColor: '#4D315C',
    color: '#FFFFFF',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 5,
    fontSize: 12,
    overflow: 'hidden',
    marginBottom: 10,
  },

  lista: {
    fontSize: 11,
    color: '#222222',
    marginBottom: 10,
  },

  habilidades: {
    alignItems: 'flex-start',
    marginBottom: 20,
  },

  calificacion: {
    alignItems: 'flex-end',
    marginBottom: 30,
  },

  estrellas: {
    fontSize: 28,
    color: '#222222',
  },

  historial: {
    alignItems: 'center',
    marginBottom: 40,
  },

  tituloHistorial: {
    fontSize: 20,
    color: '#4D315C',
  },

  horas: {
    fontSize: 15,
    color: '#4D315C',
    marginTop: 5,
  },

  editar: {
    backgroundColor: '#4D315C',
    borderRadius: 20,
    paddingHorizontal: 25,
    paddingVertical: 8,
    alignSelf: 'flex-end',
    marginTop: 'auto',
  },

  textoBoton: {
    fontSize: 12,
    color: '#FFFFFF',
  },
});
