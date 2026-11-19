
import React from 'react';
import { View, Text, ScrollView, SafeAreaView, Pressable, StyleSheet } from 'react-native';

const habilidades = [
  'Java',
  'HTML y CSS',
  'Matemáticas',
  'Bases de datos'
];

export default function Perfil() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        <View style={styles.encabezado}>
          <Text style={styles.titulo}>Tu Perfil</Text>
          <Text style={styles.subtitulo}>
            Información de tu cuenta
          </Text>
        </View>

        <View style={styles.contenido}>

          <View style={styles.tarjetaPerfil}>
            <View style={styles.avatar}>
              <Text style={styles.avatarTexto}>:)</Text>
            </View>

            <Text style={styles.nombre}>Diego</Text>
            <Text style={styles.usuario}>Usuario KRONA</Text>

            <View style={styles.estado}>
            </View>
          </View>

          <View style={styles.estadisticas}>

            <View style={styles.tarjetaEstadistica}>
              <Text style={styles.numero}>54</Text>
              <Text style={styles.detalle}>Créditos</Text>
            </View>

            <View style={styles.tarjetaEstadistica}>
              <Text style={styles.numero}>4</Text>
              <Text style={styles.detalle}>Cursos</Text>
            </View>

            <View style={styles.tarjetaEstadistica}>
              <Text style={styles.numero}>5.0</Text>
              <Text style={styles.detalle}>Calificación</Text>
            </View>

          </View>

          <Text style={styles.seccion}>Mis habilidades</Text>

          <View style={styles.panel}>
            <Text style={styles.descripcion}>
              Conocimientos que puedo compartir
            </Text>

            <View style={styles.listaHabilidades}>
              {habilidades.map((habilidad, index) => (
                <View key={index} style={styles.habilidad}>
                  <Text style={styles.habilidadTexto}>
                    {habilidad}
                  </Text>
                </View>
              ))}
            </View>

            <Pressable style={styles.botonAgregar}>
              <Text style={styles.textoAgregar}>
                + Agregar habilidad
              </Text>
            </Pressable>
          </View>

          <Text style={styles.seccion}>Mi cuenta</Text>

          <View style={styles.panel}>

            <Pressable style={styles.opcion}>
              <Text style={styles.opcionTexto}>
                Editar datos
              </Text>
              <Text style={styles.flecha}>›</Text>
            </Pressable>

            <View style={styles.linea} />

            <Pressable style={styles.opcion}>
              <Text style={styles.opcionTexto}>
                Ver historial
              </Text>
              <Text style={styles.flecha}>›</Text>
            </Pressable>

            <View style={styles.linea} />

            <Pressable style={styles.opcion}>
              <Text style={styles.opcionTexto}>
                Ajustes
              </Text>
              <Text style={styles.flecha}>›</Text>
            </Pressable>

          </View>

          <Pressable style={styles.botonCerrar}>
            <Text style={styles.textoCerrar}>
              Cerrar sesión
            </Text>
          </Pressable>

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
    fontSize: 26,
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

  avatar: {
    width: 75,
    height: 75,
    borderRadius: 40,
    backgroundColor: '#F0E5F1',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },

  avatarTexto: {
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

  estadisticas: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 18,
  },

  tarjetaEstadistica: {
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

  seccion: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4D315C',
    marginTop: 24,
    marginBottom: 13,
  },

  panel: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E4D7E6',
    padding: 17,
    elevation: 2,
  },

  descripcion: {
    fontSize: 12,
    color: '#777777',
    marginBottom: 15,
  },

  listaHabilidades: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 9,
  },

  habilidad: {
    backgroundColor: '#F0E5F1',
    borderRadius: 20,
    paddingHorizontal: 13,
    paddingVertical: 9,
  },

  habilidadTexto: {
    fontSize: 12,
    color: '#4D315C',
    fontWeight: 'bold',
  },

  botonAgregar: {
    borderWidth: 1,
    borderColor: '#4D315C',
    borderRadius: 25,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 20,
  },

  textoAgregar: {
    fontSize: 12,
    color: '#4D315C',
    fontWeight: 'bold',
  },

  opcion: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
  },

  opcionTexto: {
    fontSize: 13,
    color: '#4D315C',
    fontWeight: 'bold',
  },

  flecha: {
    fontSize: 22,
    color: '#4D315C',
  },

  linea: {
    height: 1,
    backgroundColor: '#F0E5F1',
  },

  botonCerrar: {
    backgroundColor: '#4D315C',
    borderRadius: 25,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 25,
  },

  textoCerrar: {
    fontSize: 12,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});
