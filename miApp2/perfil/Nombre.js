import {Text, Image, View} from 'react-native';

export const Nombre = () => {
    return (
        <View>  
        
        <Text>Mi nombre es Diego Carreño Garcia </Text>

        <Image source={require('../assets/perrito.png')} />

        </View>
    );
}