import React from 'react';
import { View, Text, Pressable, ScrollView, SafeAreaView, StyleSheet } from 'react-native';

// Cursos de ejemplo
const cursos = [
  { id: '1', nombre: 'Curso de cálculo', simbolo: '▭' },
  { id: '2', nombre: 'Curso de aplicaciones web', simbolo: '▣' },
  { id: '3', nombre: 'Curso de aplicaciones móviles', simbolo: 'ϟ' },
  { id: '4', nombre: 'Curso de Base de datos', simbolo: '☑' }
];

// Pantalla principal
export default function Home() {
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.encabezado}>
        <View style={styles.avatar}>
          <Text style={styles.avatarTexto}>♙</Text>
        </View>

        <View style={styles.creditos}>
          <Text style={styles.textoCreditos}>$$$</Text>
        </View>

        <View style={styles.botonesEncabezado}>
          <Pressable style={styles.favoritos}>
            <Text style={styles.textoFavoritos}>♡</Text>
          </Pressable>

          <Pressable style={styles.agregar}>
            <Text style={styles.textoAgregar}>+</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.cuerpo}>

        <View style={styles.menuLateral}>
          <View style={styles.opcion}>
            <View style={styles.circulo}>
              <Text style={styles.icono}>⌂</Text>
            </View>
            <Text style={styles.textoMenu}>Principal</Text>
          </View>

          <View style={styles.opcion}>
            <View style={styles.circulo}>
              <Text style={styles.icono}>▣</Text>
            </View>
            <Text style={styles.textoMenu}>Servicio</Text>
          </View>

          <View style={styles.opcion}>
            <View style={styles.circulo}>
              <Text style={styles.icono}>↺</Text>
            </View>
            <Text style={styles.textoMenu}>Historial</Text>
          </View>

          <View style={styles.opcion}>
            <View style={styles.circulo}>
              <Text style={styles.icono}>♙</Text>
            </View>
            <Text style={styles.textoMenu}>Perfil</Text>
          </View>
        </View>

        <View style={styles.principal}>
          <ScrollView
            contentContainerStyle={styles.contenido}
            showsVerticalScrollIndicator={false}
          >

            <View style={styles.cuadricula}>
              {cursos.map((curso) => (
                <View key={curso.id} style={styles.curso}>
                  <View style={styles.imagenCurso}>
                    <Text style={styles.simbolo}>{curso.simbolo}</Text>
                  </View>

                  <Text style={styles.nombreCurso}>
                    {curso.nombre}
                  </Text>
                </View>
              ))}
            </View>

            <View style={styles.botones}>
              <Pressable style={styles.boton}>
                <Text style={styles.textoBoton}>Aceptar</Text>
              </Pressable>

              <Pressable style={styles.boton}>
                <Text style={styles.textoBoton}>Rechazar</Text>
              </Pressable>
            </View>

          </ScrollView>
        </View>
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
    height: 65,
    backgroundColor: '#4D315C',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },

  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  avatarTexto: {
    fontSize: 28,
    color: '#222222',
  },

  creditos: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 3,
    marginLeft: 20,
  },

  textoCreditos: {
    fontSize: 11,
    color: '#222222',
  },

  botonesEncabezado: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 'auto',
    gap: 8,
  },

  favoritos: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  textoFavoritos: {
    fontSize: 25,
    color: '#4D315C',
  },

  agregar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  textoAgregar: {
    fontSize: 22,
    color: '#222222',
  },

  cuerpo: {
    flex: 1,
    flexDirection: 'row',
  },

  menuLateral: {
    width: '28%',
    borderRightWidth: 1,
    borderRightColor: '#4D315C',
    justifyContent: 'space-around',
    paddingHorizontal: 4,
  },

  opcion: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  circulo: {
    width: 25,
    height: 25,
    borderRadius: 13,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#4D315C',
    justifyContent: 'center',
    alignItems: 'center',
  },

  icono: {
    fontSize: 17,
    color: '#222222',
  },

  textoMenu: {
    fontSize: 9,
    color: '#222222',
    marginLeft: 3,
    flexShrink: 1,
  },

  principal: {
    flex: 1,
  },

  contenido: {
    flexGrow: 1,
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 8,
  },

  cuadricula: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: 55,
  },

  curso: {
    width: '47%',
  },

  imagenCurso: {
    height: 85,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#8B728E',
    justifyContent: 'center',
    alignItems: 'center',
  },

  simbolo: {
    fontSize: 34,
    color: '#222222',
  },

  nombreCurso: {
    fontSize: 9,
    color: '#222222',
    marginTop: 6,
    lineHeight: 12,
  },

  botones: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 35,
    marginBottom: 10,
  },

  boton: {
    backgroundColor: '#4D315C',
    borderRadius: 25,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },

  textoBoton: {
    color: '#FFFFFF',
    fontSize: 11,
  },
});
