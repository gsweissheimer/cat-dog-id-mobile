import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './Profile.styles';
import Header from '../../components/Header/Header';

export default function ProfileScreen() {

  return (
    <View style={styles.container}>
      <Header title="Profile" showBack={true} />
      <View style={styles.content}>
        <Text style={styles.welcome}>Home!</Text>
      </View>
    </View>
  );
}
