import React, { useState } from 'react';
import { View, Text, Pressable, ScrollView } from 'react-native';
import { Event, EventActions, EventAction } from '../../types/';
import { styles } from './PetActions.styles';
import { useUser } from '../../contexts/UserContext';
import { useEvent } from '../../contexts/EventContext';

type PetActionsProps = {
  entityType: string;
  entityId?: string ;
};

export default function PetActions({ entityType, entityId }: PetActionsProps) {

  const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);

  const { userFull } = useUser();

  const { CreateEvent } = useEvent();

  const handleEvent = async (action: EventAction) => {
    setButtonDisabled(true);
    const event: Event = {
      name: action.label,
      value: action.value,
      type: 'event',
      entityId: entityId ?? userFull?.tutorId,
      entityType: entityType,
      eventDate: new Date().toISOString(),
    };
    CreateEvent(event).then((result) => {
      if (result) {
        alert('Evento criado com sucesso');
      } else {
        alert('API Error');
      }
      setButtonDisabled(false);
    }).catch((error) => {
      alert(`Erro ao criar evento: ${error.message}`);
      setButtonDisabled(false);
    });

  }

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {EventActions.map((action, index) => (
            <Pressable key={index} style={ buttonDisabled ? styles.buttonDisabled : styles.primaryButton} onPress={() => handleEvent(action)} disabled={buttonDisabled}>
                <Text style={styles.primaryButtonText}>{action.label}</Text>
            </Pressable>
        ))}
        </ScrollView>
    </View>
  );
}
