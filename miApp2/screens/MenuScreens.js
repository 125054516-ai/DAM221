/*1. Zona de importaciones*/

import { StyleSheet, View, Text, Button } from 'react-native';
import { useState } from 'react';

import TarjetasScreen from './TarjetasScreen';
import SafeScreen from './SafeScreen';
import Activity from './Activity';
import FlatListScreen from './FlatList';
import ImageScreen from './Image';
import ModalScreen from './Modal';
import PressableScreen from './Pressable';
import TextInputScreen from './TextInput';

/*2. Zona Render o main*/

export default function MenuScreens() {
  const [screen, setScreen] = useState('menu');

  switch(screen) {
    case 'tarjetas':
      return <TarjetasScreen />;

    case 'safe':
      return <SafeScreen />;

    case 'activity':
      return <Activity />;

    case 'flatlist':
      return <FlatListScreen />;

    case 'image':
      return <ImageScreen />;

    case 'modal':
      return <ModalScreen />;

    case 'pressable':
      return <PressableScreen />;

    case 'textinput':
      return <TextInputScreen />;

    case 'menu':
    default:
      return (
        <View style={styles.container}>

          <Text> Menu de Practicas </Text>

          <Button title="Pract:Tarjetas" onPress={() => setScreen('tarjetas')} />
          <Button title="Pract:SafeAreaView" onPress={() => setScreen('safe')} />
          <Button title="Pract:Activity" onPress={() => setScreen('activity')} />
          <Button title="Pract:FlatList" onPress={() => setScreen('flatlist')} />
          <Button title="Pract:Image" onPress={() => setScreen('image')} />
          <Button title="Pract:Modal" onPress={() => setScreen('modal')} />
          <Button title="Pract:Pressable" onPress={() => setScreen('pressable')} />
          <Button title="Pract:TextInput" onPress={() => setScreen('textinput')} />

        </View>
      );
  }
}

/*3. Zona de estilos y posiciones*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});