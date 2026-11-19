
import React from 'react';
import { View, Text, ScrollView, SafeAreaView, Pressable, StyleSheet } from 'react-native';

const cursos = [
  {
    id: 1,
    nombre: 'Curso de Cálculo',
    categoria: 'Matemáticas',
    duracion: '2 horas',
    creditos: 10
  },
  {
    id: 2,
    nombre: 'Aplicaciones Web',
    categoria: 'Programación',
    duracion: '3 horas',
    creditos: 15
  },
  {
    id: 3,
    nombre: 'Aplicaciones Móviles',
    categoria: 'Programación',
    duracion: '4 horas',
    creditos: 20
  },
  {
    id: 4,
    nombre: 'Base de Datos',
    categoria: 'Programación',
    duracion: '2 horas',
    creditos: 10
  }
];

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        <View style={styles.encabezado}>
          <View style={styles.filaSuperior}>
            <View>
              <Text style={styles.titulo}>KRONA</Text>
              <Text style={styles.subtitulo}>
                Banco de Tiempo y Talento
              </Text>
            </View>

            <View style={styles.acciones}>
              <Pressable style={styles.botonIcono}>
                <Text style={styles.icono}>♡</Text>
              </Pressable>

              <Pressable style={styles.botonIcono}>
                <Text style={styles.icono}>+</Text>
              </Pressable>
            </View>
          </View>

          <View style={styles.creditos}>
            <Text style={styles.creditosEtiqueta}>
              Mis créditos disponibles
            </Text>
            <Text style={styles.creditosNumero}>54 hrs</Text>
          </View>
        </View>

        <View style={styles.contenido}>

          <View style={styles.bienvenida}>
            <Text style={styles.bienvenidaTitulo}>
              ¡Bienvenido a KRONA!
            </Text>

            <Text style={styles.bienvenidaTexto}>
              Aprende nuevas habilidades y comparte tus conocimientos.
            </Text>
          </View>

          <Text style={styles.seccion}>Mi espacio</Text>

          <View style={styles.menu}>
            <Pressable style={styles.opcion}>
              <Text style={styles.opcionTexto}>Principal</Text>
            </Pressable>

            <Pressable style={styles.opcion}>
              <Text style={styles.opcionTexto}>Servicios</Text>
            </Pressable>

            <Pressable style={styles.opcion}>
              <Text style={styles.opcionTexto}>Historial</Text>
            </Pressable>

            <Pressable style={styles.opcion}>
              <Text style={styles.opcionTexto}>Perfil</Text>
            </Pressable>
          </View>

          <View style={styles.filaSeccion}>
            <Text style={styles.seccion}>Cursos disponibles</Text>
            <Text style={styles.verTodos}>Ver todos</Text>
          </View>

          {cursos.map((curso) => (
            <View key={curso.id} style={styles.tarjeta}>

              <View style={styles.filaCurso}>
                <Text style={styles.nombreCurso}>
                  {curso.nombre}
                </Text>

                <Text style={styles.corazon}>♡</Text>
              </View>

              <Text style={styles.categoria}>
                {curso.categoria}
              </Text>

              <View style={styles.linea} />

              <View style={styles.filaDatos}>
                <View>
                  <Text style={styles.etiqueta}>Duración</Text>
                  <Text style={styles.valor}>{curso.duracion}</Text>
                </View>

                <View>
                  <Text style={styles.etiqueta}>Costo</Text>
                  <Text style={styles.valor}>
                    {curso.creditos} créditos
                  </Text>
                </View>
              </View>

              <Pressable style={styles.botonCurso}>
                <Text style={styles.botonCursoTexto}>
                  Solicitar servicio
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
    padding: 22,
    paddingTop: 30,
    paddingBottom: 25,
  },

  filaSuperior: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  titulo: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },

  subtitulo: {
    fontSize: 11,
    color: '#EADCEB',
    marginTop: 5,
  },

  acciones: {
    flexDirection: 'row',
    gap: 8,
  },

  botonIcono: {
    width: 38,
    height: 38,
    borderRadius: 20,
    backgroundColor: '#694A78',
    justifyContent: 'center',
    alignItems: 'center',
  },

  icono: {
    fontSize: 24,
    color: '#FFFFFF',
  },

  creditos: {
    backgroundColor: '#694A78',
    borderRadius: 15,
    padding: 17,
    marginTop: 22,
  },

  creditosEtiqueta: {
    fontSize: 12,
    color: '#EADCEB',
  },

  creditosNumero: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 6,
  },

  contenido: {
    padding: 18,
    paddingBottom: 30,
  },

  bienvenida: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E4D7E6',
    padding: 18,
    elevation: 2,
  },

  bienvenidaTitulo: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#4D315C',
  },

  bienvenidaTexto: {
    fontSize: 12,
    color: '#777777',
    marginTop: 7,
    lineHeight: 19,
  },

  seccion: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4D315C',
    marginTop: 23,
    marginBottom: 13,
  },

  menu: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },

  opcion: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 13,
    borderWidth: 1,
    borderColor: '#E4D7E6',
    paddingVertical: 15,
    alignItems: 'center',
  },

  opcionTexto: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#4D315C',
  },

  filaSeccion: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  verTodos: {
    fontSize: 11,
    color: '#4D315C',
    marginTop: 10,
  },

  tarjeta: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E4D7E6',
    padding: 17,
    marginBottom: 14,
    elevation: 2,
  },

  filaCurso: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  nombreCurso: {
    flex: 1,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#4D315C',
  },

  corazon: {
    fontSize: 25,
    color: '#4D315C',
  },

  categoria: {
    fontSize: 11,
    color: '#777777',
    marginTop: 5,
  },

  linea: {
    height: 1,
    backgroundColor: '#F0E5F1',
    marginVertical: 15,
  },

  filaDatos: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  etiqueta: {
    fontSize: 11,
    color: '#777777',
  },

  valor: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#4D315C',
    marginTop: 5,
  },

  botonCurso: {
    backgroundColor: '#4D315C',
    borderRadius: 25,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 18,
  },

  botonCursoTexto: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});
