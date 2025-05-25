import React, {  useEffect, useState } from 'react';
import { View, Text, Pressable, ScrollView } from 'react-native';
import { styles } from './Home.styles';
import { StackNavigationProp } from '@react-navigation/stack';
import Header from '../../components/Header/Header';
import PetActions from '../../components/PetActions/PetActions';
import { useUser } from '../../contexts/UserContext';
import { RootStackParamList } from '../../navigation/AppNavigator';
import MonthlyCalendar from '../../components/MonthlyCalendar/MonthlyCalendar';
import { Event } from '../../types/';
import { useEvent } from '../../contexts/EventContext';
import { getEventFromTutorId } from '../../services/api';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'Pet'>;
};

export default function HomeScreen({ navigation }: Props) {

  const [ isLoading, setIsLoading ] = useState<boolean>(true);

  const { userFull, getUserFull: getUserFull, userPets } = useUser();
  const { events, GetEventByTutorId } = useEvent()

  const myEvents: Event[] = [];

  useEffect(() => {
    if (userFull == null) {
      getUserFull().then((result) => {
        setIsLoading(false);
      });
    } else {
      setIsLoading(false);
    }
  }, [userFull]);

  useEffect(() => {
    if (events.length === 0 && userFull?.tutorId) {
      GetEventByTutorId(userFull?.tutorId!);
    }
  }, [userFull, events]);

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
        <PetActions  entityType='tutor' />
        <Text style={isLoading ? styles.mainTitleSkeleton : styles.mainTitle}>Olá, {userFull?.name}</Text>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.infoContainer}>
            <Text style={isLoading ? styles.mainTitleSkeleton : styles.mainTitle}>Meus Pets</Text>
              {userPets && (
                userPets.length > 0 ? (
                  userPets.map((pet, index) => (
                    <Pressable key={index} style={styles.primaryButton} onPress={() => navigateToPet(pet.id!)}>
                      <Text style={styles.primaryButtonText}>{pet.name}</Text>
                    </Pressable>
                  ))
                ) : (
                  <Text style={isLoading ? styles.mainTitleSkeleton : styles.mainTitle}>You have no pets!</Text>
                )
              )}
            {events && <MonthlyCalendar events={events} />}
            <View style={styles.footer}>

            </View>
          </View>
        </ScrollView>
        <View style={styles.footer}>

        </View>

      </View>
    </View>
  );
}
