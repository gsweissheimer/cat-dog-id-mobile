import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useAuth } from '../contexts/AuthContext';
import AuthStack from './AuthStack';
import AppStack  from './AppStack';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Profile: undefined;
  Pet: { id: string };
};

export default function AppNavigator() {
  const { userToken, setUserToken } = useAuth();
  
  useEffect(() => {
    async function loadToken() {
      const token = await AsyncStorage.getItem('userToken');
      if (token) setUserToken(token);
    }
    loadToken();
  }, []);


  return (
    <NavigationContainer>
      {userToken ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
