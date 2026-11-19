
import React from 'react';
import { View, Text, ScrollView, SafeAreaView, Pressable, StyleSheet } from 'react-native';

const usuarios = [
  { id: 1, nombre: 'Diego', creditos: 54 },
  { id: 2, nombre: 'Bersa', creditos: 80 },
  { id: 3, nombre: 'Ulises', creditos: 100 }
];

export default function Principal2() {
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.encabezado}>
        <Text style={styles.titulo}>KRONA</Text>
        <Text style={styles.subtitulo}>
          Panel de administración
        </Text>
      </View>

      <View style={styles.principal}>

        <View style={styles.lateral}>
          <Text style={styles.menuTitulo}>MENÚ</Text>

          <Pressable style={styles.opcion}>
            <Text style={styles.opcionTexto}>
              Editar usuario
            </Text>
          </Pressable>

          <Text style={styles.categoriaTitulo}>
            Categorías
          </Text>

          <Pressable style={styles.opcion}>
            <Text style={styles.opcionTexto}>
              Matemáticas
            </Text>
          </Pressable>

          <Pressable style={styles.opcion}>
            <Text style={styles.opcionTexto}>
              Ciencias
            </Text>
          </Pressable>

          <Pressable style={styles.opcion}>
            <Text style={styles.opcionTexto}>
              Programación
            </Text>
          </Pressable>

          <View style={styles.lineaMenu} />

          <Pressable style={styles.opcion}>
            <Text style={styles.opcionTexto}>
              Reportes
            </Text>
          </Pressable>
        </View>

        <ScrollView
          style={styles.contenido}
          showsVerticalScrollIndicator={false}
        >

          <Text style={styles.seccion}>
            Usuarios registrados
          </Text>

          <View style={styles.resumen}>
            <Text style={styles.resumenTexto}>
              Total de usuarios
            </Text>
            <Text style={styles.resumenNumero}>
              {usuarios.length}
            </Text>
          </View>

          <Text style={styles.seccion}>
            Lista de usuarios
          </Text>

          {usuarios.map((usuario) => (
            <View key={usuario.id} style={styles.tarjeta}>

              <Text style={styles.nombre}>
                {usuario.nombre}
              </Text>

              <Text style={styles.estado}>
                Cuenta activa
              </Text>

              <View style={styles.linea} />

              <Text style={styles.detalle}>
                Créditos: {usuario.creditos} hrs
              </Text>

              <Text style={styles.detalle}>
                ID: #{usuario.id}
              </Text>

              <Pressable style={styles.boton}>
                <Text style={styles.botonTexto}>
                  Ver perfil
                </Text>
              </Pressable>

            </View>
          ))}

        </ScrollView>
      </View>

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
    padding: 22,
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

  principal: {
    flex: 1,
    flexDirection: 'row',
  },

  lateral: {
    width: 115,
    backgroundColor: '#F0E5F1',
    padding: 10,
    borderRightWidth: 1,
    borderRightColor: '#E4D7E6',
  },

  menuTitulo: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#4D315C',
    marginBottom: 20,
    marginTop: 12,
  },

  categoriaTitulo: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#4D315C',
    marginTop: 20,
    marginBottom: 10,
  },

  opcion: {
    paddingVertical: 12,
    paddingHorizontal: 5,
    borderRadius: 8,
  },

  opcionTexto: {
    fontSize: 11,
    color: '#4D315C',
    fontWeight: 'bold',
  },

  lineaMenu: {
    height: 1,
    backgroundColor: '#D8C6DB',
    marginVertical: 15,
  },

  contenido: {
    flex: 1,
    padding: 12,
  },

  seccion: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#4D315C',
    marginBottom: 13,
    marginTop: 10,
  },

  resumen: {
    backgroundColor: '#FFFFFF',
    borderRadius: 13,
    borderWidth: 1,
    borderColor: '#E4D7E6',
    padding: 15,
    marginBottom: 15,
  },

  resumenTexto: {
    fontSize: 11,
    color: '#777777',
  },

  resumenNumero: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#4D315C',
    marginTop: 5,
  },

  tarjeta: {
    backgroundColor: '#FFFFFF',
    borderRadius: 13,
    borderWidth: 1,
    borderColor: '#E4D7E6',
    padding: 13,
    marginBottom: 13,
    elevation: 2,
  },

  nombre: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#4D315C',
  },

  estado: {
    fontSize: 11,
    color: '#777777',
    marginTop: 5,
  },

  linea: {
    height: 1,
    backgroundColor: '#F0E5F1',
    marginVertical: 12,
  },

  detalle: {
    fontSize: 11,
    color: '#555555',
    marginBottom: 7,
  },

  boton: {
    backgroundColor: '#4D315C',
    borderRadius: 20,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 10,
  },

  botonTexto: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});
