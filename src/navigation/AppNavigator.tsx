import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useAuth } from '../contexts/AuthContext';
import AuthStack from './AuthStack';
import AppStack  from './AppStack';

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Profile: undefined;
};

export default function AppNavigator() {
  const { signedIn } = useAuth();

  return (
    <NavigationContainer>
      {signedIn ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
