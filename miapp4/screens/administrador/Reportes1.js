import React from 'react';
import { View, Text, TextInput, Pressable, ScrollView, SafeAreaView, StyleSheet } from 'react-native';

// Pantalla de reportes
export default function Reportes1() {
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

        <TextInput
          style={styles.buscar}
          placeholder="Buscar ID..."
          placeholderTextColor="#333333"
        />

        <Text style={styles.subtitulo}>MÁS RECIENTES</Text>

        <View style={styles.reporte}>

          <View style={styles.informacion}>
            <Text style={styles.textoReporte}>
              ID del reporte:{'\n'}
              47573893{'\n'}
              Fecha: 02/10/2026{'\n'}
              Hora: 08:35 p. m.{'\n'}
              Usuario que reporta:{'\n'}
              dieguito {'\n'}
              Descripción del problema: Al ingresar el usuario y contraseña, el sistema no permite iniciar sesión.
            </Text>
          </View>

          <View style={styles.acciones}>
            <Pressable style={styles.rechazar}>
              <Text style={styles.textoAccion}>X</Text>
            </Pressable>

            <Pressable style={styles.aprobar}>
              <Text style={styles.textoAccion}>✓</Text>
            </Pressable>
          </View>

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
    alignItems: 'center',
    justifyContent: 'center',
  },

  textoRegresar: {
    fontSize: 13,
    color: '#222222',
  },

  contenido: {
    flexGrow: 1,
    paddingHorizontal: 15,
    paddingTop: 20,
    paddingBottom: 30,
  },

  buscar: {
    width: '75%',
    height: 28,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#777777',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 0,
    fontSize: 12,
    alignSelf: 'center',
  },

  subtitulo: {
    fontSize: 14,
    color: '#222222',
    textAlign: 'center',
    marginTop: 55,
    marginBottom: 55,
  },

  reporte: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#777777',
    flexDirection: 'row',
    minHeight: 180,
  },

  informacion: {
    width: '62%',
    borderRightWidth: 1,
    borderColor: '#777777',
    padding: 7,
  },

  textoReporte: {
    fontSize: 12,
    color: '#222222',
    lineHeight: 15,
  },

  acciones: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
  },

  rechazar: {
    width: 38,
    height: 38,
    backgroundColor: '#ff000d',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  aprobar: {
    width: 38,
    height: 38,
    backgroundColor: '#0554ff',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textoAccion: {
    fontSize: 23,
    color: '#000000',
    fontWeight: 'bold',
  },
});
