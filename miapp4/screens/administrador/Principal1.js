
import React from 'react';
import { View, Text, ScrollView, SafeAreaView, Pressable, StyleSheet } from 'react-native';

const opciones = [
  {
    id: 1,
    titulo: 'Perfil de usuario',
    descripcion: 'Consulta la información de los usuarios registrados.',
    boton: 'Ver perfiles'
  },
  {
    id: 2,
    titulo: 'Supervisar servicios',
    descripcion: 'Revisa los cursos y servicios publicados.',
    boton: 'Supervisar'
  },
  {
    id: 3,
    titulo: 'Eliminar contenido',
    descripcion: 'Administra los registros y contenidos del sistema.',
    boton: 'Administrar'
  }
];

export default function Principal1() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        <View style={styles.encabezado}>
          <Text style={styles.titulo}>KRONA</Text>
          <Text style={styles.subtitulo}>
            Banco de Tiempo y Talento
          </Text>
        </View>

        <View style={styles.contenido}>

          <View style={styles.bienvenida}>
            <Text style={styles.bienvenidaTitulo}>
              Panel de administrador
            </Text>
            <Text style={styles.bienvenidaTexto}>
              Gestiona los usuarios y servicios de KRONA.
            </Text>
          </View>

          <Text style={styles.seccion}>Administración</Text>

          {opciones.map((opcion) => (
            <View key={opcion.id} style={styles.tarjeta}>

              <Text style={styles.nombre}>
                {opcion.titulo}
              </Text>

              <Text style={styles.descripcion}>
                {opcion.descripcion}
              </Text>

              <Pressable style={styles.boton}>
                <Text style={styles.botonTexto}>
                  {opcion.boton}
                </Text>
              </Pressable>

            </View>
          ))}

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
    fontSize: 27,
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

  bienvenida: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E4D7E6',
    padding: 20,
    elevation: 2,
  },

  bienvenidaTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4D315C',
  },

  bienvenidaTexto: {
    fontSize: 12,
    color: '#777777',
    marginTop: 7,
    lineHeight: 18,
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
    padding: 18,
    marginBottom: 15,
    elevation: 2,
  },

  nombre: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#4D315C',
  },

  descripcion: {
    fontSize: 12,
    color: '#777777',
    marginTop: 8,
    marginBottom: 18,
    lineHeight: 18,
  },

  boton: {
    backgroundColor: '#4D315C',
    borderRadius: 25,
    paddingVertical: 11,
    alignItems: 'center',
  },

  botonTexto: {
    fontSize: 12,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});
