// src/navigation/AppStack.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home/Home';
import ProfileScreen from '../screens/Profile/Profile';
import PetScreen from '../screens/Pet/Pet';

const Stack = createNativeStackNavigator();

export default function AppStack() {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Pet" component={PetScreen} />
    </Stack.Navigator>
  );
}
