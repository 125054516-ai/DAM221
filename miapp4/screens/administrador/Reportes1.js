
import React from 'react';
import { View, Text, TextInput, ScrollView, SafeAreaView, Pressable, StyleSheet } from 'react-native';

const reportes = [
  {
    id: '47573893',
    usuario: 'Juan Pérez',
    fecha: '12/11/2026',
    hora: '10:30 AM',
    motivo: 'Problema al iniciar sesión',
    estado: 'Pendiente'
  },
  {
    id: '47573894',
    usuario: 'Diego',
    fecha: '11/11/2026',
    hora: '12:15 PM',
    motivo: 'Error al solicitar un servicio',
    estado: 'Pendiente'
  },
  {
    id: '47573895',
    usuario: 'Bersa',
    fecha: '10/11/2026',
    hora: '09:45 AM',
    motivo: 'Problema con los créditos',
    estado: 'Revisado'
  }
];

export default function Reportes1() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        <View style={styles.encabezado}>
          <Text style={styles.titulo}>Reportes</Text>
          <Text style={styles.subtitulo}>
            Administración de reportes
          </Text>
        </View>

        <View style={styles.contenido}>

          <View style={styles.resumen}>
            <View>
              <Text style={styles.resumenTitulo}>
                Reportes registrados
              </Text>
              <Text style={styles.resumenTexto}>
                Consulta las incidencias del sistema
              </Text>
            </View>

            <View style={styles.contador}>
              <Text style={styles.contadorTexto}>3</Text>
            </View>
          </View>

          <Text style={styles.seccion}>Buscar reporte</Text>

          <TextInput
            style={styles.buscador}
            placeholder="Buscar por ID..."
            placeholderTextColor="#999999"
          />

          <Text style={styles.seccion}>Más recientes</Text>

          {reportes.map((reporte) => (
            <View key={reporte.id} style={styles.tarjeta}>

              <View style={styles.filaSuperior}>
                <Text style={styles.id}>
                  Reporte #{reporte.id}
                </Text>

                <View style={styles.estado}>
                  <Text style={styles.estadoTexto}>
                    {reporte.estado}
                  </Text>
                </View>
              </View>

              <Text style={styles.usuario}>
                {reporte.usuario}
              </Text>

              <Text style={styles.detalle}>
                {reporte.fecha} - {reporte.hora}
              </Text>

              <View style={styles.linea} />

              <Text style={styles.motivoTitulo}>
                Descripción
              </Text>

              <Text style={styles.motivo}>
                {reporte.motivo}
              </Text>

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
    alignItems: 'center',
    justifyContent: 'center',
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
    marginTop: 23,
    marginBottom: 12,
  },

  buscador: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E4D7E6',
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 13,
    color: '#4D315C',
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

  id: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#4D315C',
  },

  estado: {
    backgroundColor: '#F0E5F1',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },

  estadoTexto: {
    fontSize: 10,
    color: '#4D315C',
  },

  usuario: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#333333',
    marginTop: 12,
  },

  detalle: {
    fontSize: 11,
    color: '#777777',
    marginTop: 5,
  },

  linea: {
    height: 1,
    backgroundColor: '#F0E5F1',
    marginVertical: 13,
  },

  motivoTitulo: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#4D315C',
  },

  motivo: {
    fontSize: 12,
    color: '#777777',
    marginTop: 5,
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
    paddingVertical: 11,
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
    paddingVertical: 11,
    alignItems: 'center',
  },

  textoRechazar: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#4D315C',
  },
});
