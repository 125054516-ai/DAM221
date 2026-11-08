/*1. Zona de importaciones*/

import { StyleSheet, View, Text } from 'react-native';

/*2. Zona Render o main */

export default function Modal() {
  return (
    <View style={styles.container}>
   
   <Text> Modal & Bottom sheet :   </Text>
   <Text> Daniela Ramirez Mercado   </Text>


    </View>
  );
}

/*3. Zona de estilos y posiciones*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',          

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',

  },
  

});
