// src/components/Modal/Modal.tsx
import React from 'react';
import { View, Text, ScrollView, Pressable } from 'react-native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../navigation/AppNavigator';
import { styles } from './EventsModal.styles';
import Modal from '../Modal/Modal';
import { Event } from '../../types';

type EventsModalProps = {
    isModalOpen: boolean;
    setIsModalOpen: (open: boolean) => void;
    dayEvents: Event[];
    modalTitle: string;
    handleDeleteEvent: (id: string) => void;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function EventsModal({ isModalOpen, setIsModalOpen, dayEvents, modalTitle, handleDeleteEvent }: EventsModalProps) {

  return (
        <Modal title={modalTitle} modalOpen={isModalOpen} toggleModal={() => setIsModalOpen(!isModalOpen)}>
          <ScrollView>
            { dayEvents.map((evt, index) => (  
              <View key={index} style={styles.eventContainer}>
                <View>
                  <Text style={styles.eventTitle}>{evt.tooltip}</Text>  
                  <Text style={styles.eventTitle}>{evt.name}</Text>
                </View>
                <Pressable onPress={() => handleDeleteEvent(evt.id!)}>
                  <Text>Deletar</Text>
                </Pressable>
              </View>
            )) }
          </ScrollView>
        </Modal>
    );
}
