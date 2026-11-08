import React from 'react';
import { View, Text, TextInput, Pressable, ScrollView, KeyboardAvoidingView, SafeAreaView, StyleSheet, Platform, Image } from 'react-native';

// Pantalla de inicio de sesión
export default function Inicio() {
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
            <Image
              source={require('../../assets/logo_krona.jpeg')}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>

          <View style={styles.formulario}>
            <View style={styles.grupo}>
              <TextInput
                style={styles.input}
                placeholder="Correo electrónico"
                placeholderTextColor="#888888"
                keyboardType="email-address"
                autoCapitalize="none"
              />
              <Text style={styles.etiqueta}>Correo</Text>
            </View>

            <View style={styles.grupo}>
              <TextInput
                style={styles.input}
                placeholder="Contraseña"
                placeholderTextColor="#888888"
                secureTextEntry
              />
              <Text style={styles.etiqueta}>Contraseña</Text>
            </View>

            <Pressable style={styles.boton}>
              <Text style={styles.textoBoton}>Iniciar sesión</Text>
            </Pressable>
          </View>

          <View style={styles.registro}>
            <Text style={styles.textoRegistro}>¿Eres nuevo? </Text>
            <Pressable>
              <Text style={styles.enlace}>Regístrate</Text>
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
    paddingVertical: 35,
  },

  encabezado: {
    alignItems: 'center',
    marginTop: 20,
  },

  logo: {
    width: 250,
    height: 190,
    alignSelf: 'center',
  },

  formulario: {
    width: '100%',
    alignItems: 'center',
    gap: 35,
  },

  grupo: {
    width: '100%',
  },

  input: {
    width: '100%',
    height: 43,
    borderWidth: 1.5,
    borderColor: '#4D315C',
    borderRadius: 25,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 15,
    fontSize: 14,
    color: '#4D315C',
  },

  etiqueta: {
    fontSize: 12,
    color: '#222222',
    marginLeft: 7,
    marginTop: 4,
  },

  boton: {
    backgroundColor: '#4D315C',
    paddingHorizontal: 25,
    paddingVertical: 11,
    borderRadius: 25,
    alignItems: 'center',
  },

  textoBoton: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '500',
  },

  registro: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textoRegistro: {
    fontSize: 17,
    color: '#222222',
  },

  enlace: {
    fontSize: 17,
    color: '#4D315C',
    textDecorationLine: 'underline',
  },
});
