// src/components/Modal/Modal.tsx
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../navigation/AppNavigator';
import { styles } from './Modal.styles';

type ModalProps = {
  title: string;
  modalOpen: boolean;
  toggleModal: () => void;
  showBack?: boolean;
  children?: React.ReactNode;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function Modal({ title, modalOpen, children, toggleModal, showBack = false }: ModalProps) {

  return (
    modalOpen && (
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <TouchableOpacity style={styles.closeButton} onPress={() => toggleModal()}>
            <Text style={styles.closeButtonText}>Fechar</Text>
          </TouchableOpacity>
          <View>
            <Text style={styles.header}>{title}</Text>
          </View>
          <View>
            {children}
          </View>
        </View>
      </View>
    )
  );
}
