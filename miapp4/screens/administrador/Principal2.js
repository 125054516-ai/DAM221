import React from 'react';
import { View, Text, Pressable, ScrollView, SafeAreaView, StyleSheet } from 'react-native';

// Segunda pantalla principal del administrador
export default function Principal2() {
  const usuarios = [1, 2, 3];

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.encabezado}>
        <View style={styles.logo}>
          <Text style={styles.textoLogo}>KRONA</Text>
        </View>

        <Text style={styles.titulo}>
          Banco de Tiempo{'\n'}y Talento
        </Text>
      </View>

      <View style={styles.cuerpo}>

        <View style={styles.menuLateral}>
          <View style={styles.opcion}>
            <Text style={styles.textoMenu}>Editar usuario</Text>
          </View>

          <View style={styles.categorias}>
            <Text style={styles.textoMenu}>
              Categoria{'\n'}
              O MATE{'\n'}
              O CIENCIA{'\n'}
              O PROGRA
            </Text>
          </View>

          <View style={styles.opcion}>
            <Text style={styles.textoMenu}>Reporte</Text>
          </View>

          <View style={styles.espacioMenu} />
        </View>

        <ScrollView
          style={styles.areaUsuarios}
          contentContainerStyle={styles.lista}
          showsVerticalScrollIndicator={false}
        >

          {usuarios.map((usuario) => (
            <View key={usuario} style={styles.tarjeta}>

              <View style={styles.imagen}>
                <Text style={styles.textoImagen}>IMAGEN</Text>
              </View>

              <View style={styles.botones}>
                <Pressable style={styles.boton}>
                  <Text style={styles.textoBoton}>Perfil usuario</Text>
                </Pressable>

                <Pressable style={styles.boton}>
                  <Text style={styles.textoBoton}>Supervisar</Text>
                </Pressable>

                <Pressable style={styles.boton}>
                  <Text style={styles.textoBoton}>Eliminar</Text>
                </Pressable>
              </View>

            </View>
          ))}

        </ScrollView>

      </View>
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
    height: 83,
    backgroundColor: '#4D315C',
    flexDirection: 'row',
    alignItems: 'center',
  },

  logo: {
    width: '37%',
    height: '100%',
    backgroundColor: '#FFFEE4',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#8B728E',
  },

  textoLogo: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#4D315C',
  },

  titulo: {
    flex: 1,
    fontSize: 14,
    color: '#FFFFFF',
    textAlign: 'center',
  },

  cuerpo: {
    flex: 1,
    flexDirection: 'row',
  },

  menuLateral: {
    width: '37%',
    backgroundColor: '#FFFEE4',
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#8B728E',
  },

  opcion: {
    height: 52,
    borderBottomWidth: 1,
    borderColor: '#8B728E',
    justifyContent: 'center',
    paddingHorizontal: 5,
  },

  categorias: {
    height: 120,
    borderBottomWidth: 1,
    borderColor: '#8B728E',
    justifyContent: 'center',
    paddingHorizontal: 5,
  },

  textoMenu: {
    fontSize: 12,
    color: '#222222',
  },

  espacioMenu: {
    flex: 1,
  },

  areaUsuarios: {
    flex: 1,
  },

  lista: {
    paddingHorizontal: 10,
    paddingTop: 12,
    paddingBottom: 30,
  },

  tarjeta: {
    height: 138,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#555555',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    marginBottom: 15,
  },

  imagen: {
    width: '34%',
    height: 73,
    borderWidth: 1,
    borderColor: '#777777',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textoImagen: {
    fontSize: 8,
    color: '#AAAAAA',
  },

  botones: {
    width: '62%',
    gap: 6,
  },

  boton: {
    backgroundColor: '#4D315C',
    borderRadius: 18,
    paddingVertical: 10,
    alignItems: 'center',
  },

  textoBoton: {
    fontSize: 10,
    color: '#FFFFFF',
    textAlign: 'center',
  },
});
