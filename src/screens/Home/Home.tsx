import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { styles } from './Home.styles';
import { StackNavigationProp } from '@react-navigation/stack';
import Header from '../../components/Header/Header';

type Props = {
  navigation: StackNavigationProp<any, any>;
};

export default function HomeScreen({ navigation }: Props) {

  function navigateToProfile() {
      navigation.replace('Profile');
  }

  return (
    <View style={styles.container}>
      <Header title="Home"> 
        <Pressable style={styles.button} onPress={navigateToProfile}>
          <Text style={styles.buttonText}>Profile</Text>
        </Pressable>
      </Header>
      <View style={styles.content}>
        <Text style={styles.welcome}>Home!</Text>
      </View>
    </View>
  );
}
