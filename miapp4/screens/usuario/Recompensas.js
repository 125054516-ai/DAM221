
import React from 'react';
import { View, Text, ScrollView, SafeAreaView, Pressable, StyleSheet } from 'react-native';

const recompensas = [
  {
    id: 1,
    nombre: 'Asesoría personalizada',
    descripcion: 'Una sesión de apoyo académico.',
    costo: 10
  },
  {
    id: 2,
    nombre: 'Curso especial',
    descripcion: 'Acceso a un curso de tu interés.',
    costo: 20
  },
  {
    id: 3,
    nombre: 'Material de estudio',
    descripcion: 'Recursos para tus actividades.',
    costo: 15
  }
];

export default function Recompensas() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        <View style={styles.encabezado}>
          <Text style={styles.titulo}>Recompensas</Text>
          <Text style={styles.subtitulo}>
            Utiliza tus créditos de KRONA
          </Text>
        </View>

        <View style={styles.contenido}>

          <View style={styles.saldo}>
            <Text style={styles.saldoTitulo}>Mi saldo disponible</Text>
            <Text style={styles.saldoNumero}>54 hrs</Text>
            <Text style={styles.saldoDetalle}>
              Créditos disponibles para canjear
            </Text>
          </View>

          <View style={styles.estadisticas}>
            <View style={styles.tarjetaEstadistica}>
              <Text style={styles.numero}>80</Text>
              <Text style={styles.detalle}>Créditos ganados</Text>
            </View>

            <View style={styles.tarjetaEstadistica}>
              <Text style={styles.numero}>26</Text>
              <Text style={styles.detalle}>Créditos utilizados</Text>
            </View>
          </View>

          <Text style={styles.seccion}>
            Recompensas disponibles
          </Text>

          {recompensas.map((recompensa) => (
            <View key={recompensa.id} style={styles.tarjeta}>

              <View style={styles.fila}>
                <Text style={styles.nombre}>
                  {recompensa.nombre}
                </Text>

                <View style={styles.precio}>
                  <Text style={styles.precioTexto}>
                    {recompensa.costo} hrs
                  </Text>
                </View>
              </View>

              <Text style={styles.descripcion}>
                {recompensa.descripcion}
              </Text>

              <Pressable style={styles.boton}>
                <Text style={styles.botonTexto}>
                  Canjear recompensa
                </Text>
              </Pressable>

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

  saldo: {
    backgroundColor: '#4D315C',
    borderRadius: 18,
    padding: 22,
    alignItems: 'center',
    marginBottom: 15,
  },

  saldoTitulo: {
    fontSize: 13,
    color: '#EADCEB',
  },

  saldoNumero: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 8,
  },

  saldoDetalle: {
    fontSize: 11,
    color: '#EADCEB',
    marginTop: 5,
  },

  estadisticas: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  tarjetaEstadistica: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#E4D7E6',
    paddingVertical: 18,
    alignItems: 'center',
    elevation: 2,
  },

  numero: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4D315C',
  },

  detalle: {
    fontSize: 11,
    color: '#777777',
    marginTop: 5,
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

  fila: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  nombre: {
    flex: 1,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#4D315C',
    marginRight: 10,
  },

  precio: {
    backgroundColor: '#F0E5F1',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },

  precioTexto: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#4D315C',
  },

  descripcion: {
    fontSize: 11,
    color: '#777777',
    marginTop: 10,
    marginBottom: 15,
  },

  boton: {
    backgroundColor: '#4D315C',
    borderRadius: 25,
    paddingVertical: 11,
    alignItems: 'center',
  },

  botonTexto: {
    fontSize: 12,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});
