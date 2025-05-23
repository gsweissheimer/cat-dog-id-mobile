import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { styles } from './Pet.styles';
import Header from '../../components/Header/Header';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/AppNavigator';
import { usePet } from '../../contexts/PetContext';
import WeeklyCalendar from '../../components/WeeklyCalendar/MonthlyCalendar';
import { Event } from '../../types/';
import PetActions from '../../components/PetActions/PetActions';

type PetRouteProp = RouteProp<RootStackParamList, 'Pet'>;

export default function PetScreen({ route }: { route: PetRouteProp }) {

  const [ isLoading, setIsLoading ] = useState<boolean>(true);

  const { id } = route.params;

  const { pet, getPetById } = usePet();
  
  const myEvents: Event[] = [
    { id: '1', name: 'Consulta', eventDate: '2025-05-20' },
    { id: '2', name: 'Vacina',   eventDate: '2025-05-22' },
  ];

  useEffect(() => {
    if (pet == null || pet.id !== id) {
      getPetById(id).then(() => {
          setIsLoading(false);
      });
    } else {
      setIsLoading(false);
    }
  }, [pet, id]);

  return (
    <View style={styles.container}>
      <Header title='Pet' showBack={true} />
      <View style={styles.content}>
        { pet && (
          <>
            <PetActions />
            <ScrollView
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}>
            <Image
              source={require('../../img/gato.png')} style={{ width: 340, height: 340 }} />
                  <View style={styles.infoContainer}>
                    <Text style={ isLoading ? styles.petNameSkeleton : styles.petName}>{pet.name}</Text>
                    <WeeklyCalendar events={myEvents} />
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
