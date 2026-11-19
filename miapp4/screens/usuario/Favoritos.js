import React from 'react';
import { View, Text, Pressable, ScrollView, SafeAreaView, StyleSheet } from 'react-native';

// Cursos favoritos
const favoritos = [
  { id: 1, nombre: 'Curso de Cálculo', categoria: 'Matemáticas', duracion: '2 horas', letra: 'M' },
  { id: 2, nombre: 'Curso de Física', categoria: 'Ciencias', duracion: '1.5 horas', letra: 'C' },
  { id: 3, nombre: 'Curso de Java', categoria: 'Programación', duracion: '3 horas', letra: 'P' }
];

// Pantalla Favoritos
export default function Favoritos() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        <View style={styles.encabezado}>
          <View style={styles.encabezadoTexto}>
            <Text style={styles.encabezadoPequeno}>
              KRONA - BANCO DE TIEMPO
            </Text>
            <Text style={styles.titulo}>Mis favoritos</Text>
            <Text style={styles.subtitulo}>Tus cursos guardados</Text>
          </View>

          <View style={styles.corazonGrande}>
            <Text style={styles.corazonTexto}>♥</Text>
          </View>
        </View>

        <View style={styles.contenido}>

          <View style={styles.seccion}>
            <Text style={styles.seccionTitulo}>
              Servicios favoritos
            </Text>

            <View style={styles.contador}>
              <Text style={styles.contadorTexto}>
                {favoritos.length} guardados
              </Text>
            </View>
          </View>

          {favoritos.map((curso) => (
            <View key={curso.id} style={styles.tarjeta}>

              <View style={styles.fila}>
                <View style={styles.imagen}>
                  <Text style={styles.letra}>{curso.letra}</Text>
                </View>

                <View style={styles.informacion}>
                  <Text style={styles.nombre}>{curso.nombre}</Text>
                  <Text style={styles.detalle}>{curso.categoria}</Text>
                  <Text style={styles.detalle}>{curso.duracion}</Text>
                </View>

                <Text style={styles.corazon}>♥</Text>
              </View>

              <Pressable style={styles.boton}>
                <Text style={styles.textoBoton}>Ver servicio</Text>
              </Pressable>

            </View>
          ))}

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

  encabezadoTexto: {
    flex: 1,
  },

  encabezadoPequeno: {
    fontSize: 10,
    color: '#EADCEB',
    letterSpacing: 1,
  },

  titulo: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 6,
  },

  subtitulo: {
    fontSize: 12,
    color: '#FFFFFF',
    marginTop: 5,
  },

  corazonGrande: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },

  corazonTexto: {
    fontSize: 28,
    color: '#4D315C',
  },

  contenido: {
    padding: 18,
    paddingBottom: 35,
  },

  seccion: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 18,
  },

  seccionTitulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4D315C',
  },

  contador: {
    backgroundColor: '#F0E5F1',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },

  contadorTexto: {
    fontSize: 10,
    color: '#4D315C',
  },

  tarjeta: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E4D7E6',
    padding: 15,
    marginBottom: 15,
    elevation: 2,
  },

  fila: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },

  imagen: {
    width: 65,
    height: 65,
    borderRadius: 12,
    backgroundColor: '#F0E5F1',
    justifyContent: 'center',
    alignItems: 'center',
  },

  letra: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#4D315C',
  },

  informacion: {
    flex: 1,
    marginLeft: 12,
  },

  nombre: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#4D315C',
  },

  detalle: {
    fontSize: 11,
    color: '#777777',
    marginTop: 5,
  },

  corazon: {
    fontSize: 24,
    color: '#4D315C',
    alignSelf: 'flex-start',
  },

  boton: {
    backgroundColor: '#4D315C',
    borderRadius: 25,
    paddingVertical: 10,
    alignItems: 'center',
  },

  textoBoton: {
    fontSize: 12,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },

  nota: {
    fontSize: 10,
    color: '#777777',
    textAlign: 'center',
    marginTop: 15,
  },
});
