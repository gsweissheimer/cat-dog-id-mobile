import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { styles } from './Pet.styles';
import Header from '../../components/Header/Header';
import { StackNavigationProp } from '@react-navigation/stack';

type Props = {
  navigation: StackNavigationProp<any, any>;
};

export default function PetScreen({ navigation }: Props) {

  function navigateToProfile() {
      navigation.replace('Profile');
  }

  return (
    <View style={styles.container}>
      <Header title="Pet" showBack={true}>
        <Pressable style={styles.button} onPress={navigateToProfile}>
          <Text style={styles.buttonText}>Profile</Text>
        </Pressable>
      </Header>
      <View style={styles.content}>
        <Text style={styles.welcome}>Pet!</Text>
      </View>
    </View>
  );
}
