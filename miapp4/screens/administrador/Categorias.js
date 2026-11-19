
import React from 'react';
import { View, Text, ScrollView, SafeAreaView, Pressable, StyleSheet } from 'react-native';

const categorias = [
  {
    id: 1,
    nombre: 'Matemáticas',
    descripcion: 'Cálculo, álgebra y asesorías.',
    cursos: 4,
    letra: 'M'
  },
  {
    id: 2,
    nombre: 'Ciencias',
    descripcion: 'Física, química y ciencias.',
    cursos: 3,
    letra: 'C'
  },
  {
    id: 3,
    nombre: 'Programación',
    descripcion: 'Java, HTML y aplicaciones.',
    cursos: 5,
    letra: 'P'
  }
];

export default function Categorias() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        <View style={styles.encabezado}>
          <Text style={styles.titulo}>Categorías</Text>
          <Text style={styles.subtitulo}>
            Administración de categorías
          </Text>
        </View>

        <View style={styles.contenido}>

          <View style={styles.resumen}>
            <View>
              <Text style={styles.resumenTitulo}>
                Categorías disponibles
              </Text>
              <Text style={styles.resumenTexto}>
                Organiza los cursos de KRONA
              </Text>
            </View>

            <View style={styles.contador}>
              <Text style={styles.contadorTexto}>3</Text>
            </View>
          </View>

          <Text style={styles.seccion}>Lista de categorías</Text>

          {categorias.map((categoria) => (
            <View key={categoria.id} style={styles.tarjeta}>

          <View style={styles.fila}>
  <View style={styles.informacion}>
    <Text style={styles.nombre}>
      {categoria.nombre}
    </Text>

    <Text style={styles.descripcion}>
      {categoria.descripcion}
    </Text>

    <Text style={styles.cursos}>
      {categoria.cursos} cursos disponibles
    </Text>
  </View>
</View>
              <View style={styles.botones}>
                <Pressable style={styles.botonEditar}>
                  <Text style={styles.textoEditar}>Editar</Text>
                </Pressable>

                <Pressable style={styles.botonEliminar}>
                  <Text style={styles.textoEliminar}>Eliminar</Text>
                </Pressable>
              </View>

            </View>
          ))}

          <Pressable style={styles.botonAgregar}>
            <Text style={styles.textoAgregar}>
              + Agregar categoría
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

  resumen: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E4D7E6',
    padding: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 2,
  },

  resumenTitulo: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#4D315C',
  },

  resumenTexto: {
    fontSize: 11,
    color: '#777777',
    marginTop: 5,
  },

  contador: {
    width: 45,
    height: 45,
    borderRadius: 23,
    backgroundColor: '#F0E5F1',
    justifyContent: 'center',
    alignItems: 'center',
  },

  contadorTexto: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#4D315C',
  },

  seccion: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4D315C',
    marginTop: 25,
    marginBottom: 15,
  },

  tarjeta: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E4D7E6',
    padding: 16,
    marginBottom: 15,
    elevation: 2,
  },

  fila: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  icono: {
    width: 55,
    height: 55,
    borderRadius: 12,
    backgroundColor: '#F0E5F1',
    justifyContent: 'center',
    alignItems: 'center',
  },

  informacion: {
    flex: 1,
    marginLeft: 13,
  },

  nombre: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#4D315C',
  },

  descripcion: {
    fontSize: 11,
    color: '#777777',
    marginTop: 5,
  },

  cursos: {
    fontSize: 11,
    color: '#4D315C',
    marginTop: 7,
    fontWeight: 'bold',
  },

  botones: {
    flexDirection: 'row',
    marginTop: 18,
    gap: 10,
  },

  botonEditar: {
    flex: 1,
    backgroundColor: '#4D315C',
    borderRadius: 20,
    paddingVertical: 10,
    alignItems: 'center',
  },

  textoEditar: {
    fontSize: 12,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },

  botonEliminar: {
    flex: 1,
    backgroundColor: '#F0E5F1',
    borderRadius: 20,
    paddingVertical: 10,
    alignItems: 'center',
  },

  textoEliminar: {
    fontSize: 12,
    color: '#4D315C',
    fontWeight: 'bold',
  },

  botonAgregar: {
    backgroundColor: '#4D315C',
    borderRadius: 25,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 10,
  },

  textoAgregar: {
    fontSize: 13,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});
