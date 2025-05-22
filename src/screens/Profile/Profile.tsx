import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { styles } from './Profile.styles';
import Header from '../../components/Header/Header';
import { useUser } from '../../contexts/UserContext';
import { StackNavigationProp } from '@react-navigation/stack';

type Props = {
  navigation: StackNavigationProp<any, any>;
};

export default function ProfileScreen({ navigation }: Props) {

  const { userFull, userPets } = useUser();

  function navigateToPet(id: string) {
      navigation.replace('Pet', { id });
  }

  return (
    <View style={styles.container}>
      <Header title="Profile" showBack={true} />
      <View style={styles.content}>
        <Text style={styles.welcome}>{userFull?.name}</Text>
        <Text style={styles.welcome}>{userFull?.email}</Text>
        <Text style={styles.welcome}>{userFull?.family.name}</Text>
        {userPets && (
          userPets.length > 0 ? (
            userPets.map((pet, index) => (
              <Pressable key={index} style={styles.primaryButton} onPress={() => navigateToPet(pet.id!)}>
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
