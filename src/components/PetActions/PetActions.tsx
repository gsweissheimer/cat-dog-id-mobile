// src/components/Header/Header.tsx
import React from 'react';
import { View, Text, Pressable, ScrollView } from 'react-native';
import { EventActions } from '../../types/';
import { styles } from './PetActions.styles';

type PetActionsProps = {
  title?: string;
};

export default function PetActions({ title }: PetActionsProps) {

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {EventActions.map((action, index) => (
            <Pressable key={index} style={styles.primaryButton}>
                <Text style={styles.primaryButtonText}>{action.label}</Text>
            </Pressable>
        ))}
        </ScrollView>
    </View>
  );
}
