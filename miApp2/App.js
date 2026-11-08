/*1. Zona de importaciones*/

import { StyleSheet, View, } from 'react-native';
import MenuScreens from './screens/MenuScreens';

/*2. Zona Render o main */

export default function App() {
  return (
    <View style={styles.container}>

      <MenuScreens> </MenuScreens>
   

    </View>
  );
}

/*3. Zona de estilos y posiciones*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffff',          

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',

  },
  

});
