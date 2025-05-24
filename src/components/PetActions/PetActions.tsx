import React from 'react';
import { View, Text, Pressable, ScrollView } from 'react-native';
import { Event, EventActions, EventAction } from '../../types/';
import { styles } from './PetActions.styles';
import { useUser } from '../../contexts/UserContext';
import { useEvent } from '../../contexts/EventContext';

type PetActionsProps = {
  title?: string;
};

export default function PetActions({ title }: PetActionsProps) {

  const { userFull } = useUser();

  const { CreateEvent } = useEvent();

  const handleEvent = async (action: EventAction) => {
    const event: Event = {
      name: action.label,
      value: action.value,
      type: 'event',
      entityId: userFull?.tutorId,
      entityType: 'tutor',
      eventDate: new Date().toISOString(),
    };
    console.log('Evento:', event);

    CreateEvent(event).then((result) => {
      if (result) {
        alert('Evento criado com sucesso');
      } else {
        alert('API Error');
      }
    }).catch((error) => {
      alert(`Erro ao criar evento: ${error.message}`);
    });

  }

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {EventActions.map((action, index) => (
            <Pressable key={index} style={styles.primaryButton} onPress={() => handleEvent(action)}>
                <Text style={styles.primaryButtonText}>{action.label}</Text>
            </Pressable>
        ))}
        </ScrollView>
    </View>
  );
}
