
import React from 'react';
import { View, Text, ScrollView, SafeAreaView, Pressable, StyleSheet } from 'react-native';

const solicitudes = [
  {
    id: 1,
    usuario: 'Diego',
    servicio: 'Curso de Cálculo',
    categoria: 'Matemáticas',
    duracion: '2 horas',
    estado: 'Pendiente'
  },
  {
    id: 2,
    usuario: 'Bersa',
    servicio: 'Curso de Java',
    categoria: 'Programación',
    duracion: '3 horas',
    estado: 'Aceptada'
  },
  {
    id: 3,
    usuario: 'Ulises',
    servicio: 'Curso de Física',
    categoria: 'Ciencias',
    duracion: '1.5 horas',
    estado: 'Pendiente'
  }
];

export default function Solicitar() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        <View style={styles.encabezado}>
          <Text style={styles.titulo}>Solicitudes</Text>
          <Text style={styles.subtitulo}>
            Administración de solicitudes KRONA
          </Text>
        </View>

        <View style={styles.contenido}>

          <View style={styles.resumen}>
            <View>
              <Text style={styles.resumenTitulo}>
                Solicitudes registradas
              </Text>
              <Text style={styles.resumenTexto}>
                Revisa los servicios solicitados
              </Text>
            </View>

            <View style={styles.contador}>
              <Text style={styles.contadorTexto}>
                {solicitudes.length}
              </Text>
            </View>
          </View>

          <Text style={styles.seccion}>
            Solicitudes recientes
          </Text>

          {solicitudes.map((solicitud) => (
            <View key={solicitud.id} style={styles.tarjeta}>

              <View style={styles.filaSuperior}>
                <Text style={styles.nombre}>
                  {solicitud.servicio}
                </Text>

                <View style={styles.estado}>
                  <Text style={styles.estadoTexto}>
                    {solicitud.estado}
                  </Text>
                </View>
              </View>

              <Text style={styles.categoria}>
                {solicitud.categoria}
              </Text>

              <View style={styles.linea} />

              <View style={styles.fila}>
                <Text style={styles.etiqueta}>Solicitante</Text>
                <Text style={styles.valor}>
                  {solicitud.usuario}
                </Text>
              </View>

              <View style={styles.fila}>
                <Text style={styles.etiqueta}>Duración</Text>
                <Text style={styles.valor}>
                  {solicitud.duracion}
                </Text>
              </View>

              <View style={styles.fila}>
                <Text style={styles.etiqueta}>ID solicitud</Text>
                <Text style={styles.valor}>
                  #{solicitud.id}
                </Text>
              </View>

              <View style={styles.botones}>
                <Pressable style={styles.botonAceptar}>
                  <Text style={styles.textoAceptar}>
                    Aceptar
                  </Text>
                </Pressable>

                <Pressable style={styles.botonRechazar}>
                  <Text style={styles.textoRechazar}>
                    Rechazar
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
    fontSize: 26,
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

  resumen: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E4D7E6',
    padding: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 2,
  },

  resumenTitulo: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#4D315C',
  },

  resumenTexto: {
    fontSize: 11,
    color: '#777777',
    marginTop: 5,
  },

  contador: {
    width: 45,
    height: 45,
    borderRadius: 23,
    backgroundColor: '#F0E5F1',
    justifyContent: 'center',
    alignItems: 'center',
  },

  contadorTexto: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#4D315C',
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
    padding: 16,
    marginBottom: 15,
    elevation: 2,
  },

  filaSuperior: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  nombre: {
    flex: 1,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#4D315C',
    marginRight: 10,
  },

  estado: {
    backgroundColor: '#F0E5F1',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },

  estadoTexto: {
    fontSize: 10,
    color: '#4D315C',
  },

  categoria: {
    fontSize: 11,
    color: '#777777',
    marginTop: 6,
  },

  linea: {
    height: 1,
    backgroundColor: '#F0E5F1',
    marginVertical: 14,
  },

  fila: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 7,
  },

  etiqueta: {
    fontSize: 12,
    color: '#777777',
  },

  valor: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#4D315C',
  },

  botones: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 18,
  },

  botonAceptar: {
    flex: 1,
    backgroundColor: '#4D315C',
    borderRadius: 25,
    paddingVertical: 12,
    alignItems: 'center',
  },

  textoAceptar: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },

  botonRechazar: {
    flex: 1,
    backgroundColor: '#F0E5F1',
    borderRadius: 25,
    paddingVertical: 12,
    alignItems: 'center',
  },

  textoRechazar: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#4D315C',
  },
});
