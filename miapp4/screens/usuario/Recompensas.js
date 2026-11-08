import React from 'react';
import { View, Text, Pressable, ScrollView, SafeAreaView, StyleSheet } from 'react-native';

export default function Recompensas() {
  const ganados = 12;
  const utilizados = 4;
  const saldo = ganados - utilizados;

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.encabezado}>
        <Text style={styles.titulo}>
          CENTRO DE{'\n'}RECOMPENSAS
        </Text>

        <View style={styles.saldo}>
          <Text style={styles.textoSaldo}>SALDO:</Text>
          <Text style={styles.numeroSaldo}>{saldo} créditos</Text>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={styles.contenido}
        showsVerticalScrollIndicator={false}
      >

        <View style={styles.creditos}>
          <Text style={styles.textoCreditos}>
            CREDITOS GANADOS: {ganados}
          </Text>
          <Text style={styles.textoCreditos}>
            CREDITOS UTILIZADOS: {utilizados}
          </Text>
        </View>

        <View style={styles.lista}>

          <View style={styles.recompensa}>
            <Text style={styles.icono}>🎁</Text>
            <Text style={styles.textoRecompensa}>
              RECOMPENSA NUMERO 1
            </Text>
          </View>

          <View style={styles.recompensa}>
            <Text style={styles.icono}>📋</Text>
            <Text style={styles.textoRecompensa}>
              MOVIMIENTOS
            </Text>
          </View>

          <View style={styles.recompensa}>
            <Text style={styles.icono}>🏆</Text>
            <Text style={styles.textoRecompensa}>
              RECOMPENSAS
            </Text>
          </View>

        </View>

        <View style={styles.botones}>
          <Pressable style={styles.boton}>
            <Text style={styles.textoBoton}>Solicitar</Text>
          </Pressable>

          <Pressable style={styles.boton}>
            <Text style={styles.textoBoton}>Ver</Text>
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
    height: 75,
    backgroundColor: '#4D315C',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
  },

  titulo: {
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: '500',
    flexShrink: 1,
    marginRight: 10,
  },

  saldo: {
    width: 100,
    height: 75,
    backgroundColor: '#FFFEE4',
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textoSaldo: {
    fontSize: 14,
    color: '#222222',
  },

  numeroSaldo: {
    fontSize: 12,
    color: '#4D315C',
    fontWeight: 'bold',
    marginTop: 5,
  },

  contenido: {
    flexGrow: 1,
    paddingHorizontal: 15,
    paddingTop: 8,
    paddingBottom: 30,
  },

  creditos: {
    width: '75%',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#8B728E',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 7,
  },

  textoCreditos: {
    fontSize: 10,
    color: '#222222',
    marginVertical: 2,
  },

  lista: {
    marginTop: 55,
    gap: 35,
  },

  recompensa: {
    width: '90%',
    height: 65,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#8B728E',
    borderRadius: 22,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },

  icono: {
    fontSize: 22,
    marginBottom: 3,
  },

  textoRecompensa: {
    fontSize: 11,
    color: '#222222',
  },

  botones: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 15,
    marginTop: 85,
  },

  boton: {
    backgroundColor: '#4D315C',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },

  textoBoton: {
    fontSize: 11,
    color: '#FFFFFF',
  },
});
