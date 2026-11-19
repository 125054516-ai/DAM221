import React from 'react';
import { View, Text, ScrollView, SafeAreaView, StyleSheet } from 'react-native';

// Datos de ejemplo
const datos = [
  { titulo: 'Usuarios', cantidad: 25, detalle: 'Registrados', icono: '♙' },
  { titulo: 'Servicios', cantidad: 12, detalle: 'Publicados', icono: '▣' },
  { titulo: 'Solicitudes', cantidad: 8, detalle: 'Recibidas', icono: '☷' },
  { titulo: 'Créditos', cantidad: 120, detalle: 'En circulación', icono: '$' }
];

const actividades = [
  { titulo: 'Nueva solicitud', detalle: 'Curso de Programación' },
  { titulo: 'Servicio publicado', detalle: 'Curso de Matemáticas' },
  { titulo: 'Intercambio realizado', detalle: '2 horas intercambiadas' }
];

const categorias = ['Matemáticas', 'Ciencias', 'Programación'];

// Pantalla Dashboard
export default function Dashboard() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        <View style={styles.encabezado}>
          <View>
            <Text style={styles.encabezadoPequeno}>
              PANEL DE ADMINISTRACIÓN
            </Text>
            <Text style={styles.titulo}>Dashboard</Text>
            <Text style={styles.subtitulo}>
              Resumen general de KRONA
            </Text>
          </View>

          <View style={styles.logo}>
            <Text style={styles.logoTexto}>K</Text>
          </View>
        </View>

        <View style={styles.contenido}>

          <Text style={styles.seccion}>Resumen general</Text>

          <View style={styles.cuadricula}>
            {datos.map((dato, index) => (
              <View key={index} style={styles.tarjeta}>
                <View style={styles.tarjetaSuperior}>
                  <Text style={styles.nombre}>{dato.titulo}</Text>
                  <Text style={styles.icono}>{dato.icono}</Text>
                </View>

                <Text style={styles.cantidad}>{dato.cantidad}</Text>
                <Text style={styles.detalle}>{dato.detalle}</Text>
              </View>
            ))}
          </View>

          <Text style={styles.seccion}>Actividad reciente</Text>

          <View style={styles.panel}>
            {actividades.map((actividad, index) => (
              <View key={index} style={styles.actividad}>
                <View style={styles.punto} />

                <View style={styles.actividadTexto}>
                  <Text style={styles.actividadTitulo}>
                    {actividad.titulo}
                  </Text>
                  <Text style={styles.detalle}>
                    {actividad.detalle}
                  </Text>
                </View>
              </View>
            ))}
          </View>

          <Text style={styles.seccion}>Categorías disponibles</Text>

          <View style={styles.panel}>
            <View style={styles.categorias}>
              {categorias.map((categoria, index) => (
                <View key={index} style={styles.categoria}>
                  <Text style={styles.categoriaTexto}>
                    {categoria}
                  </Text>
                </View>
              ))}
            </View>
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
    backgroundColor: '#4D315C',
    paddingHorizontal: 22,
    paddingVertical: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  encabezadoPequeno: {
    fontSize: 10,
    color: '#EADCEB',
    letterSpacing: 1,
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 5,
  },

  subtitulo: {
    fontSize: 12,
    color: '#FFFFFF',
    marginTop: 5,
  },

  logo: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  logoTexto: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#4D315C',
  },

  contenido: {
    padding: 18,
    paddingBottom: 35,
  },

  seccion: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4D315C',
    marginTop: 18,
    marginBottom: 12,
  },

  cuadricula: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: 12,
  },

  tarjeta: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E4D7E6',
    padding: 15,
    elevation: 2,
  },

  tarjetaSuperior: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  nombre: {
    fontSize: 12,
    color: '#4D315C',
    fontWeight: 'bold',
  },

  icono: {
    fontSize: 20,
    color: '#4D315C',
  },

  cantidad: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#4D315C',
    marginTop: 12,
  },

  detalle: {
    fontSize: 11,
    color: '#777777',
    marginTop: 4,
  },

  panel: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E4D7E6',
    padding: 15,
  },

  actividad: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F1EAF3',
  },

  punto: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#4D315C',
    marginRight: 12,
  },

  actividadTexto: {
    flex: 1,
  },

  actividadTitulo: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#4D315C',
  },

  categorias: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },

  categoria: {
    backgroundColor: '#F1EAF3',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },

  categoriaTexto: {
    fontSize: 11,
    color: '#4D315C',
  },

});
