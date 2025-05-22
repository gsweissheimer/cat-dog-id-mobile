import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { styles } from './Pet.styles';
import Header from '../../components/Header/Header';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/AppNavigator';

type PetRouteProp = RouteProp<RootStackParamList, 'Pet'>;

export default function PetScreen({ route }: { route: PetRouteProp }) {

  const { id } = route.params;

  return (
    <View style={styles.container}>
      <Header title="Pet" showBack={true} />
      <View style={styles.content}>
        <Text style={styles.welcome}>Pet! {id}</Text>
      </View>
    </View>
  );
}
