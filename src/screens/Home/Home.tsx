import React, { use, useEffect, useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { styles } from './Home.styles';
import { StackNavigationProp } from '@react-navigation/stack';
import Header from '../../components/Header/Header';
import { useUser } from '../../contexts/UserContext';

type Props = {
  navigation: StackNavigationProp<any, any>;
};

export default function HomeScreen({ navigation }: Props) {

  const { userFull, getUserFull: getUserFull, userPets } = useUser()

  useEffect(() => {
    if (!userFull) {
      getUserFull();
    }
  }, [userFull]);

  function navigateToProfile() {
      navigation.replace('Profile');
  }

  function navigateToPet() {
      navigation.replace('Pet');
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
          {userPets && (
            userPets.length > 0 ? (
              userPets.map((pet) => (
                <Pressable style={styles.primaryButton} onPress={navigateToPet}>
                  <Text style={styles.primaryButtonText}>{pet.name}</Text>
                </Pressable>
              ))
            ) : (
              <Text style={styles.welcome}>You have no pets!</Text>
            )
          )}
      </View>
    </View>
  );
}
