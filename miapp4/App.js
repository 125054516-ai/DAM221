import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import MenuScreen from './screens/menu';
import Inicio from './screens/usuario/Inicio';
import Registro from './screens/usuario/Registro';
import Home from './screens/usuario/Home';
import Perfil from './screens/usuario/Perfil';
import SolicitarServicio from './screens/usuario/SolicitarServicio';
import PublicarServicio from './screens/usuario/PublicarServicio';
import Cursos from './screens/usuario/Cursos';
import Recompensas from './screens/usuario/Recompensas';
import Principal1 from './screens/administrador/Principal1';
import Principal2 from './screens/administrador/Principal2';
import PerfilesUsuario from './screens/administrador/PerfilesUsuario';
import Categorias from './screens/administrador/Categorias';
import Reportes1 from './screens/administrador/Reportes1';
import Reportes2 from './screens/administrador/Reportes2';
import Supervisar from './screens/administrador/Supervisar';



// Pantalla principal
export default function App() {
  const [pantalla, setPantalla] = useState('Menu');

  const mostrarPantalla = () => {
    if (pantalla === 'Menu') {
      return <MenuScreen onSeleccionar={setPantalla} />;
    }
    if (pantalla === 'Registro') {
      return <Registro />;
    }
    if (pantalla === 'Home') {
    return <Home />;
    }
    if (pantalla === 'Perfil') {
    return <Perfil />;
    }
    if (pantalla === 'SolicitarServicio') {
    return <SolicitarServicio />;
    }
    if (pantalla === 'PublicarServicio') {
    return <PublicarServicio />;
    }
    if (pantalla === 'Cursos') {
    return <Cursos />;
    }
    if (pantalla === 'Recompensas') {
    return <Recompensas />;
    }
    if (pantalla === 'Principal1') {
    return <Principal1 />;
    }
    if (pantalla === 'Principal2') {
    return <Principal2 />;
    }
    if (pantalla === 'PerfilesUsuario') {
    return <PerfilesUsuario />;
    }
    if (pantalla === 'Categorias') {
    return <Categorias />;
    }
    if (pantalla === 'Reportes1') {
    return <Reportes1 />;
    }
    if (pantalla === 'Reportes2') {
    return <Reportes2 />;
    }
    if (pantalla === 'Supervisar') {
    return <Supervisar />;
    }
    if (pantalla === 'Login') {
      return <Inicio />;
    }

    return (
      <View style={styles.pendiente}>
        <Text style={styles.titulo}>{pantalla}</Text>
        <Text style={styles.descripcion}>Interfaz pendiente de diseñar</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {pantalla !== 'Menu' && (
        <Pressable
          style={styles.regresar}
          onPress={() => setPantalla('Menu')}
        >
          <Text style={styles.textoRegresar}>Volver al menú</Text>
        </Pressable>
      )}

      {mostrarPantalla()}
      <StatusBar style="dark" />
    </View>
  );
}

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFEE4',
  },

  regresar: {
    backgroundColor: '#4D315C',
    padding: 12,
    alignItems: 'center',
  },

  textoRegresar: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },

  pendiente: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  titulo: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#4D315C',
  },

  descripcion: {
    fontSize: 14,
    marginTop: 10,
  },
});
