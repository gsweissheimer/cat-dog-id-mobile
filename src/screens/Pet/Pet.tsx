import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { styles } from './Pet.styles';
import Header from '../../components/Header/Header';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/AppNavigator';
import { usePet } from '../../contexts/PetContext';

type PetRouteProp = RouteProp<RootStackParamList, 'Pet'>;

export default function PetScreen({ route }: { route: PetRouteProp }) {

  const [ isLoading, setIsLoading ] = useState<boolean>(true);

  const { id } = route.params;

  const { pet, getPetById } = usePet();

  useEffect(() => {
    if (pet == null || pet.id !== id) {
      getPetById(id).then(() => {
          setIsLoading(false);
      });
    }
  }, [pet, id]);

  return (
    <View style={styles.container}>
      <Header title="Pet" showBack={true} />
      <View style={styles.content}>
        { pet && (
          <Text style={ isLoading ? styles.petNameSkeleton : styles.petName}>{pet.name}</Text>
        )}
      </View>
    </View>
  );
}
