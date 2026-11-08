import React from 'react';
import { View, Text, TextInput, Pressable, ScrollView, KeyboardAvoidingView, SafeAreaView, StyleSheet, Platform } from 'react-native';

// Pantalla de registro
export default function Registro() {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.contenido}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >

          <View style={styles.encabezado}>
            <Text style={styles.titulo}>KRONA</Text>
            <Text style={styles.subtitulo}>BANCO DE TIEMPO Y TALENTO</Text>
            <Text style={styles.tituloRegistro}>Crear cuenta</Text>
          </View>

          <View style={styles.formulario}>

            <View style={styles.grupo}>
              <Text style={styles.etiqueta}>Nombre completo</Text>
              <TextInput
                style={styles.input}
                placeholder="Ingresa tu nombre"
                placeholderTextColor="#888888"
              />
            </View>

            <View style={styles.grupo}>
              <Text style={styles.etiqueta}>Correo electrónico</Text>
              <TextInput
                style={styles.input}
                placeholder="Ingresa tu correo"
                placeholderTextColor="#888888"
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            <View style={styles.grupo}>
              <Text style={styles.etiqueta}>Contraseña</Text>
              <TextInput
                style={styles.input}
                placeholder="Crea una contraseña"
                placeholderTextColor="#888888"
                secureTextEntry
              />
            </View>

            <View style={styles.grupo}>
              <Text style={styles.etiqueta}>Confirmar contraseña</Text>
              <TextInput
                style={styles.input}
                placeholder="Confirma tu contraseña"
                placeholderTextColor="#888888"
                secureTextEntry
              />
            </View>

            <Pressable style={styles.boton}>
              <Text style={styles.textoBoton}>Registrarse</Text>
            </Pressable>

          </View>

        </ScrollView>
      </KeyboardAvoidingView>
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
    justifyContent: 'space-around',
    paddingHorizontal: 30,
    paddingVertical: 25,
  },

  encabezado: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 25,
  },

  titulo: {
    fontSize: 38,
    fontWeight: 'bold',
    color: '#4D315C',
    letterSpacing: 3,
  },

  subtitulo: {
    fontSize: 11,
    color: '#4D315C',
    marginTop: 5,
    textAlign: 'center',
  },

  tituloRegistro: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#4D315C',
    marginTop: 30,
  },

  formulario: {
    width: '100%',
    gap: 20,
  },

  grupo: {
    width: '100%',
  },

  etiqueta: {
    fontSize: 14,
    color: '#4D315C',
    marginBottom: 7,
    marginLeft: 8,
  },

  input: {
    width: '100%',
    height: 45,
    borderWidth: 1.5,
    borderColor: '#4D315C',
    borderRadius: 25,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 15,
    fontSize: 14,
    color: '#222222',
  },

  boton: {
    backgroundColor: '#4D315C',
    paddingVertical: 13,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignSelf: 'center',
    marginTop: 15,
  },

  textoBoton: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },

});
