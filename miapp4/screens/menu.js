import React from 'react';
import { View, Text, Pressable, ScrollView, SafeAreaView, StyleSheet } from 'react-native';

// Interfaces de usuario
const usuario = [
  ['Iniciar sesión', 'Login'],
  ['Registro', 'Registro'],
  ['Home', 'Home'],
  ['Perfil', 'Perfil'],
  ['Solicitar servicio', 'SolicitarServicio'],
  ['Publicar servicio', 'PublicarServicio'],
  ['Cursos', 'Cursos'],
  ['Recompensas', 'Recompensas']
];

// Interfaces de administrador
const administrador = [
  ['Principal 1', 'Principal1'],
  ['Principal 2', 'Principal2'],
  ['Perfiles de usuario', 'PerfilesUsuario'],
  ['Categorías', 'Categorias'],
  ['Reportes 1', 'Reportes1'],
  ['Reportes 2', 'Reportes2'],
  ['Supervisar', 'Supervisar']
];

// Menú principal
export default function MenuScreen({ onSeleccionar }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.contenido}>

        <View style={styles.encabezado}>
          <Text style={styles.titulo}>KRONA</Text>
          <Text style={styles.subtitulo}>BANCO DE TIEMPO Y TALENTO</Text>
          <Text style={styles.menuTitulo}>MENÚ PRINCIPAL</Text>
        </View>

        <View style={styles.seccion}>
          <Text style={styles.tituloSeccion}>USUARIO</Text>

          <View style={styles.cuadricula}>
            {usuario.map(([nombre, id]) => (
              <Pressable
                key={id}
                style={styles.tarjeta}
                onPress={() => onSeleccionar(id)}
              >
                <Text style={styles.nombre}>{nombre}</Text>
              </Pressable>
            ))}
          </View>
        </View>

        <View style={styles.seccion}>
          <Text style={styles.tituloSeccion}>ADMINISTRADOR</Text>

          <View style={styles.cuadricula}>
            {administrador.map(([nombre, id]) => (
              <Pressable
                key={id}
                style={styles.tarjeta}
                onPress={() => onSeleccionar(id)}
              >
                <Text style={styles.nombre}>{nombre}</Text>
              </Pressable>
            ))}
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

  contenido: {
    flexGrow: 1,
    paddingBottom: 25,
  },

  encabezado: {
    backgroundColor: '#4D315C',
    paddingTop: 45,
    paddingBottom: 35,
    alignItems: 'center',
  },

  titulo: {
    fontSize: 38,
    fontWeight: 'bold',
    color: '#FFFFFF',
    letterSpacing: 3,
  },

  subtitulo: {
    fontSize: 11,
    color: '#FFFFFF',
    marginTop: 5,
    letterSpacing: 1,
  },

  menuTitulo: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#FFFEE4',
    marginTop: 30,
  },

  seccion: {
    marginTop: 30,
    paddingHorizontal: 20,
  },

  tituloSeccion: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#4D315C',
    marginBottom: 15,
    alignSelf: 'center',
  },

  cuadricula: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  tarjeta: {
    width: '48%',
    height: 55,
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#4D315C',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    paddingHorizontal: 5,
  },

  nombre: {
    fontSize: 13,
    color: '#4D315C',
    fontWeight: '500',
    textAlign: 'center',
  },

});
