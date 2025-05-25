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
import Modal from '../../components/Modal/Modal';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'Pet'>;
};

export default function HomeScreen({ navigation }: Props) {

  const [ isLoading, setIsLoading ] = useState<boolean>(true);
  const [ isModalOpen, setIsModalOpen ] = useState<boolean>(false);
  const [ dayEvents, setDayEvents ] = useState<Event[] | null>(null);
  const [ modalTitle, setModalTitle ] = useState<string>('');
  const [ renderEventsModal, setRenderEventsModal ] = useState<boolean>(false);

  const { userFull, getUserFull: getUserFull, userPets } = useUser();
  const { events, GetEventByTutorId } = useEvent()

  useEffect(() => {
    if (userFull == null) {
      getUserFull().then((result) => {
        setIsLoading(false);
      });
    } else {
      GetEventByTutorId(userFull?.tutorId!);
      setIsLoading(false);
    }
  }, [userFull]);

  useEffect(() => {
    if (userFull?.tutorId) {
      GetEventByTutorId(userFull?.tutorId!);
    }
  }, []);

  useEffect(() => {
    setRenderEventsModal(true);
    setIsModalOpen(true);
  }, [dayEvents]);

  function navigateToProfile() {
      navigation.replace('Profile');
  }

  function navigateToPet(id: string) {
      navigation.replace('Pet', { id });
  }

  async function getEventsByDay(day: Date): Promise<Event[]> {
    return events.filter(evt => {
      if (!evt.eventDate) return false;
      const evtDate = new Date(evt.eventDate);
      return (
        evtDate.getFullYear() === day.getFullYear() &&
        evtDate.getMonth()    === day.getMonth() &&
        evtDate.getDate()     === day.getDate()
      );
    });
  }

  async function handleOpenModalForDate(date: Date): Promise<void> {
    const evts = await getEventsByDay(date);
    setDayEvents(evts);
    setModalTitle(date.toLocaleDateString('pt-BR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }));
  }
  
  return (
    <View style={styles.container}>
      <Header title="Home"> 
        {/* <Pressable style={styles.button} onPress={navigateToProfile}>
          <Text style={styles.buttonText}>Profile</Text>
        </Pressable> */}
      </Header>
      {  dayEvents && renderEventsModal && (
        <Modal title={modalTitle} modalOpen={isModalOpen} toggleModal={() => setIsModalOpen(!isModalOpen)}>
          <ScrollView>
            { dayEvents.map((evt) => (  
              <View key={evt.id} style={styles.eventContainer}>
                <Text style={styles.eventTitle}>{evt.tooltip}</Text>  
                <Text style={styles.eventTitle}>{evt.name}</Text>
              </View>
            )) }
          </ScrollView>
        </Modal>
      ) }
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
            {events && <MonthlyCalendar events={events} onDayPress={handleOpenModalForDate}/>}
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
