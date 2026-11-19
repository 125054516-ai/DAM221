
import React from 'react';
import { View, Text, ScrollView, SafeAreaView, Pressable, StyleSheet } from 'react-native';

export default function PerfilesUsuario() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        <View style={styles.encabezado}>
          <Text style={styles.titulo}>Perfil de usuario</Text>
          <Text style={styles.subtitulo}>
            Administración de usuarios KRONA
          </Text>
        </View>

        <View style={styles.contenido}>

          <View style={styles.tarjetaPerfil}>
            <View style={styles.foto}>
              <Text style={styles.fotoTexto}></Text>
            </View>

            <Text style={styles.nombre}>
              Ulises Tonatiuh
            </Text>

            <Text style={styles.usuario}>
              Usuario registrado
            </Text>

            <View style={styles.estado}>
              <Text style={styles.estadoTexto}>
                Cuenta activa
              </Text>
            </View>
          </View>

          <Text style={styles.seccion}>Información personal</Text>

          <View style={styles.panel}>
            <View style={styles.fila}>
              <Text style={styles.etiqueta}>ID de usuario</Text>
              <Text style={styles.valor}>125053572</Text>
            </View>

            <View style={styles.linea} />

            <View style={styles.fila}>
              <Text style={styles.etiqueta}>Nombre</Text>
              <Text style={styles.valor}>Ulises Tonatiuh</Text>
            </View>

            <View style={styles.linea} />

            <View style={styles.fila}>
              <Text style={styles.etiqueta}>Edad</Text>
              <Text style={styles.valor}>19 años</Text>
            </View>

            <View style={styles.linea} />

            <View style={styles.fila}>
              <Text style={styles.etiqueta}>Contacto</Text>
              <Text style={styles.valor}>ulises@krona.com</Text>
            </View>
          </View>

          <Text style={styles.seccion}>Actividad del usuario</Text>

          <View style={styles.estadisticas}>
            <View style={styles.tarjeta}>
              <Text style={styles.numero}>100</Text>
              <Text style={styles.detalle}>Créditos</Text>
            </View>

            <View style={styles.tarjeta}>
              <Text style={styles.numero}>4</Text>
              <Text style={styles.detalle}>Cursos</Text>
            </View>

            <View style={styles.tarjeta}>
              <Text style={styles.numero}>5.0</Text>
              <Text style={styles.detalle}>Calificación</Text>
            </View>
          </View>

          <Text style={styles.seccion}>Historial reciente</Text>

          <View style={styles.panel}>
            <View style={styles.historial}>
              <Text style={styles.historialTitulo}>
                Curso de Programación
              </Text>
              <Text style={styles.historialDetalle}>
                Servicio completado
              </Text>
            </View>

            <View style={styles.linea} />

            <View style={styles.historial}>
              <Text style={styles.historialTitulo}>
                Curso de Matemáticas
              </Text>
              <Text style={styles.historialDetalle}>
                Solicitud realizada
              </Text>
            </View>
          </View>

          <View style={styles.botones}>
            <Pressable style={styles.botonEliminar}>
              <Text style={styles.textoEliminar}>
                Eliminar cuenta
              </Text>
            </Pressable>

            <Pressable style={styles.botonBloquear}>
              <Text style={styles.textoBloquear}>
                Bloquear cuenta
              </Text>
            </Pressable>
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
    paddingBottom: 30,
  },

  tarjetaPerfil: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#E4D7E6',
    padding: 20,
    alignItems: 'center',
    elevation: 2,
  },

  foto: {
    width: 75,
    height: 75,
    borderRadius: 40,
    backgroundColor: '#F0E5F1',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },

  fotoTexto: {
    fontSize: 40,
    color: '#4D315C',
  },

  nombre: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#4D315C',
  },

  usuario: {
    fontSize: 12,
    color: '#777777',
    marginTop: 5,
  },

  estado: {
    backgroundColor: '#F0E5F1',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 6,
    marginTop: 12,
  },

  estadoTexto: {
    fontSize: 11,
    color: '#4D315C',
  },

  seccion: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4D315C',
    marginTop: 22,
    marginBottom: 12,
  },

  panel: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E4D7E6',
    padding: 16,
  },

  fila: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },

  etiqueta: {
    fontSize: 12,
    color: '#777777',
  },

  valor: {
    fontSize: 12,
    color: '#4D315C',
    fontWeight: 'bold',
    textAlign: 'right',
    flexShrink: 1,
  },

  linea: {
    height: 1,
    backgroundColor: '#F0E5F1',
  },

  estadisticas: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  tarjeta: {
    width: '31%',
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#E4D7E6',
    paddingVertical: 18,
    alignItems: 'center',
    elevation: 2,
  },

  numero: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#4D315C',
  },

  detalle: {
    fontSize: 11,
    color: '#777777',
    marginTop: 5,
  },

  historial: {
    paddingVertical: 10,
  },

  historialTitulo: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#4D315C',
  },

  historialDetalle: {
    fontSize: 11,
    color: '#777777',
    marginTop: 5,
  },

  botones: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 25,
  },

  botonEliminar: {
    flex: 1,
    backgroundColor: '#4D315C',
    borderRadius: 25,
    paddingVertical: 13,
    alignItems: 'center',
  },

  textoEliminar: {
    fontSize: 12,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },

  botonBloquear: {
    flex: 1,
    backgroundColor: '#F0E5F1',
    borderRadius: 25,
    paddingVertical: 13,
    alignItems: 'center',
  },

  textoBloquear: {
    fontSize: 12,
    color: '#4D315C',
    fontWeight: 'bold',
  },
});
