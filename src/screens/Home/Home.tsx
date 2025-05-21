import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './Home.styles';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Bem-vindo à Home!</Text>
    </View>
  );
}
