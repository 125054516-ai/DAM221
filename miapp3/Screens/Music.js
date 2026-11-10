//hacer un codigo con alertas, switch y if else, que muestre un mensaje dependiendo de la opcion seleccionada por el usuario
import React, { useState } from 'react';
import { View, Text, Button, Alert } from 'react-native';

const Music = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [message, setMessage] = useState('');

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    switch (option) {
      case 'rock':
        setMessage('Has seleccionado Rock');
        break;
      case 'pop':
        setMessage('Has seleccionado Pop');
        break;
      case 'jazz':
        setMessage('Has seleccionado Jazz');
        break;
      default:
        setMessage('Opción no válida');
    }
  };

  return (
    <View>
      <Text>Selecciona un género musical:</Text>
      <Button title="Rock" onPress={() => handleOptionSelect('rock')} />
      <Button title="Pop" onPress={() => handleOptionSelect('pop')} />
      <Button title="Jazz" onPress={() => handleOptionSelect('jazz')} />
      <Text>{message}</Text>
    </View>
  );
};

const styles =  StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
