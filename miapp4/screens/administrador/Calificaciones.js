
import React, { useState } from 'react';
import { View, Text, ScrollView, SafeAreaView, Pressable, TextInput, StyleSheet } from 'react-native';

const opiniones = [
  {
    id: 1,
    usuario: 'Diego',
    curso: 'Curso de Java',
    estrellas: 5,
    comentario: 'Muy buena explicación, aprendí bastante.'
  },
  {
    id: 2,
    usuario: 'Bersa',
    curso: 'Aplicaciones Web',
    estrellas: 4,
    comentario: 'El curso fue claro y fácil de entender.'
  }
];

export default function Calificaciones() {
  const [estrellas, setEstrellas] = useState(0);
  const [comentario, setComentario] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        <View style={styles.encabezado}>
          <Text style={styles.titulo}>Calificaciones</Text>
          <Text style={styles.subtitulo}>
            Evalúa tu experiencia en KRONA
          </Text>
        </View>

        <View style={styles.contenido}>

          <View style={styles.promedio}>
            <Text style={styles.promedioTexto}>
              Calificación promedio
            </Text>

            <Text style={styles.promedioNumero}>
              4.8 / 5.0
            </Text>

            <Text style={styles.promedioEstrellas}>
              ★★★★★
            </Text>
          </View>

          <Text style={styles.seccion}>
            Calificar un servicio
          </Text>

          <View style={styles.tarjeta}>

            <Text style={styles.nombreCurso}>
              Curso de Cálculo
            </Text>

            <Text style={styles.impartidor}>
              Impartido por Ulises
            </Text>

            <View style={styles.linea} />

            <Text style={styles.pregunta}>
              ¿Cómo fue tu experiencia?
            </Text>

            <View style={styles.estrellas}>
              {[1, 2, 3, 4, 5].map((numero) => (
                <Pressable
                  key={numero}
                  onPress={() => setEstrellas(numero)}
                >
                  <Text style={[
                    styles.estrella,
                    {
                      color: numero <= estrellas
                        ? '#E7B44D'
                        : '#CCCCCC'
                    }
                  ]}>
                    ★
                  </Text>
                </Pressable>
              ))}
            </View>

            <Text style={styles.calificacionTexto}>
              {estrellas} de 5 estrellas
            </Text>

            <Text style={styles.etiqueta}>
              Comentario
            </Text>

            <TextInput
              style={styles.input}
              placeholder="Escribe tu opinión sobre el servicio..."
              placeholderTextColor="#999999"
              multiline
              value={comentario}
              onChangeText={setComentario}
            />

            <Pressable style={styles.boton}>
              <Text style={styles.botonTexto}>
                Enviar calificación
              </Text>
            </Pressable>

          </View>

          <Text style={styles.seccion}>
            Opiniones recientes
          </Text>

          {opiniones.map((opinion) => (
            <View key={opinion.id} style={styles.tarjetaOpinion}>

              <View style={styles.fila}>
                <Text style={styles.nombreUsuario}>
                  {opinion.usuario}
                </Text>

                <Text style={styles.estrellasOpinion}>
                  {'★'.repeat(opinion.estrellas)}
                </Text>
              </View>

              <Text style={styles.cursoOpinion}>
                {opinion.curso}
              </Text>

              <Text style={styles.comentario}>
                {opinion.comentario}
              </Text>

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

  promedio: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E4D7E6',
    padding: 20,
    alignItems: 'center',
    elevation: 2,
  },

  promedioTexto: {
    fontSize: 12,
    color: '#777777',
  },

  promedioNumero: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4D315C',
    marginTop: 8,
  },

  promedioDetalle: {
    fontSize: 11,
    color: '#777777',
    marginTop: 6,
  },

  seccion: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4D315C',
    marginTop: 24,
    marginBottom: 13,
  },

  tarjeta: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E4D7E6',
    padding: 18,
    elevation: 2,
  },

  nombreCurso: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4D315C',
  },

  impartidor: {
    fontSize: 12,
    color: '#777777',
    marginTop: 5,
  },

  linea: {
    height: 1,
    backgroundColor: '#F0E5F1',
    marginVertical: 17,
  },

  pregunta: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#4D315C',
    textAlign: 'center',
  },

  estrellas: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
    marginTop: 15,
  },

  estrella: {
    fontSize: 36,
  },

  calificacionTexto: {
    fontSize: 11,
    color: '#777777',
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 20,
  },

  etiqueta: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#4D315C',
    marginBottom: 10,
  },

  input: {
    backgroundColor: '#FAF8FA',
    borderWidth: 1,
    borderColor: '#E4D7E6',
    borderRadius: 10,
    padding: 12,
    height: 90,
    textAlignVertical: 'top',
    fontSize: 13,
    color: '#333333',
    marginBottom: 18,
  },

  boton: {
    backgroundColor: '#4D315C',
    borderRadius: 25,
    paddingVertical: 13,
    alignItems: 'center',
  },

  botonTexto: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },

  tarjetaOpinion: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E4D7E6',
    padding: 17,
    marginBottom: 13,
    elevation: 2,
  },

  fila: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  nombreUsuario: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#4D315C',
  },

  cursoOpinion: {
    fontSize: 11,
    color: '#777777',
    marginTop: 6,
  },

  comentario: {
    fontSize: 12,
    color: '#555555',
    marginTop: 12,
    lineHeight: 19,
  },
});
