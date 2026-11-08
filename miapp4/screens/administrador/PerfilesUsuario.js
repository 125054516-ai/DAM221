import React from 'react';
import { View, Text, Pressable, ScrollView, SafeAreaView, StyleSheet } from 'react-native';

// Pantalla de perfiles de usuario
export default function PerfilesUsuario() {
  const historial = [1, 2];

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

        <View style={styles.perfil}>
          <View style={styles.imagenPerfil}>
            <Text style={styles.textoImagen}>IMAGEN</Text>
          </View>

          <View style={styles.datos}>
            <Text style={styles.textoDato}>ID:125053572</Text>
            <Text style={styles.textoDato}>Nombre:</Text>
            <Text style={styles.textoDato}>
              Ulises Tonatiuh
            </Text>
            <Text style={styles.textoDato}>
              Acatecalt Ramirez
            </Text>
            <Text style={styles.textoDato}>Edad:19</Text>
            <Text style={styles.textoDato}>Contacto:</Text>
            <Text style={styles.textoDato}>4436728745</Text>
          </View>
        </View>

        <View style={styles.creditos}>
          <Text style={styles.textoCreditos}>100 creditos</Text>
          <View style={styles.linea} />
        </View>

        <Text style={styles.historialTitulo}>HISTORIAL</Text>

        {historial.map((item) => (
          <View key={item} style={styles.tarjeta}>

            <View style={styles.imagenHistorial}>
              <Text style={styles.textoImagen}>IMAGEN</Text>
            </View>

            <View style={styles.opciones}>
              <Pressable style={styles.boton}>
                <Text style={styles.textoBoton}>Perfil usuario</Text>
              </Pressable>

              <Pressable style={styles.boton}>
                <Text style={styles.textoBoton}>Supervisar</Text>
              </Pressable>
            </View>

          </View>
        ))}

        <View style={styles.botonesFinales}>
          <Pressable style={styles.botonFinal}>
            <Text style={styles.textoBoton}>Eliminar Cuenta</Text>
          </Pressable>

          <Pressable style={styles.botonFinal}>
            <Text style={styles.textoBoton}>Bloquear Cuenta</Text>
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
    height: 80,
    backgroundColor: '#4D315C',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 12,
  },

  titulo: {
    fontSize: 14,
    color: '#FFFFFF',
    textAlign: 'center',
    flexShrink: 1,
    marginRight: 10,
  },

  regresar: {
    backgroundColor: '#FFFEE4',
    height: 80,
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
    paddingHorizontal: 12,
    paddingTop: 25,
    paddingBottom: 25,
  },

  perfil: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },

  imagenPerfil: {
    width: 103,
    height: 116,
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

  datos: {
    width: '53%',
  },

  textoDato: {
    fontSize: 13,
    color: '#222222',
    lineHeight: 18,
  },

  creditos: {
    marginTop: 12,
    marginLeft: 45,
    alignSelf: 'flex-start',
  },

  textoCreditos: {
    fontSize: 13,
    color: '#222222',
  },

  linea: {
    height: 4,
    width: 85,
    backgroundColor: '#4D315C',
    marginTop: 4,
  },

  historialTitulo: {
    fontSize: 14,
    color: '#222222',
    textAlign: 'center',
    marginTop: 15,
    marginBottom: 10,
  },

  tarjeta: {
    height: 105,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#777777',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 8,
    paddingHorizontal: 10,
  },

  imagenHistorial: {
    width: 90,
    height: 72,
    borderWidth: 1,
    borderColor: '#777777',
    alignItems: 'center',
    justifyContent: 'center',
  },

  opciones: {
    width: '45%',
    gap: 10,
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

  botonesFinales: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
    marginTop: 5,
  },

  botonFinal: {
    flex: 1,
    backgroundColor: '#4D315C',
    borderRadius: 15,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
