import React, {  useEffect } from 'react';
import { View, Text, Pressable } from 'react-native';
import { styles } from './Home.styles';
import { StackNavigationProp } from '@react-navigation/stack';
import Header from '../../components/Header/Header';
import PetActions from '../../components/PetActions/PetActions';
import { useUser } from '../../contexts/UserContext';
import { RootStackParamList } from '../../navigation/AppNavigator';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'Pet'>;
};

export default function HomeScreen({ navigation }: Props) {

  const { userFull, getUserFull: getUserFull, userPets } = useUser()

  useEffect(() => {
    if (userFull == null) {
      getUserFull();
    }
  }, [userFull]);

  function navigateToProfile() {
      navigation.replace('Profile');
  }

  function navigateToPet(id: string) {
      navigation.replace('Pet', { id });
  }
  
  return (
    <View style={styles.container}>
      <Header title="Home"> 
        <Pressable style={styles.button} onPress={navigateToProfile}>
          <Text style={styles.buttonText}>Profile</Text>
        </Pressable>
      </Header>
      <View style={styles.content}>
        <PetActions />
        <Text style={styles.welcome}>Olá, {userFull?.name}</Text>
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
