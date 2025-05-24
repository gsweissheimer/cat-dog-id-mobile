import React from 'react';
import {
  NavigationContainer
} from '@react-navigation/native';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import { useAuth }   from '../contexts/AuthContext';
import AuthStack     from './AuthStack';
import AppStack      from './AppStack';

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Profile: undefined;
  Pet: { id: string };
};

export default function AppNavigator() {
  const { userToken, loading } = useAuth();
  // Enquanto o contexto carrega o token, mostra loading
  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  // Depois de carregar, decide qual fluxo renderizar
  return (
    <NavigationContainer>
      {userToken ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
