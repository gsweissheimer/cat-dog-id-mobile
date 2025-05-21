// src/components/Header/Header.tsx
import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../navigation/AppNavigator';
import { styles } from './Header.styles';
import { useAuth } from '../../contexts/AuthContext';

type HeaderProps = {
  title: string;
  showBack?: boolean;
  children?: React.ReactNode;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function Header({ title, children, showBack = false }: HeaderProps) {
    
  const navigation = useNavigation<NavigationProp>();

    const { signOut } = useAuth(); 

  return (
    <View style={styles.container}>
      {showBack ? (
        <Pressable onPress={() => navigation.replace('Home')} style={styles.backButton}>
          <Text style={styles.backText}>‹ Voltar</Text>
        </Pressable>
      ) : <Pressable onPress={signOut} style={styles.backButton}>
            <Text style={styles.backText}>Logout</Text>
          </Pressable>}
      <Text style={styles.title}>{title}</Text>
      <View style={styles.rightPlaceholder}>
        {children}
      </View>
    </View>
  );
}
