
import React from 'react';
import { View, Text, ScrollView, SafeAreaView, Pressable, StyleSheet } from 'react-native';

export default function Supervisar() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        <View style={styles.encabezado}>
          <Text style={styles.titulo}>Supervisar servicios</Text>
          <Text style={styles.subtitulo}>
            Administración de cursos KRONA
          </Text>
        </View>

        <View style={styles.contenido}>

          <View style={styles.tarjetaCurso}>
            <View style={styles.filaSuperior}>
              <Text style={styles.nombreCurso}>Curso de HTML</Text>

              <View style={styles.estado}>
                <Text style={styles.estadoTexto}>Activo</Text>
              </View>
            </View>

            <Text style={styles.descripcionCorta}>
              Desarrollo de páginas web
            </Text>

            <View style={styles.linea} />

            <Text style={styles.seccionInterna}>
              Información del servicio
            </Text>

            <View style={styles.fila}>
              <Text style={styles.etiqueta}>Duración</Text>
              <Text style={styles.valor}>6 días</Text>
            </View>

            <View style={styles.fila}>
              <Text style={styles.etiqueta}>Categoría</Text>
              <Text style={styles.valor}>Programación</Text>
            </View>

            <View style={styles.fila}>
              <Text style={styles.etiqueta}>Costo por hora</Text>
              <Text style={styles.valor}>25 créditos</Text>
            </View>

            <View style={styles.linea} />

            <Text style={styles.seccionInterna}>
              Información del impartidor
            </Text>

            <View style={styles.fila}>
              <Text style={styles.etiqueta}>Nombre</Text>
              <Text style={styles.valor}>Diego</Text>
            </View>

            <View style={styles.fila}>
              <Text style={styles.etiqueta}>ID impartidor</Text>
              <Text style={styles.valor}>125053572</Text>
            </View>

            <View style={styles.fila}>
              <Text style={styles.etiqueta}>Contacto</Text>
              <Text style={styles.valor}>diego@krona.com</Text>
            </View>
          </View>

          <Text style={styles.seccion}>Descripción del curso</Text>

          <View style={styles.panel}>
            <Text style={styles.descripcion}>
              Curso básico de HTML donde aprenderás a crear
              páginas web, utilizar etiquetas y organizar
              contenido para desarrollar sitios sencillos.
            </Text>
          </View>

          <Text style={styles.seccion}>Administración</Text>

          <View style={styles.panel}>
            <Text style={styles.administracionTexto}>
              Revisa la información del servicio antes de
              realizar cambios en su publicación.
            </Text>

            <Pressable style={styles.botonEditar}>
              <Text style={styles.textoEditar}>
                Editar servicio
              </Text>
            </Pressable>

            <Pressable style={styles.botonEliminar}>
              <Text style={styles.textoEliminar}>
                Eliminar curso
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

  tarjetaCurso: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E4D7E6',
    padding: 18,
    elevation: 2,
  },

  filaSuperior: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  nombreCurso: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#4D315C',
    flex: 1,
  },

  estado: {
    backgroundColor: '#F0E5F1',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },

  estadoTexto: {
    fontSize: 11,
    color: '#4D315C',
  },

  descripcionCorta: {
    fontSize: 12,
    color: '#777777',
    marginTop: 7,
  },

  linea: {
    height: 1,
    backgroundColor: '#F0E5F1',
    marginVertical: 17,
  },

  seccionInterna: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#4D315C',
    marginBottom: 10,
  },

  fila: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 9,
  },

  etiqueta: {
    fontSize: 12,
    color: '#777777',
  },

  valor: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#4D315C',
    textAlign: 'right',
    flexShrink: 1,
  },

  seccion: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4D315C',
    marginTop: 23,
    marginBottom: 12,
  },

  panel: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E4D7E6',
    padding: 18,
    elevation: 2,
  },

  descripcion: {
    fontSize: 12,
    color: '#555555',
    lineHeight: 20,
  },

  administracionTexto: {
    fontSize: 12,
    color: '#777777',
    lineHeight: 19,
    marginBottom: 18,
  },

  botonEditar: {
    backgroundColor: '#4D315C',
    borderRadius: 25,
    paddingVertical: 12,
    alignItems: 'center',
    marginBottom: 10,
  },

  textoEditar: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },

  botonEliminar: {
    backgroundColor: '#F0E5F1',
    borderRadius: 25,
    paddingVertical: 12,
    alignItems: 'center',
  },

  textoEliminar: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#4D315C',
  },
});
