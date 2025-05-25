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
import { Event } from '../../types';
import EventsModal from '../../components/EventsModal/EventsModal';

type PetRouteProp = RouteProp<RootStackParamList, 'Pet'>;

export default function PetScreen({ route }: { route: PetRouteProp }) {

  const [ isLoading, setIsLoading ] = useState<boolean>(true);
  const [ isModalOpen, setIsModalOpen ] = useState<boolean>(false);
  const [ dayEvents, setDayEvents ] = useState<Event[] | null>(null);
  const [ modalTitle, setModalTitle ] = useState<string>('');
  const [ renderEventsModal, setRenderEventsModal ] = useState<boolean>(false);

  const { id } = route.params;

  const { pet, getPetById } = usePet();
  const { events, GetEventByPetId, DeleteEventById } = useEvent();

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

  useEffect(() => {
    setRenderEventsModal(true);
    setIsModalOpen(true);
  }, [dayEvents]);
  
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

  function handleDeleteEvent(id: string) {
    DeleteEventById(id);
    setIsModalOpen(false);
  }
    

  return (
    <View style={styles.container}>
      <Header title='Pet' showBack={true} />
            {  dayEvents && renderEventsModal && (
              <EventsModal
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                dayEvents={dayEvents}
                modalTitle={modalTitle}
                handleDeleteEvent={handleDeleteEvent}
              />
            ) }
      <View style={styles.content}>
        { pet && (
          <>
            <PetActions entityType='pet' entityId={id} />
            <ScrollView
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}>
            {/* <Image source={require('../../img/gato.png')} style={{ width: 340, height: 340 }} /> */}
                  <View style={styles.infoContainer}>
                    <Text style={ isLoading ? styles.petNameSkeleton : styles.petName}>{pet.name}</Text>
                    {events && <MonthlyCalendar events={events} onDayPress={handleOpenModalForDate} />}
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
