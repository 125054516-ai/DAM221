import {Text, Image, Button, View} from 'react-native';

export const Saludo2 = () => {
    return (
        <View>

        <Text>Hola mundo RN : soy un componente propio</Text>
        <Image source={require('../assets/wave.png')} />
        <Button title= "Pulsame"></Button>
        </View>
    );
}