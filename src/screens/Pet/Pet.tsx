import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { styles } from './Pet.styles';
import Header from '../../components/Header/Header';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/AppNavigator';
import { usePet } from '../../contexts/PetContext';
import PetActions from '../../components/PetActions/PetActions';
import MonthlyCalendar from '../../components/MonthlyCalendar/MonthlyCalendar';
import { useEvent } from '../../contexts/EventContext';

type PetRouteProp = RouteProp<RootStackParamList, 'Pet'>;

export default function PetScreen({ route }: { route: PetRouteProp }) {

  const [ isLoading, setIsLoading ] = useState<boolean>(true);

  const { id } = route.params;

  const { pet, getPetById } = usePet();
  const { events, GetEventByPetId } = useEvent();

  useEffect(() => {
    if (pet == null || pet.id !== id) {
      getPetById(id).then(() => {
          setIsLoading(false);
      });
    } else {
      setIsLoading(false);
    }
  }, [pet, id]);

  useEffect(() => {
    GetEventByPetId(id);
  }, [pet, id]);

  return (
    <View style={styles.container}>
      <Header title='Pet' showBack={true} />
      <View style={styles.content}>
        { pet && (
          <>
            <PetActions entityType='pet' />
            <ScrollView
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}>
            <Image
              source={require('../../img/gato.png')} style={{ width: 340, height: 340 }} />
                  <View style={styles.infoContainer}>
                    <Text style={ isLoading ? styles.petNameSkeleton : styles.petName}>{pet.name}</Text>
                    {events && <MonthlyCalendar events={events} />}
                  </View>
                  <View style={styles.footer}>
        
                  </View>
            </ScrollView>
            <View style={styles.footer}>
  
            </View>
          </>
        )}
      </View>
    </View>
  );
}
