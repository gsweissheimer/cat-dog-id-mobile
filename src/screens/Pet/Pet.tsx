import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './Pet.styles';
import Header from '../../components/Header/Header';

export default function PetScreen() {

  return (
    <View style={styles.container}>
      <Header title="Pet" showBack={true} />
      <View style={styles.content}>
        <Text style={styles.welcome}>Pet!</Text>
      </View>
    </View>
  );
}
