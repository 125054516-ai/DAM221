import React from 'react';
import { View, Text, TextInput, Pressable, ScrollView, SafeAreaView, StyleSheet } from 'react-native';

// Segunda pantalla de reportes
export default function Reportes2() {
  const usuarios = [
    { id: '125053572', nombre: 'Diego' },
    { id: '125053573', nombre: 'Bersa' },
    { id: '125053574', nombre: 'Ulises' },
  ];

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.encabezado}>
        <Text style={styles.titulo}>
          Banco de Tiempo{'\n'}y Talento
        </Text>

        <Pressable style={styles.regresar}>
          <Text style={styles.textoRegresar}>Regresar</Text>
        </Pressable>
      </View>

      <ScrollView
        contentContainerStyle={styles.contenido}
        showsVerticalScrollIndicator={false}
      >

        <TextInput
          style={styles.buscar}
          placeholder="Buscar ID..."
          placeholderTextColor="#333333"
        />

        <View style={styles.lista}>
          {usuarios.map((usuario) => (
            <View key={usuario.id} style={styles.tarjeta}>

              <View style={styles.imagen}>
                <Text style={styles.textoImagen}>IMAGEN</Text>
              </View>

              <View style={styles.informacion}>
                <Text style={styles.dato}>ID: {usuario.id}</Text>
                <Text style={styles.dato}>Nombre:</Text>
                <Text style={styles.dato}>{usuario.nombre}</Text>

                <Pressable style={styles.boton}>
                  <Text style={styles.textoBoton}>
                    Perfil usuario
                  </Text>
                </Pressable>
              </View>

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
    height: 80,
    backgroundColor: '#4D315C',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  titulo: {
    flex: 1,
    fontSize: 14,
    color: '#FFFFFF',
    textAlign: 'center',
  },

  regresar: {
    height: 80,
    backgroundColor: '#FFFEE4',
    paddingHorizontal: 20,
    borderTopLeftRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textoRegresar: {
    fontSize: 13,
    color: '#222222',
  },

  contenido: {
    flexGrow: 1,
    paddingHorizontal: 15,
    paddingTop: 20,
    paddingBottom: 30,
  },

  buscar: {
    width: '75%',
    height: 28,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#777777',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 0,
    fontSize: 12,
    alignSelf: 'center',
  },

  lista: {
    marginTop: 45,
    gap: 15,
  },

  tarjeta: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#777777',
    borderRadius: 15,
    minHeight: 125,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 10,
  },

  imagen: {
    width: 70,
    height: 70,
    borderWidth: 1,
    borderColor: '#AAAAAA',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },

  textoImagen: {
    fontSize: 9,
    color: '#AAAAAA',
  },

  informacion: {
    flex: 1,
  },

  dato: {
    fontSize: 13,
    color: '#222222',
    lineHeight: 18,
  },

  boton: {
    backgroundColor: '#4D315C',
    borderRadius: 20,
    paddingVertical: 9,
    alignItems: 'center',
    marginTop: 8,
  },

  textoBoton: {
    fontSize: 12,
    color: '#FFFFFF',
  },
});
